import { WebService } from './types';
import { 
  Globe, ShoppingCart, Calendar, Code, 
  MessageSquare, Share2, CreditCard, Box, Truck, 
   CalendarRange, BellRing, Wallet,
   Mail, Search, ChartBar, ShoppingBasket,
  Shield, Palette, Sparkles, Activity, 
  BadgeCheck, Users, ShoppingBag, LayoutDashboard, 
  TrendingUp, ClipboardCheck, CalendarCheck, Workflow,
  Settings, Zap,
  Clock
} from 'lucide-react';

import {
  SiWordpress,
  SiElementor,
  SiYoast,
  SiGoogleanalytics,
  SiWoo,
  SiStripe,
  SiPaypal,
  SiPhp,
  SiGooglecalendar,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiPostgresql,
  SiFigma,
  SiGreensock,
  SiDocker
} from 'react-icons/si';

export const webServices: WebService[] = [
  {
   id: 1,
  title: "Site Vitrine",
  icon: Globe,
  description: "Créez une présence en ligne impactante avec un site vitrine professionnel entièrement personnalisé. Notre solution combine design moderne, performances optimales et outils marketing essentiels pour augmenter votre visibilité et convertir vos visiteurs en clients. Idéal pour les entreprises cherchant à établir une présence digitale solide tout en restant maîtres de leur contenu.",
  features: [
    "Design responsive sur-mesure",
    "Pack 5 pages essentielles",
    "Optimisation SEO complète",
    "Intégration sociale",
    "Formulaire de contact sécurisé",
    "Configuration GoogleMyBusiness",
  ],
  technologies: [
    { 
      name: "WordPress",
      description: "Gestion de contenu intuitive",
      icon: SiWordpress,
      iconColor: "#21759B"
    },
    { 
      name: "Elementor",
      description: "Éditeur visuel performant",
      icon: SiElementor,
      iconColor: "#92003B"
    },
    { 
      name: "Yoast SEO",
      description: "Référencement naturel optimal",
      icon: SiYoast,
      iconColor: "#A4286A"
    },
    { 
      name: "Forminator",
      description: "Formulaires sécurisés",
      icon: SiGoogleanalytics,
      iconColor: "#E37400"
    }
  ],
  plugins: [
    { 
      name: "SEO Boost", 
      description: "Référencement optimisé", 
      icon: Search,
      included: true
    },
    { 
      name: "Social Media", 
      description: "Connexion réseaux sociaux", 
      icon: Share2,
      included: true
    },
    { 
      name: "Contact Pro", 
      description: "Gestion des contacts", 
      icon: MessageSquare,
      included: true
    },
    { 
      name: "Newsletter", 
      description: "Gestion des emails", 
      icon: Mail,
      included: false,
      price: "19€/mois"
    },
    { 
      name: "Analytics Pro", 
      description: "Analyses détaillées", 
      icon: ChartBar,
      included: false,
      price: "15€/mois"
    }
  ],
  price: "990€",
  delay: "2-3 semaines",
  gradient: "from-violet-500 to-purple-600",
  benefits: [
    {
      text: "Disponibilité permanente",
      icon: Clock
    },
    {
      text: "Image de marque renforcée",
      icon: BadgeCheck
    },
    {
      text: "Acquisition client optimisée",
      icon: Users
    }
  ]
  },
  {
     id: 2,
  title: "Site E-commerce",
  icon: ShoppingCart,
  description: "Lancez votre boutique en ligne professionnelle avec une solution e-commerce complète et évolutive. Notre plateforme intègre tous les outils essentiels pour gérer vos ventes, stocks et expéditions efficacement. Idéale pour les entreprises souhaitant développer leur présence digitale et automatiser leurs ventes en ligne, avec des options d'extension selon vos besoins.",
  technologies: [
    {
      name: "WordPress",
      description: "Gestion simplifiée du contenu",
      icon: SiWordpress,
      iconColor: "#21759B"
    },
    {
      name: "WooCommerce",
      description: "Plateforme e-commerce flexible",
      icon: SiWoo,
      iconColor: "#96588A"
    },
    {
      name: "Stripe",
      description: "Paiements sécurisés intégrés",
      icon: SiStripe,
      iconColor: "#008CDD"
    },
    {
      name: "PayPal",
      description: "Solution de paiement universelle",
      icon: SiPaypal,
      iconColor: "#00457C"
    },
    {
      name: "PHP",
      description: "Performance et sécurité",
      icon: SiPhp,
      iconColor: "#777BB4"
    }
  ],
  plugins: [
    {
      name: "Payment Gateway",
      description: "Paiements multi-devises",
      icon: CreditCard,
      included: true
    },
    {
      name: "Inventory Pro",
      description: "Gestion des stocks avancée",
      icon: Box,
      included: true
    },
    {
      name: "Shipping Manager",
      description: "Logistique optimisée",
      icon: Truck,
      included: true
    },
    {
      name: "Abandoned Cart",
      description: "Récupération clients",
      icon: ShoppingBasket,
      included: false,
      price: "29€/mois"
    },
    {
      name: "Analytics Pro",
      description: "Analyses e-commerce",
      icon: ChartBar,
      included: false,
      price: "25€/mois"
    }
  ],
  features: [
    "Catalogue produits illimité",
    "Paiements sécurisés multi-devises",
    "Gestion stocks automatisée",
    "Interface administration complète",
    "Suivi commandes et expéditions",
    "Intégration paiements avancée",
    "Marketing email intégré"
  ],
  price: "2490€",
  delay: "4-6 semaines",
  gradient: "from-blue-500 to-cyan-600",
  benefits: [
    {
      text: "Commerce automatisé 24/7",
      icon: ShoppingBag
    },
    {
      text: "Gestion tout-en-un",
      icon: LayoutDashboard
    },
    {
      text: "Suivi ventes en direct",
      icon: TrendingUp
    }
  ]
  },
  {
   id: 3,
  title: "Site de Réservation",
  icon: Calendar,
  description: "Maximisez la rentabilité de vos hébergements avec notre plateforme de réservation intelligente. Synchronisez automatiquement vos disponibilités sur Airbnb, Booking et autres plateformes, gérez vos réservations centralisées et automatisez vos paiements. Solution idéale pour les propriétaires souhaitant optimiser leur gestion locative tout en éliminant les risques de double réservation.",
  technologies: [
    { 
      name: "WordPress",
      description: "Gestion simplifiée des biens",
      icon: SiWordpress,
      iconColor: "#21759B"
    },
    { 
      name: "Airbnb Sync",
      description: "Synchronisation Airbnb",
      icon: SiPaypal,
      iconColor: "#FF5A5F"
    },
    { 
      name: "Booking.com",
      description: "Synchronisation Booking",
      icon: SiPaypal,
      iconColor: "#003580"
    },
    { 
      name: "Stripe",
      description: "Paiements sécurisés",
      icon: SiStripe,
      iconColor: "#008CDD"
    }
  ],
  plugins: [
    { 
      name: "Channel Manager", 
      description: "Synchronisation multi-plateformes", 
      icon: CalendarRange,
      included: true
    },
    { 
      name: "Smart Notifications", 
      description: "Alertes hôtes et voyageurs", 
      icon: BellRing,
      included: true
    },
    { 
      name: "Secure Payments", 
      description: "Paiements et cautions", 
      icon: Wallet,
      included: true
    },
    { 
      name: "Rental Analytics", 
      description: "Statistiques location", 
      icon: ChartBar,
      included: false,
      price: "29€/mois"
    }
  ],
  features: [
    "Synchronisation multi-plateformes",
    "Paiements en ligne sécurisés",
    "Gestion des cautions",
    "Messages automatiques",
    "Check-in digital",
    "Calendrier dynamique",
    "Protection anti double-réservation"
  ],
  price: "2490€",
  delay: "3-5 semaines",
  gradient: "from-emerald-500 to-green-600",
  benefits: [
    {
      text: "Location optimisée 24/7",
      icon: CalendarCheck
    },
    {
      text: "Gestion centralisée",
      icon: ClipboardCheck
    },
    {
      text: "Revenus maximisés",
      icon: TrendingUp
    }
  ]
  },
  {
    id: 4,
  title: "Site Sur-Mesure",
  icon: Code,
  description: "Développez votre vision digitale avec une solution web entièrement personnalisée. Notre approche sur-mesure combine technologies modernes, architecture robuste et design unique pour créer une plateforme parfaitement adaptée à vos objectifs. Idéal pour les projets complexes nécessitant des fonctionnalités spécifiques, une forte scalabilité et une expérience utilisateur distinctive.",
  technologies: [
    { 
      name: "React.js",
      description: "Interface interactive moderne",
      icon: SiReact,
      iconColor: "#61DAFB"
    },
    { 
      name: "Next.js",
      description: "Performance et SEO optimal",
      icon: SiNextdotjs,
      iconColor: "#000000"
    },
    { 
      name: "Vue.js",
      description: "Flexibilité et modularité",
      icon: SiVuedotjs,
      iconColor: "#4FC08D"
    },
    { 
      name: "Node.js",
      description: "API performante",
      icon: SiNodedotjs,
      iconColor: "#339933"
    },
    { 
      name: "PostgreSQL",
      description: "Données sécurisées",
      icon: SiPostgresql,
      iconColor: "#4169E1"
    },
    { 
      name: "Figma",
      description: "Design système unique",
      icon: SiFigma,
      iconColor: "#F24E1E"
    },
    { 
      name: "GSAP",
      description: "Animations fluides",
      icon: SiGreensock,
      iconColor: "#88CE02"
    },
    { 
      name: "Docker",
      description: "Déploiement optimisé",
      icon: SiDocker,
      iconColor: "#2496ED"
    }
  ],
  plugins: [
    { 
      name: "Custom Integration", 
      description: "Solutions connectées", 
      icon: Code,
      included: true
    },
    { 
      name: "Security Suite", 
      description: "Protection avancée", 
      icon: Shield,
      included: true
    },
    { 
      name: "Design System", 
      description: "Identité visuelle unique", 
      icon: Palette,
      included: true
    },
    { 
      name: "Animations", 
      description: "Interactions dynamiques", 
      icon: Sparkles,
      included: true
    },
    { 
      name: "Performance", 
      description: "Optimisation continue", 
      icon: Activity,
      included: true
    }
  ],
  features: [
    "Audit et conseil stratégique",
    "Architecture personnalisée",
    "Fonctionnalités spécifiques",
    "Intégrations API avancées",
    "Tests de qualité complets",
    "Support technique dédié",
    "Documentation détaillée"
  ],
  price: "Sur devis",
  delay: "6-12 semaines",
  gradient: "from-orange-500 to-rose-600",
  benefits: [
    {
      text: "Solution exclusive",
      icon: Workflow
    },
    {
      text: "Système personnalisé",
      icon: Settings
    },
    {
      text: "Scale illimité",
      icon: Zap
    }
  ]
  }
];