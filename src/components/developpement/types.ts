import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface Technology {
  name: string;
  description?: string;
  icon: IconType; // Importer IconType depuis 'react-icons'
  iconColor?: string;
}

export interface Benefit {
  text: string;
  icon: LucideIcon;
  description?: string; 
}

export interface Plugin {
  name: string;
  description: string;
  icon: LucideIcon;
  included: boolean;
  price?: string;
  features?: string[]; 
}

export interface WebService {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  price: string;
  delay: string;
  gradient: string;
  benefits: Benefit[];
  technologies: Technology[];
  plugins: Plugin[];
  category?: string;
  recommended?: boolean; 
  maintenanceFee?: string; 
}