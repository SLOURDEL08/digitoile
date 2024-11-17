import { LucideIcon } from 'lucide-react';

export interface Platform {
  name: string;
  icon: LucideIcon;
}

interface Highlight {
  title: string;
  metric: string;
  trend: number;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  platforms: Platform[];
  highlights: Highlight[];
  features: string[];
}