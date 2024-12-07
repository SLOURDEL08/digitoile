export type ServiceCategory = 'web' | 'design' | 'marketing' | 'autres';

export interface ServiceOption {
  id: string;
  label: string;
}

export interface ServiceOptions {
  web: ServiceOption[];
  design: ServiceOption[];
  marketing: ServiceOption[];
  autres: ServiceOption[];
}

export interface FormServices {
  web: string[];
  design: string[];
  marketing: string[];
  autres: string[];
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
    marketing: [],
    autres: []
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
  ],
  design: [
    { id: 'web-design', label: 'Maquette' },
    { id: 'social-media', label: 'Réseaux Sociaux' },
    { id: 'branding', label: 'Identité Graphique' },
  ],
  marketing: [
    { id: 'tracking', label: 'Tracking' },
    { id: 'optimization', label: 'Optimisation' },
    { id: 'pixel', label: 'Pixel' },
  ],
  autres: [
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'refonte', label: 'Refonte' },
    { id: 'autres', label: 'Autres' },
  ],
};