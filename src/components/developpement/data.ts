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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: [
      "Design responsive personnalisé",
      "Jusqu'à 5 pages (Accueil, Services, À propos, Contact, etc.)",
      "Optimisation SEO de base",
      "Intégration des réseaux sociaux",
      "Formulaire de contact",
      "Hébergement première année inclus",
    ],
    technologies: [
      { 
        name: "WordPress",
        description: "CMS le plus populaire",
        icon: SiWordpress,
        iconColor: "#21759B"
      },
      { 
        name: "Elementor Pro",
        description: "Constructeur de pages visuel",
        icon: SiElementor,
        iconColor: "#92003B"
      },
      { 
        name: "Yoast SEO",
        description: "Optimisation pour les moteurs de recherche",
        icon: SiYoast,
        iconColor: "#A4286A"
      },
      { 
        name: "Analytics",
        description: "Cache et optimisation",
        icon: SiGoogleanalytics,
        iconColor: "#E37400"
      }
    ],
    plugins: [
      { 
        name: "SEO Boost", 
        description: "Optimisation SEO", 
        icon: Search,
        included: true
      },
      { 
        name: "Social Media", 
        description: "Intégration réseaux sociaux", 
        icon: Share2,
        included: true
      },
      { 
        name: "Contact Pro", 
        description: "Formulaire de contact", 
        icon: MessageSquare,
        included: true
      },
      { 
        name: "Newsletter", 
        description: "Automatisation de mail", 
        icon: Mail,
        included: false,
        price: "19€/mois"
      },
      { 
        name: "Analytics Pro", 
        description: "Statistiques avancées", 
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
        text: "Visibilité en ligne 24/7",
        icon: Clock
      },
      {
        text: "Image professionnelle renforcée",
        icon: BadgeCheck
      },
      {
        text: "Acquisition de nouveaux clients",
        icon: Users
      }
    ]
  },
  {
    id: 2,
    title: "Site E-commerce",
    icon: ShoppingCart,
    description: "Une boutique en ligne complète pour vendre vos produits",
    technologies: [
      { 
        name: "WordPress",
        description: "CMS le plus populaire",
        icon: SiWordpress,
        iconColor: "#21759B"
      },
      { 
        name: "WooCommerce",
        description: "Solution e-commerce",
        icon: SiWoo,
        iconColor: "#96588A"
      },
      { 
        name: "Stripe",
        description: "Paiement sécurisé",
        icon: SiStripe,
        iconColor: "#008CDD"
      },
      { 
        name: "PayPal",
        description: "Paiement alternatif",
        icon: SiPaypal,
        iconColor: "#00457C"
      },
      { 
        name: "PHP",
        description: "Backend",
        icon: SiPhp,
        iconColor: "#777BB4"
      }
    ],
    plugins: [
      { 
        name: "Payment Gateway", 
        description: "Paiements sécurisés multi-devises", 
        icon: CreditCard,
        included: true
      },
      { 
        name: "Inventory Pro", 
        description: "Gestion avancée des stocks", 
        icon: Box,
        included: true
      },
      { 
        name: "Shipping Manager", 
        description: "Gestion des expéditions", 
        icon: Truck,
        included: true
      },
      { 
        name: "Abandoned Cart", 
        description: "Récupération des paniers abandonnés", 
        icon: ShoppingBasket,
        included: false,
        price: "29€/mois"
      },
      { 
        name: "Analytics Pro", 
        description: "Statistiques avancées", 
        icon: ChartBar,
        included: false,
        price: "25€/mois"
      }
    ],
    features: [
      "Catalogue produits illimité",
      "Système de panier et paiement sécurisé",
      "Gestion des stocks",
      "Tableau de bord administrateur",
      "Gestion des commandes et expéditions",
      "Intégration passerelles de paiement",
      "Email marketing de base"
    ],
    price: "2490€",
    delay: "4-6 semaines",
    gradient: "from-blue-500 to-cyan-600",
    benefits: [
      {
        text: "Ventes 24/7 automatisées",
        icon: ShoppingBag
      },
      {
        text: "Gestion centralisée",
        icon: LayoutDashboard
      },
      {
        text: "Analyse des ventes en temps réel",
        icon: TrendingUp
      }
    ]
  },
  {
    id: 3,
    title: "Site de Réservation",
    icon: Calendar,
    description: "Système de réservation en ligne pour vos services",
    technologies: [
      { 
        name: "WordPress",
        description: "CMS le plus populaire",
        icon: SiWordpress,
        iconColor: "#21759B"
      },
      { 
        name: "Google Calendar",
        description: "Synchronisation agenda",
        icon: SiGooglecalendar,
        iconColor: "#4285F4"
      },
      { 
        name: "Stripe",
        description: "Paiement sécurisé",
        icon: SiStripe,
        iconColor: "#008CDD"
      }
    ],
    plugins: [
      { 
        name: "Calendar Pro", 
        description: "Système de réservation avancé", 
        icon: CalendarRange,
        included: true
      },
      { 
        name: "Notifications", 
        description: "Alertes et rappels automatiques", 
        icon: BellRing,
        included: true
      },
      { 
        name: "Payment Processing", 
        description: "Gestion des acomptes", 
        icon: Wallet,
        included: true
      },
      { 
        name: "Analytics", 
        description: "Statistiques de réservation", 
        icon: ChartBar,
        included: false,
        price: "19€/mois"
      }
    ],
    features: [
      "Calendrier de disponibilités",
      "Système de réservation en temps réel",
      "Paiement des acomptes en ligne",
      "Gestion des créneaux horaires",
      "Notifications email automatiques",
      "Interface de gestion du planning",
      "Synchronisation agenda externe"
    ],
    price: "1990€",
    delay: "3-5 semaines",
    gradient: "from-emerald-500 to-green-600",
    benefits: [
      {
        text: "Réservations 24/7",
        icon: CalendarCheck
      },
      {
        text: "Gestion automatisée",
        icon: ClipboardCheck
      },
      {
        text: "Réduction des no-shows",
        icon: TrendingUp
      }
    ]
  },
  {
    id: 4,
    title: "Site Sur-Mesure",
    icon: Code,
    description: "Solution personnalisée selon vos besoins spécifiques",
    technologies: [
      { 
        name: "React.js",
        description: "Framework moderne",
        icon: SiReact,
        iconColor: "#61DAFB"
      },
      { 
        name: "Next.js",
        description: "Framework React optimisé",
        icon: SiNextdotjs,
        iconColor: "#000000"
      },
      { 
        name: "Vue.js",
        description: "Alternative React",
        icon: SiVuedotjs,
        iconColor: "#4FC08D"
      },
      { 
        name: "Node.js",
        description: "Backend JavaScript",
        icon: SiNodedotjs,
        iconColor: "#339933"
      },
      { 
        name: "PostgreSQL",
        description: "Base de données",
        icon: SiPostgresql,
        iconColor: "#4169E1"
      },
      { 
        name: "Figma",
        description: "Maquettes sur mesure",
        icon: SiFigma,
        iconColor: "#F24E1E"
      },
      { 
        name: "GSAP",
        description: "Animations avancées",
        icon: SiGreensock,
        iconColor: "#88CE02"
      },
      { 
        name: "Docker",
        description: "Conteneurisation",
        icon: SiDocker,
        iconColor: "#2496ED"
      }
    ],

    plugins: [
      { 
        name: "Custom Integration", 
        description: "Intégrations sur mesure", 
        icon: Code,
        included: true
      },
      { 
        name: "Security Suite", 
        description: "Sécurité renforcée", 
        icon: Shield,
        included: true
      },
      { 
        name: "Design System", 
        description: "Système de design personnalisé", 
        icon: Palette,
        included: true
      },
      { 
        name: "Animations", 
        description: "Animations sur mesure", 
        icon: Sparkles,
        included: true
      },
      { 
        name: "Performance", 
        description: "Monitoring avancé", 
        icon: Activity,
        included: true
      }
    ],
    features: [
      "Analyse complète de vos besoins",
      "Développement sur-mesure",
      "Fonctionnalités avancées",
      "Architecture personnalisée",
      "Intégrations API spécifiques",
      "Tests approfondis",
      "Support dédié"
    ],
    price: "Sur devis",
    delay: "6-12 semaines",
    gradient: "from-orange-500 to-rose-600",
    benefits: [
      {
        text: "Solution unique",
        icon: Workflow
      },
      {
        text: "Fonctionnalités personnalisées",
        icon: Settings
      },
      {
        text: "Évolutivité maximale",
        icon: Zap
      }
    ]
  }
];