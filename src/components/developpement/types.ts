import { LucideIcon } from 'lucide-react';

export interface Plugin {
  name: string;
  description: string;
  icon: LucideIcon;
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
  benefits: string[];
  plugins: Plugin[];
}