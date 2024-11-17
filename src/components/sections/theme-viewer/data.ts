import { Theme } from "./types";

export const themes: Theme[] = [
  {
    id: "restaurant",
    label: "Restaurant & Café",
    description: "Solution complète pour restaurants et cafés",
    image: "/images/projects/lesvanniers.png",
    type: "vitrine-booking",
    features: [
      "Réservation de tables en ligne",
      "Menu digital interactif",
      "Interface avec UberEats/Deliveroo",
      "Gestion des événements privés"
    ],
    metrics: {
      conversion: "35%",
      traffic: "+150%",
      reviews: "4.8/5"
    },
    extensions: [
      "Système de réservation",
      "Menu QR Code",
      "Programme de fidélité",
      "Galerie photo HD"
    ]
  },
  {
    id: "artisan",
    label: "Artisan & Créateur",
    description: "Vitrine digitale pour artisans d'art",
    image: "/images/projects/lesvanniers.png",
    type: "vitrine-ecommerce",
    features: [
      "Portfolio personnalisé",
      "Boutique en ligne",
      "Blog intégré",
      "Commandes sur mesure"
    ],
    metrics: {
      conversion: "28%",
      traffic: "+90%",
      reviews: "4.9/5"
    },
    extensions: [
      "Galerie 3D",
      "Devis en ligne",
      "Instagram Feed",
      "Chat client"
    ]
  },
  {
    id: "immobilier",
    label: "Agent Immobilier",
    description: "Plateforme immobilière professionnelle",
    image: "/images/projects/lesvanniers.png",
    type: "vitrine-booking",
    features: [
      "Listings détaillés",
      "Visite virtuelle",
      "Estimation en ligne",
      "Prise de RDV"
    ],
    metrics: {
      conversion: "42%",
      traffic: "+200%",
      reviews: "4.7/5"
    },
    extensions: [
      "Map interactive",
      "CRM intégré",
      "Estimateur de prix",
      "Signature électronique"
    ]
  },
  {
    id: "avocat",
    label: "Cabinet d'Avocat",
    description: "Présence en ligne pour cabinets juridiques",
    image: "/images/projects/lesvanniers.png",
    type: "vitrine-booking",
    features: [
      "Présentation des expertises",
      "Prise de RDV sécurisée",
      "Espace client privé",
      "Blog juridique"
    ],
    metrics: {
      conversion: "25%",
      traffic: "+120%",
      reviews: "4.8/5"
    },
    extensions: [
      "Consultation en ligne",
      "Documents sécurisés",
      "FAQ dynamique",
      "Newsletter juridique"
    ]
  },
  {
    id: "medical",
    label: "Professionnel de Santé",
    description: "Solution digitale pour le secteur médical",
    image: "/images/projects/lesvanniers.png",
    type: "vitrine-booking",
    features: [
      "Prise de RDV en ligne",
      "Téléconsultation",
      "Ordonnance digitale",
      "Suivi patient"
    ],
    metrics: {
      conversion: "45%",
      traffic: "+180%",
      reviews: "4.9/5"
    },
    extensions: [
      "Dossier médical",
      "Rappel SMS",
      "Paiement en ligne",
      "Questionnaire santé"
    ]
  },
  {
    id: "ecommerce",
    label: "Boutique Mode",
    description: "E-commerce spécialisé mode et accessoires",
    image: "/images/projects/lesvanniers.png",
    type: "ecommerce",
    features: [
      "Catalogue produits avancé",
      "Guide des tailles",
      "Click & Collect",
      "Programme fidélité"
    ],
    metrics: {
      conversion: "32%",
      traffic: "+250%",
      reviews: "4.6/5"
    },
    extensions: [
      "Essayage virtuel",
      "Instagram Shop",
      "Stock temps réel",
      "Retours faciles"
    ]
  }
];