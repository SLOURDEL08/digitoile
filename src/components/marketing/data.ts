// data.ts
import { 
  BarChart2, 
  Target, 
  ShoppingBag, 
  Zap, 
  LineChart,
  Facebook,
  Instagram,
  LinkedinIcon,
  ShoppingCart,
  Store,
  CreditCard,
  TrendingUp,
  BarChart,
  GaugeCircle,
  Users
} from 'lucide-react';
import { Service } from './types';

export const services: Service[] = [
  {
    id: 'gtm',
    title: "Google Tag Manager",
    shortDescription: "Configuration professionnelle GTM",
    fullDescription: "Implémentation et configuration professionnelle de Google Tag Manager pour un suivi précis et complet de vos données. Notre expertise vous garantit une installation optimale et conforme aux meilleures pratiques du marché.",
    icon: BarChart2,
    platforms: [
      { name: "Google Analytics", icon: BarChart },
      { name: "Meta Pixel", icon: Facebook },
      { name: "LinkedIn", icon: LinkedinIcon },
      { name: "TikTok", icon: GaugeCircle }
    ],
    highlights: [
      {
        title: "Taux de conversion",

        icon: Target
      },
      {
        title: "Visiteurs uniques",

        icon: Users
      },
      {
        title: "Revenu moyen",

        icon: LineChart
      }
    ],
    features: [
      "Audit de l'installation existante",
      "Configuration des balises et déclencheurs",
      "Tests et validation en environnement",
      "Formation de vos équipes",
      "Documentation technique",
      "Support post-implémentation"
    ]
  },
  {
    id: 'pixel',
    title: "Intégration Pixel",
    shortDescription: "Installation et optimisation des pixels",
    fullDescription: "Solution complète d'intégration et d'optimisation des pixels publicitaires pour maximiser la performance de vos campagnes. Nous assurons une configuration précise et conforme au RGPD pour tous vos canaux marketing.",
    icon: Target,
    platforms: [
      { name: "Facebook", icon: Facebook },
      { name: "Instagram", icon: Instagram },
      { name: "LinkedIn", icon: LinkedinIcon },
      { name: "Google Ads", icon: TrendingUp }
    ],
    highlights: [
      {
        title: "Taux de conversion",

        icon: Target
      },
      {
        title: "Visiteurs uniques",

        icon: Users
      },
      {
        title: "Revenu moyen",

        icon: LineChart
      }
    ],
    features: [
      "Installation des pixels publicitaires",
      "Configuration des événements standards",
      "Mise en place du consentement RGPD",
      "Tests de validation",
      "Optimisation des audiences",
      "Rapport de performance"
    ]
  },
  {
    id: 'shop',
    title: "Optimisation E-commerce",
    shortDescription: "Maximisez vos ventes en ligne",
    fullDescription: "Optimisation complète de votre boutique en ligne pour augmenter vos conversions. Notre approche combine analyse technique, UX et marketing pour créer une expérience d'achat performante et convertissante.",
    icon: ShoppingBag,
    platforms: [
      { name: "WooCommerce", icon: ShoppingCart },
      { name: "Shopify", icon: Store },
      { name: "PrestaShop", icon: CreditCard },
      { name: "Google Shopping", icon: ShoppingBag }
    ],
    highlights: [
      {
        title: "Taux de conversion",

        icon: Target
      },
      {
        title: "Visiteurs uniques",

        icon: Users
      },
      {
        title: "Revenu moyen",

        icon: LineChart
      }
    ],
    features: [
      "Audit de performance",
      "Optimisation du tunnel de conversion",
      "Configuration du tracking e-commerce",
      "A/B Testing",
      "Recommandations produits",
      "Rapport mensuel"
    ]
  },
  {
    id: 'analytics',
    title: "Analytics 4 Setup",
    shortDescription: "Migration et configuration GA4",
    fullDescription: "Accompagnement complet dans la mise en place et l'optimisation de Google Analytics 4. Notre expertise vous assure une transition en douceur et une configuration optimale pour exploiter tout le potentiel de GA4.",
    icon: LineChart,
    platforms: [
      { name: "Google Analytics", icon: BarChart },
      { name: "Data Studio", icon: LineChart },
      { name: "BigQuery", icon: BarChart2 },
      { name: "Tag Manager", icon: Target }
    ],
    highlights: [
      {
        title: "Taux de conversion",

        icon: Target
      },
      {
        title: "Visiteurs uniques",

        icon: Users
      },
      {
        title: "Revenu moyen",

        icon: LineChart
      }
    ],
    features: [
      "Migration GA3 vers GA4",
      "Configuration des propriétés",
      "Paramétrage des événements",
      "Création de segments",
      "Formation équipe",
      "Support continu"
    ]
  },
  {
    id: 'performance',
    title: "Performance Marketing",
    shortDescription: "Stratégie d'acquisition data-driven",
    fullDescription: "Développez votre présence en ligne avec une stratégie marketing basée sur les données. Notre approche data-driven optimise vos investissements publicitaires pour maximiser votre ROI sur tous les canaux.",
    icon: Zap,
    platforms: [
      { name: "Google Ads", icon: TrendingUp },
      { name: "Facebook Ads", icon: Facebook },
      { name: "LinkedIn Ads", icon: LinkedinIcon },
      { name: "Analytics", icon: BarChart }
    ],
    highlights: [
      {
        title: "Taux de conversion",

        icon: Target
      },
      {
        title: "Visiteurs uniques",

        icon: Users
      },
      {
        title: "Revenu moyen",

        icon: LineChart
      }
    ],
    features: [
      "Audit des campagnes existantes",
      "Stratégie d'acquisition",
      "Optimisation des conversions",
      "Tracking avancé",
      "Tests A/B",
      "Reporting hebdomadaire"
    ]
  }
];