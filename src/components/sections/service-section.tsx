// src/components/sections/services-section.tsx
'use client'

import { IconArrow } from "../ui/icons";
import Typography from "../ui/typography";

const services = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Marketing' }
];

const categories = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Marketing' }
];

function ServiceItem({ name }: { name: string }) {
  return (
    <div className="border-gray/10 hover:text-gray transition-all duration-1000 flex group items-center justify-between first:border-t border-b py-8 max-md:px-4 max-md:py-4 px-10">
      <span className="transition-all duration-1000 text-5xl max-md:text-4xl max-xs:text-3xl group-hover:text-gray text-gray/60">{name}</span>
      
      {/* Vidéo au survol */}
      <div className="absolute max-md:hidden opacity-0 transition-all duration-500 group-hover:opacity-100 right-80">
        <video
          className="w-56 z-[2] relative rounded-t-[60px] h-56 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/hero-home.mp4" type="video/mp4" />
        </video>
        <div className="w-56 rounded-t-[60px] absolute top-3 ml-3 z-[1] h-56 gradient-bg" />
      </div>
      
      {/* Icône */}
      <div className='group-hover:bg-primary max-sm:p-3 max-xs:p-2.5 p-4'>         
        <IconArrow variant='gray' className="w-12 max-sm:w-8 max-sm:h-8 max-xs:w-6 max-xs:h-6 h-12"/>      
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="">
      {/* En-tête */}
      <div className="flex max-lg:flex-col max-md:gap-6 gap-8 w-full justify-between ">
        <div>
          <Typography variant="title" className="text-gray mb-2 max-md:mb-4">
            NOS SERVICES<b className="text-primary">.</b>
          </Typography>
          <span className="text-gray/50 font-[500] leading-9 text-xl">
            Retrouvez nos projets web, nos créations graphiques et bien plus..
          </span>
        </div>
        
        {/* Catégories */}
        <div className="w-1/3 max-lg:w-full">
          <div className="flex flex-wrap gap-4 items-center">
            {categories.map(category => (
              <button
                key={category.id}
                className="px-4 py-1.5 border max-md:text-sm font-[600] hover:bg-gray hover:text-secondary
                          border-gray/50 text-gray/50 transition-all duration-500 rounded-full"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des services */}
      <div className="flex font-[600] flex-col w-full mt-14 ">
        {services.map(service => (
          <ServiceItem 
            key={service.id}
            name={service.name}
          />
        ))}
      </div>
    </div>
  );
}