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
      objective: "Une vitrine web complète et élégante conçue pour valoriser votre expertise de couvreur. Ce thème met l'accent sur un référencement optimal avec une structure SEO performante, permettant une visibilité accrue sur les moteurs de recherche. L'interface propose un design épuré avec des sections stratégiquement organisées pour guider vos visiteurs vers vos services clés.",
      features: [
        "Newsletter",
        "Blog professionnel",
        "Structure SEO optimisée",
        "Pages services détaillées",
        "Intégration réseaux sociaux",
        "Responsive"
      ]
    },
    {
      id: "enterprise",
      image: "/images/projects/themes/couvreur2.png",
      objective: "Un thème dynamique orienté conversion, mettant en avant vos réalisations à travers des galeries photos interactives. L'accent est mis sur l'engagement client avec des points de contact stratégiquement placés et une mise en valeur de vos partenariats professionnels. Le design compact et efficace facilite la navigation et encourage l'interaction immédiate.",
      features: [
        "Section témoignages clients",
        "Boutons d'appel à l'action",
        "Espace partenaires dédié",
        "Formulaire devis rapide",
        "Carte interventions interactive",
        "Chat en direct",
      ]
    },
    {
      id: "expertise",
      image: "/images/projects/themes/couvreur3.png",
      objective: "Une solution web complète alliant présentation professionnelle et outils de conversion. Ce thème hybride propose une expérience utilisateur enrichie avec des fonctionnalités avancées comme un configurateur de projet et un espace client personnalisé, tout en conservant une présentation claire de vos services et réalisations.",
      features: [
        "Portfolio interactif",
        "Blog multimédia",
        "Système de réservation",
        "Analytics avancés",
        "Module FAQ dynamique",
        "Intégration CRM"
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
     objective: "Un thème contemporain au design flat et épuré, idéal pour les restaurants de burgers et fast-food premium. L'interface dynamique combine animations fluides et illustrations modernes qui facilitent la navigation. Les micro-animations sur les boutons et le système de panier intuitif optimisent l'expérience de commande, tandis que la mise en page aérée met en valeur vos produits avec impact.",
     features: [
       "Système de commande ",
       "Animations produits", 
       "Menu digital",
       "Paiement sécurisée",
       "Services de livraison",
       "Programme de fidélité",
     ]
   },
   {
     id: "seafood",
     image: "/images/projects/themes/resto2.png", 
     objective: "Une expérience web haut de gamme mariant élégance et modernité. Le design luxueux s'appuie sur une typographie raffinée et une palette sophistiquée évoquant l'univers marin. Des sliders panoramiques présentent vos espaces et créations avec fluidité, tandis que l'interface épurée et la navigation intuitive créent un parcours client premium.",
     features: [
       "Réservation table ",
       "Menu dégustation ", 
       "Carte des vins ",
       "Virtual tour du restaurant",
       "Blog culinaire ",
       "Espace événements "
     ]
   },
   {
     id: "gastronomic",
     image: "/images/projects/themes/resto1.png",
     objective: "Un thème minimaliste et efficace pour restaurant gastronomique, concentré sur l'essentiel. L'interface simplifiée met en avant vos plats signatures et le système de réservation. La mise en page aérée et la navigation fluide guident naturellement les visiteurs vers les fonctionnalités clés tout en préservant une esthétique haut de gamme.",
     features: [
       "Système de réservation",
       "Menu digital",
       "Galerie plats signature",
       "Interface commande",
       "Gestion tables", 
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