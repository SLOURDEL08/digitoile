import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IconArrow } from "../ui/icons";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  clientName: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DIGITALIZERR",
    category: "Design UI/UX",
    description: "Une expérience unique de navigation et d'achat pour une marque de luxe parisienne.",
    images: [
      "/images/design/digitali.png",
      "/images/design/digitali2.png",
    ],
    clientName: "E-commerce • Luxe"
  },
  {
    id: 2,
    title: "Rocket School",
    category: "Landing Page",
    description: "Interface mobile intuitive pour la gestion de patrimoine nouvelle génération.",
    images: [
      "/images/design/rockett.png",
      "/images/design/rockett2.png",
    ],
    clientName: "Finance • Tech"
  },
  {
    id: 3,
    title: "DietIA - Webapp",
    category: "Plateforme Web",
    description: "Plateforme éducative innovante avec un dashboard analytique personnalisé.",
    images: [
      "/images/design/dietiad.png",
      "/images/design/dietia2.png",
    ],
    clientName: "Education • SaaS"
  }
];

const MobileImageNav = ({ currentImageIndex, totalImages }: { 
  currentImageIndex: number;
  totalImages: number;
}) => (
  <div className="hidden max-sm:flex absolute top-4 right-4 z-20 bg-gray/10 backdrop-blur-sm rounded-full px-3 py-1.5">
    <span className="text-sm font-medium text-gray">
      {currentImageIndex + 1} / {totalImages}
    </span>
  </div>
);

const ThumbnailGallery = ({ 
  images, 
  currentImageIndex, 
  onSelect 
}: { 
  images: string[];
  currentImageIndex: number;
  onSelect: (index: number) => void;
}) => (
  <div className="absolute top-12 right-12 max-lg:top-6 max-lg:right-6 max-md:right-4 max-md:top-4 max-sm:hidden z-20 flex flex-col gap-6">
    {images.map((image, index) => (
      <button
        key={image}
        onClick={() => onSelect(index)}
        className={`relative w-48 h-28 max-lg:w-36 max-lg:h-20 rounded-2xl overflow-hidden group 
          ${currentImageIndex === index 
            ? 'ring-2 ring-primary shadow-xl shadow-primary/20 z-10' 
            : 'hover:translate-x-2 hover:shadow-md'
          } transition-all duration-300`}
      >
        <Image
          src={image}
          alt={`Vue ${index + 1}`}
          fill
          className={`object-cover transition-transform duration-500 ${
            currentImageIndex === index 
              ? '' 
              : 'group-hover:scale-110'
          }`}
        />
        <div className={`absolute inset-0 transition-all duration-300 ${
          currentImageIndex === index
            ? 'bg-gradient-to-r from-primary/20 to-transparent'
            : 'bg-gray/40 group-hover:bg-gray/20'
        }`} />
        <div className="absolute bottom-3 left-3">
          <span className={`text-sm font-medium px-2 py-1 rounded-full backdrop-blur-sm ${
            currentImageIndex === index
              ? 'bg-primary/20 text-white'
              : 'bg-gray/20 text-gray/80'
          }`}>
            {index + 1}/{images.length}
          </span>
        </div>
        {currentImageIndex === index && (
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full" />
        )}
      </button>
    ))}
  </div>
);

export default function SliderProject() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [nextProjectIndex, setNextProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const currentProject = projects[currentProjectIndex];
  const nextProject = projects[nextProjectIndex];

  const changeProject = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setNextProjectIndex(newIndex);

    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  const handleNextProject = useCallback(() => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    changeProject(nextIndex);
  }, [currentProjectIndex, changeProject]);

  const handlePrevProject = useCallback(() => {
    const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    changeProject(prevIndex);
  }, [currentProjectIndex, changeProject]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setCurrentImageIndex((prev) => 
          (prev + 1) % currentProject.images.length
        );
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [currentProject, isTransitioning]);

  return (
    <section className="relative !rounded-3xl -mt-8 h-[600px] max-lg:h-[500px] max-md:h-[450px] max-sm:h-[400px] w-full overflow-hidden bg-gray/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1515162e_1px,transparent_1px),linear-gradient(to_bottom,#1515162e_1px,transparent_1px)] bg-[size:24px_24px] !z-20 pointer-events-none opacity-20" />
      
      <div className="relative w-full h-full">
        {/* Couche de l'image en cours */}
        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <Image
            src={currentProject.images[currentImageIndex]}
            alt={currentProject.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
        </div>

        {/* Couche de la prochaine image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}>
          <Image
            src={nextProject.images[currentImageIndex]}
            alt={nextProject.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
        </div>

        <MobileImageNav 
          currentImageIndex={currentImageIndex}
          totalImages={currentProject.images.length}
        />

        <ThumbnailGallery
          images={currentProject.images}
          currentImageIndex={currentImageIndex}
          onSelect={setCurrentImageIndex}
        />

        {/* Contenu avec transition plus lente */}
        <div className={`absolute bottom-0 left-0 right-0 p-12 max-lg:p-8 max-md:p-6 z-10 
          transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <div className="flex justify-between items-end max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <div className="space-y-4 max-w-2xl max-lg:space-y-6">
              <div className="space-y-4 max-lg:space-y-3">
                <div className="flex  items-center space-x-4">
                  <span className="px-4 py-1.5 max-lg:py-1 max-lg:px-3 anim-gray-bg backdrop-blur-sm max-md:text-xs rounded-full text-gray/60 text-sm font-medium 
                    transition-all duration-700 delay-100">
                    {currentProject.category}
                  </span>
                </div>
                <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl font-bold text-gray 
                  transition-all duration-700 delay-200">
                  {currentProject.title}
                </h2>
              </div>
              <p className="text-xl max-lg:text-lg max-md:text-base text-gray/80 font-medium leading-relaxed max-w-xl max-md:hidden 
                transition-all duration-700 delay-300">
                {currentProject.description}
              </p>
            </div>

            <div className="flex max-lg:justify-between max-md:gap-6 items-end gap-10 max-lg:w-full 
              transition-all duration-700 delay-400">
              <div className="flex items-end justify-end max-lg:gap-4 max-lg:justify-between gap-6">
                <span className="text-7xl max-lg:text-6xl max-lg:mb-1 -mb-2.5 !leading-none max-md:text-5xl max-sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
                  {String(currentProjectIndex + 1).padStart(2, '0')}
                </span>
                <div className="text-right max-lg:-space-y-1.5">
                  <span className="block text-gray/40 text-lg max-md:text-base">Projet</span>
                  <span className="block text-gray/60 font-medium">
                    sur {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end max-lg:justify-between gap-3">
                <button 
                  onClick={handlePrevProject}
                  disabled={isTransitioning}
                  className="p-4 max-md:p-3 hover:bg-primary group rounded-full bg-gray/10 backdrop-blur-sm transition-all duration-300 disabled:opacity-50 hover:scale-105"
                >
                  <IconArrow className="-scale-x-100 w-6 h-6 max-md:w-5 max-md:h-5 text-gray group-hover:text-secondary transition-colors duration-300" />
                </button>
                <button 
                  onClick={handleNextProject}
                  disabled={isTransitioning}
                  className="p-4 max-md:p-3 hover:bg-primary group rounded-full bg-gray/10 backdrop-blur-sm transition-all duration-300 disabled:opacity-50 hover:scale-105"
                >
                  <IconArrow className="w-6 h-6 max-md:w-5 max-md:h-5 text-gray group-hover:text-secondary transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
