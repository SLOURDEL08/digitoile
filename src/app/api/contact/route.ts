// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  city?: string;
  zipCode?: string;
}

interface ProjectInfo {
  hasWebsite: boolean;
  websiteUrl?: string;
  hasBranding: boolean;
  hasSocialMedia: boolean;
}

interface FormData {
  contact: Contact;
  services: {
    [key: string]: string[];
  };
  projectInfo: ProjectInfo;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.fr',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  debug: true
});

export async function POST(request: Request) {
  try {
    // Vérification simplifiée des credentials
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      throw new Error('Identifiants SMTP manquants');
    }

    // Vérifier la connexion SMTP
    try {
      await transporter.verify();
      console.log('Connexion SMTP vérifiée avec succès');
    } catch (verifyError) {
      console.error('Erreur de vérification SMTP:', verifyError);
      throw new Error('Impossible de se connecter au serveur SMTP');
    }
    
    const formData: FormData = await request.json();

    const htmlContent = `
      <h2>Nouvelle demande de contact - Site Digitoile</h2>
      
      <h3>Informations de contact</h3>
      <p><strong>Nom:</strong> ${formData.contact.firstName} ${formData.contact.lastName}</p>
      <p><strong>Email:</strong> ${formData.contact.email}</p>
      <p><strong>Téléphone:</strong> ${formData.contact.phone || 'Non renseigné'}</p>
      <p><strong>Société:</strong> ${formData.contact.company || 'Non renseigné'}</p>
      <p><strong>Ville:</strong> ${formData.contact.city || 'Non renseigné'}</p>
      <p><strong>Code postal:</strong> ${formData.contact.zipCode || 'Non renseigné'}</p>

      <h3>Services demandés</h3>
      <ul>
        ${Object.entries(formData.services)
          .map(([category, services]) => 
            services.length > 0 ? 
            `<li><strong>${category}:</strong> ${services.join(', ')}</li>` : 
            ''
          )
          .filter(Boolean)
          .join('')}
      </ul>

      <h3>Informations sur le projet</h3>
      <p><strong>Site web existant:</strong> ${formData.projectInfo.hasWebsite ? 'Oui' : 'Non'}</p>
      ${formData.projectInfo.websiteUrl ? 
        `<p><strong>URL du site:</strong> ${formData.projectInfo.websiteUrl}</p>` : ''}
      <p><strong>Identité graphique:</strong> ${formData.projectInfo.hasBranding ? 'Oui' : 'Non'}</p>
      <p><strong>Réseaux sociaux:</strong> ${formData.projectInfo.hasSocialMedia ? 'Oui' : 'Non'}</p>
    `;

    const mailOptions = {
      from: {
        name: 'Digitoile Contact',
        address: process.env.SMTP_USER as string
      },
      to: process.env.SMTP_USER, // On utilise la même adresse pour l'envoi et la réception
      subject: `Nouvelle demande de contact - ${formData.contact.firstName} ${formData.contact.lastName}`,
      html: htmlContent,
      replyTo: formData.contact.email,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message envoyé: %s', info.messageId);
      
      return NextResponse.json({ 
        success: true,
        messageId: info.messageId
      });
    } catch (emailError) {
      console.error('Erreur SMTP:', emailError);
      throw new Error(`Erreur SMTP: ${emailError instanceof Error ? emailError.message : 'Erreur inconnue'}`);
    }

  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}