import { Theme } from "./types";
import { Utensils, Home, Scale, Stethoscope, ShoppingBag, House } from "lucide-react";

export const themes: Theme[] = [
    {
    id: "couvreur",
    label: "Couvreur / Zingeur",
    description: "Entreprise spécialisée dans l'assistance et la rénovation de toiture",
    type: "vitrine",
    icon: House,
    subThemes: [
      {
        id: "artisan",
        image: "/images/projects/themes/couvreur1.png",
        objective: "Mettre en avant le savoir-faire artisanal et l'aspect traditionnel des services de couverture. Ce thème est conçu pour les artisans qui souhaitent présenter leur travail de manière authentique, en partageant des témoignages clients et en offrant des conseils d'entretien réguliers sur leur blog.",
        features: [
          "Portfolio travaux réalisés",
          "Devis en ligne",
          "Témoignages clients",
          "Blog conseils entretien"
        ]
      },
      {
        id: "enterprise",
        image: "/images/projects/themes/couvreur2.png",
        objective: "Offrir une image professionnelle à une entreprise de couverture offrant une gamme de services multiples aux entreprises qui cherchent à démontrer leur expertise dans divers domaines du métier, avec une attention particulière à la présentation de services détaillés et un espace dédié aux professionnels du bâtiment, comme les architectes.",
        features: [
          "Catalogue services détaillé",
          "Simulateur de projet",
          "Zone intervention interactive",
          "Espace pro architectes"
        ]
      },
      {
        id: "expertise",
        image: "/images/projects/themes/couvreur3.png",
        objective: "Offrir une image professionnelle à une entreprise de couverture offrant une gamme de services multiples aux entreprises qui cherchent à démontrer leur expertise dans divers domaines du métier, avec une attention particulière à la présentation de services détaillés et un espace dédié aux professionnels du bâtiment, comme les architectes.",
        features: [
          "Catalogue services détaillé",
          "Simulateur de projet",
          "Zone intervention interactive",
          "Espace pro architectes"
        ]
      }
    ]
  },
  {
    id: "restaurant",
    label: "Restaurant & Café",
    description: "Solution complète pour restaurants et cafés",
    type: "vitrine",
    icon: Utensils,
    subThemes: [
      {
        id: "burger",
        image: "/images/projects/themes/resto4.png",
        objective: "Ce thème met l'accent sur une interface élégante et minimaliste, idéale pour les restaurants modernes qui souhaitent offrir une expérience raffinée à leurs clients. L'interface fluide et intuitive permet aux utilisateurs de réserver facilement une table, consulter un menu interactif et effectuer des commandes.",
        features: [
          "Réservation de tables en ligne",
          "Menu digital interactif",
          "Interface avec UberEats/Deliveroo",
          "Gestion des événements privés"
        ]
      },
      {
        id: "traditional",
        image: "/images/projects/themes/resto2.png",
        objective: "Ce thème est conçu pour capturer l'essence des restaurants classiques, en mettant l'accent sur la saisonnalité des menus et l'histoire du lieu. La galerie photo permet de partager l'ambiance unique de l'établissement, et le blog de recettes aide à créer une communauté autour du restaurant tout en renforçant son image.",
        features: [
          "Menu saisonnier dynamique",
          "Galerie photo ambiance",
          "Blog recettes et actualités",
          "Carte des vins interactive"
        ]
      },
      {
        id: "bistro",
        image: "/images/projects/themes/resto1.png",
        objective: "Interface conviviale et dynamique pour les bistros et brasseries permettant aux clients de réserver des tables en ligne, découvrir le menu du jour et s'informer sur les événements spéciaux, tout en ayant la possibilité de recevoir des informations sur les promotions via une newsletter.",
        features: [
          "Menu du jour automatisé",
          "Réservations de groupe",
          "Galerie événements",
          "Newsletter promotions"
        ]
      },
        {
        id: "luxe",
        image: "/images/projects/themes/resto3.png",
        objective: "Interface conviviale et dynamique pour les bistros et brasseries permettant aux clients de réserver des tables en ligne, découvrir le menu du jour et s'informer sur les événements spéciaux, tout en ayant la possibilité de recevoir des informations sur les promotions via une newsletter.",
        features: [
          "Menu du jour automatisé",
          "Réservations de groupe",
          "Galerie événements",
          "Newsletter promotions"
        ]
      }
    ]
  },

  {
    id: "immobilier",
    label: "Agent Immobilier",
    description: "Plateforme immobilière professionnelle",
    type: "vitrine-booking",
    icon: Home,
    subThemes: [
      {
        id: "agency",
        image: "/images/projects/themes/immo1.png",
        objective: "Vitrine moderne et dynamique pour les agences immobilières qui souhaitent offrir une expérience de recherche fluide et avancée pour les acheteurs et locataires. La recherche de biens immobiliers devient plus intuitive grâce à des filtres de recherche avancés, et la possibilité de réserver des visites en ligne optimise l'expérience client.",
        features: [
          "Recherche avancée biens",
          "Visite virtuelle 360°",
          "Estimation en ligne",
          "Prise RDV automatisée"
        ]
      },
      {
        id: "luxury",
        image: "/images/projects/themes/immo2.png",
        objective: "Présentation haut de gamme pour des biens immobiliers d'exception. Ce thème est conçu pour mettre en valeur des biens immobiliers de luxe en offrant une expérience premium aux clients. L'utilisation de galeries HDR immersives et de vidéos par drone permet de capturer la magnificence des propriétés, tandis que l'espace privé pour les clients VIP ajoute une touche exclusive.",
        features: [
          "Galerie HDR immersive",
          "Vidéos drone intégrées",
          "Espace clients privé",
          "Matching acheteurs VIP"
        ]
      }
    ]
  },
  {
    id: "avocat",
    label: "Cabinet d'Avocat",
    description: "Présence en ligne pour cabinets juridiques",
    type: "vitrine-booking",
    icon: Scale,
    subThemes: [
      {
        id: "cabinet",
        image: "/images/projects/themes/lawyer1.png",
        objective: "Idéal pour les cabinets qui souhaitent maintenir une image sérieuse et professionnelle, avec des informations détaillées sur les expertises, la possibilité de prendre des rendez-vous en ligne et un espace client sécurisé.",
        features: [
          "Présentation des expertises",
          "Prise de RDV sécurisée",
          "Espace client privé",
          "Blog juridique"
        ]
      },
      {
        id: "modern",
        image: "/images/projects/themes/lawyer2.png",
        objective: "Design moderne et innovant pour un cabinet d'avocats nouvelle génération. Ce thème est destiné aux cabinets d'avocats qui adoptent une approche plus technologique, avec la possibilité de consulter un avocat en ligne, d'utiliser un chatbot pour répondre aux questions fréquentes, et de gérer des paiements sécurisés directement via la plateforme.",
        features: [
          "Consultation en ligne",
          "Chatbot juridique",
          "Base documentaire",
          "Paiement sécurisé"
        ]
      }
    ]
  },
  {
    id: "medical",
    label: "Professionnel de Santé",
    description: "Solution digitale pour le secteur médical",
    type: "vitrine-booking",
    icon: Stethoscope,
    subThemes: [
      {
        id: "clinique",
        image: "/images/projects/themes/pharma1.png",
        objective: "Solution complète pour les cliniques et les centres médicaux. Ce thème est conçu pour offrir une plateforme complète qui permet aux patients de prendre rendez-vous en ligne, de consulter leurs résultats médicaux, et de bénéficier de consultations à distance. Le suivi des patients est également facilité grâce à des outils intégrés.",
        features: [
          "Prise de RDV en ligne",
          "Téléconsultation",
          "Ordonnance digitale",
          "Suivi patient"
        ]
      },
      {
        id: "specialist",
        image: "/images/projects/themes/pharma2.png",
        objective: "Présentation spécifique pour les praticiens indépendants en offrant des outils de gestion d'agenda intelligent, des formulaires de santé pour recueillir des informations pré-consultation et un espace de bibliothèque médicale pour partager des ressources avec les patients.",
        features: [
          "Agenda intelligent",
          "Formulaires santé",
          "Bibliothèque médicale",
          "Notifications SMS"
        ]
      }
    ]
  },
  {
    id: "ecommerce",
    label: "Boutique Mode",
    description: "E-commerce spécialisé mode et accessoires",
    type: "ecommerce",
    icon: ShoppingBag,
    subThemes: [
      {
        id: "fashion",
        image: "/images/projects/lesvanniers.png",
        objective: "Boutique en ligne moderne conçu pour les e-commerces qui proposent des vêtements et accessoires, avec un catalogue produit avancé et des fonctionnalités pratiques telles qu'un guide des tailles et un programme de fidélité.",
        features: [
          "Catalogue produits avancé",
          "Guide des tailles",
          "Click & Collect",
          "Programme fidélité"
        ]
      },
      {
        id: "luxury",
        image: "/images/projects/themes/fashion2.png",
        objective: "Boutique en ligne optimisée pour la conversion, avec des outils d'analytics, de tracking et des extensions premium pour maximiser les commandes, le retargeting et la relance de paniers abandonnés.",       
        features: [
          "Visualisation 3D produits",
          "Personal shopper virtuel",
          "Wishlist sociale",
          "Service conciergerie"
        ]
      }
    ]
  }
];