'use client'

import LayoutContent from "@/components/layout/content";
import ProjectGrid from "@/components/projects/project-grid";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero/hero";
import Image from "next/image";

const categories = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Booking' },
];

export default function Projets() {


  return (
      <>
          <LayoutContent>
            
              <ProjectGrid/>
          </LayoutContent>
      </>
  );
}