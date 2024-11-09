// src/components/sections/services-section.tsx
'use client'

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
    <div className="border-gray/30 hover:text-gray transition-all duration-1000 flex group items-center justify-between first:border-t border-b py-8 px-10">
      <span className="group-hover:font-semibold">{name}</span>
      
      {/* Vidéo au survol */}
      <div className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100 right-80">
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
      <a href="#" className="relative h-[80px] transition-all duration-500 p-2 group-hover:bg-primary aspect-square">
        <svg className="w-full h-full brightness-[600] group-hover:opacity-100 group-hover:brightness-0 opacity-20" 
             viewBox="0 0 700 700">
          	<defs>
		<image  width="587" height="587" id="img1" href="data:image/png;base64,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"/>
	</defs>
	<style>
	</style>
	<use id="Background" href="#img1" x="57" y="57"/>
        </svg>
      </a>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="">
      {/* En-tête */}
      <div className="flex max-lg:flex-col gap-8 w-full justify-between">
        <div>
          <h1 className="text-7xl mb-2 font-bold text-gray uppercase">
            NOS SERVICES<b className="text-primary">.</b>
          </h1>
          <span className="text-gray/50 leading-9 text-xl">
            Retrouvez nos projets web, nos créations graphiques et bien plus..
          </span>
        </div>
        
        {/* Catégories */}
        <div className="w-1/3">
          <div className="flex gap-4 items-center">
            {categories.map(category => (
              <button
                key={category.id}
                className="px-4 py-1.5 border font-[500] hover:bg-gray hover:text-secondary
                          border-gray/50 text-gray/50 transition-all duration-500 rounded-full"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des services */}
      <div className="flex text-gray/30 text-5xl font-[500] flex-col w-full mt-14">
        {services.map((service, index) => (
          <ServiceItem 
            key={service.id} 
            name={service.name}
          />
        ))}
      </div>
    </div>
  );
}