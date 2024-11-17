// types/contact-form.ts

export type ServiceCategory = 'web' | 'design' | 'marketing';

export interface ServiceOption {
  id: string;
  label: string;
}

export interface ServiceOptions {
  web: ServiceOption[];
  design: ServiceOption[];
  marketing: ServiceOption[];
}

export interface FormServices {
  web: string[];
  design: string[];
  marketing: string[];
}

export interface ProjectInfo {
  hasWebsite: boolean | null;
  websiteUrl: string | null;
  hasBranding: boolean | null;
  hasSocialMedia: boolean | null;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  city: string;
  zipCode: string;
}

export interface FormData {
  services: FormServices;
  projectInfo: ProjectInfo;
  contact: ContactInfo;
}

export const defaultFormData: FormData = {
  services: {
    web: [],
    design: [],
    marketing: []
  },
  projectInfo: {
    hasWebsite: null,
    websiteUrl: '',
    hasBranding: null,
    hasSocialMedia: null
  },
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    city: '',
    zipCode: ''
  }
};

export const serviceOptions: ServiceOptions = {
  web: [
    { id: 'vitrine', label: 'Site Vitrine' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'booking', label: 'Réservation' },
    { id: 'surmesure', label: 'Sur-mesure' },
    { id: 'maintenance', label: 'Maintenance' },
  ],
  design: [
    { id: 'web-design', label: 'Maquette Web' },
    { id: 'social-media', label: 'Réseaux Sociaux' },
    { id: 'branding', label: 'Identité Graphique' },
  ],
  marketing: [
    { id: 'tracking', label: 'Tracking' },
    { id: 'optimization', label: 'Optimisation' },
    { id: 'pixel', label: 'Pixel' },
  ],
};