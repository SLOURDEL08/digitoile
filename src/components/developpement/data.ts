import { 
  Globe, 
  ShoppingCart, 
  Calendar, 
  Code, 
  BarChart, 

  MessageSquare,

  Share2,
  CreditCard,
  Box,
  Truck,
  LineChart,
  CalendarRange,
  BellRing,
  Wallet,
  FileCheck
} from 'lucide-react';
import { WebService } from './types';

export const webServices: WebService[] = [
  {
    id: 1,
    title: "Site Vitrine",
    icon: Globe,
    description: "Une présence web professionnelle pour présenter votre activité",
    features: [
      "Design responsive personnalisé",
      "Jusqu'à 5 pages (Accueil, Services, À propos, Contact, etc.)",
      "Optimisation SEO de base",
      "Intégration des réseaux sociaux",
      "Formulaire de contact",
      "Hébergement première année inclus",
    ],
    price: "À partir de 990€",
    delay: "2-3 semaines",
    gradient: "from-violet-500 to-purple-600",
    benefits: [
      "Visibilité en ligne 24/7",
      "Image professionnelle renforcée",
      "Acquisition de nouveaux clients"
    ],
    plugins: [
      { name: "SEO Boost", description: "Optimisation pour les moteurs de recherche", icon: BarChart },
      { name: "Social Media", description: "Intégration réseaux sociaux", icon: Share2 },
      { name: "Contact Pro", description: "Formulaire de contact avancé", icon: MessageSquare }
    ]
  },
  {
    id: 2,
    title: "Site E-commerce",
    icon: ShoppingCart,
    description: "Une boutique en ligne complète pour vendre vos produits",
    features: [
      "Catalogue produits illimité",
      "Système de panier et paiement sécurisé",
      "Gestion des stocks",
      "Tableau de bord administrateur",
      "Gestion des commandes et expéditions",
      "Intégration passerelles de paiement",
      "Email marketing de base"
    ],
    price: "À partir de 2490€",
    delay: "4-6 semaines",
    gradient: "from-blue-500 to-cyan-600",
    benefits: [
      "Ventes 24/7 automatisées",
      "Gestion centralisée",
      "Analyse des ventes en temps réel"
    ],
    plugins: [
      { name: "Payment Gateway", description: "Paiements sécurisés multi-devises", icon: CreditCard },
      { name: "Inventory Pro", description: "Gestion avancée des stocks", icon: Box },
      { name: "Shipping Manager", description: "Gestion des expéditions", icon: Truck }
    ]
  },
  {
    id: 3,
    title: "Site de Réservation",
    icon: Calendar,
    description: "Système de réservation en ligne pour vos services",
    features: [
      "Calendrier de disponibilités",
      "Système de réservation en temps réel",
      "Paiement des acomptes en ligne",
      "Gestion des créneaux horaires",
      "Notifications email automatiques",
      "Interface de gestion du planning",
      "Synchronisation agenda externe"
    ],
    price: "À partir de 1990€",
    delay: "3-5 semaines",
    gradient: "from-emerald-500 to-green-600",
    benefits: [
      "Réservations 24/7",
      "Gestion automatisée",
      "Réduction des no-shows"
    ],
    plugins: [
      { name: "Calendar Pro", description: "Système de réservation avancé", icon: CalendarRange },
      { name: "Notifications", description: "Alertes et rappels automatiques", icon: BellRing },
      { name: "Payment Processing", description: "Gestion des acomptes", icon: Wallet }
    ]
  },
  {
    id: 4,
    title: "Site Sur-Mesure",
    icon: Code,
    description: "Solution personnalisée selon vos besoins spécifiques",
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
      "Solution unique",
      "Fonctionnalités personnalisées",
      "Évolutivité maximale"
    ],
    plugins: [
      { name: "Custom Integration", description: "Intégrations sur mesure", icon: Code },
      { name: "Analytics Pro", description: "Analyses avancées", icon: LineChart },
      { name: "Documentation", description: "Documentation complète", icon: FileCheck }
    ]
  }
];