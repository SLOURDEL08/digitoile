// src/data.ts

import { Project, Category } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Rocket School",
        image: "/images/projects/card/rocketschool.webp",
        categoryId: 3,
  },
  {
    id: 2,
    title: "Les Vanniers",
      image: "/images/projects/card/lesvanniers.webp",
        categoryId: 1,
    },
  {
    id: 3,
    title: "Couvrassistance",
      image: "/images/projects/card/couvrassistance.webp",
        categoryId: 1,
  },
  {
    id: 4,
    title: "Sirius Sécurité",
      image: "/images/projects/card/siriussecurite.webp",
        categoryId: 1,
  },
  {
    id: 5,
    title: "Toast Collectif",
    image: "/images/projects/card/toastcollectif.webp",
    categoryId: 1,
  },
  {
    id: 6,
    title: "Couvretanche",
    image: "/images/projects/card/couvretanche.webp",
        categoryId: 1,
  },
  {
    id: 7,
    title: "Patrimoine",
      image: "/images/projects/card/patrimoine.webp",
        categoryId: 1,
    },
   {
    id: 8,
    title: "Paul Savine",
       image: "/images/projects/card/paulsavine.webp",
        categoryId: 1,
  },
];

export const categories: Category[] = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Booking' },
];
