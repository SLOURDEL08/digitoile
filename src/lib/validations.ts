import { z } from "zod";

export const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
export const postalCodeRegex = /^[0-9]{5}$/;

export const contactSchema = z.object({
  firstName: z.string()
    .min(1, "Prénom requis")
    .max(50, "Prénom trop long (50 caractères max)"),
  
  lastName: z.string()
    .min(1, "Nom requis")
    .max(50, "Nom trop long (50 caractères max)"),
  
  email: z.string()
    .email("Email invalide")
    .min(5, "Email trop court")
    .max(100, "Email trop long"),
  
  company: z.string()
    .max(20, "Nom de l'entreprise trop long")
    .optional()
    .or(z.literal("")),
  
  phone: z.string()
    .regex(phoneRegex, "Numéro invalide (ex: 06 12 34 56 78)"),
  
  city: z.string()
    .min(1, "Ville requise")
    .max(100, "Nom de la ville trop long"),
  
  zipCode: z.string()
    .regex(postalCodeRegex, "Code postal invalide")
    .optional()
    .or(z.literal(""))
});

export type ContactValidation = z.infer<typeof contactSchema>;

// Messages d'erreur personnalisés
export const errorMessages = {
  required: "Champ requis",
  invalid: "Valeur invalide",
  tooShort: (field: string) => `${field} trop court`,
  tooLong: (field: string) => `${field} trop long`,
  invalidEmail: "Email invalide",
  invalidPhone: "Numéro invalide",
  invalidPostal: "Code postal invalide"
};