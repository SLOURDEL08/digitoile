// lib/validations.ts

import { z } from "zod";

export const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
export const postalCodeRegex = /^[0-9]{5}$/;

export const contactSchema = z.object({
  firstName: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne doit pas dépasser 50 caractères"),
  
  lastName: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne doit pas dépasser 50 caractères"),
  
  email: z.string()
    .email("L'adresse email n'est pas valide")
    .min(5, "L'email est trop court")
    .max(100, "L'email est trop long"),
  
  company: z.string()
    .max(100, "Le nom de l'entreprise ne doit pas dépasser 100 caractères")
    .optional()
    .or(z.literal("")),
  
  phone: z.string()
    .regex(phoneRegex, "Le format du numéro de téléphone n'est pas valide (ex: 06 12 34 56 78)")
    .optional()
    .or(z.literal("")),
  
  city: z.string()
    .min(2, "La ville doit contenir au moins 2 caractères")
    .max(100, "Le nom de la ville est trop long"),
  
  zipCode: z.string()
    .regex(postalCodeRegex, "Le code postal doit contenir exactement 5 chiffres")
    .optional()
    .or(z.literal(""))
});

export type ContactValidation = z.infer<typeof contactSchema>;

// Messages d'erreur personnalisés
export const errorMessages = {
  required: "Ce champ est requis",
  invalid: "Ce champ n'est pas valide",
  tooShort: (field: string) => `${field} est trop court`,
  tooLong: (field: string) => `${field} est trop long`,
  invalidEmail: "L'adresse email n'est pas valide",
  invalidPhone: "Le format du numéro de téléphone n'est pas valide",
  invalidPostal: "Le code postal doit contenir exactement 5 chiffres"
};