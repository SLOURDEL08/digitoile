'use client'

import { useState } from 'react';
import { 
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconArrow } from '../ui/icons';
import { webServices } from '../developpement/data';
import { Button } from '../ui/button';

export default function WebCollapse() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const formatTitle = (title: string) => {
    return (
      <>
        <span className="hidden md:inline">{title}</span>
        <span className="md:hidden">{title.split(' ').pop()}</span>
      </>
    );
  };

  return (
    <div className="w-full mx-auto">
      {webServices.map((service) => {
        const Icon = service.icon;
        const isOpen = openItem === service.id;
        
        return (
          <div 
            key={service.id}
            className={cn(
              "overflow-hidden shadow-sm border-b first:border-t border-gray/10",
              "transition-all duration-300",
              isOpen && "shadow-lg"
            )}
          >
            <button
              onClick={() => setOpenItem(isOpen ? null : service.id)}
              className={cn(
                "w-full group p-8 px-8 max-md:py-6 max-sm:py-4 max-sm:px-4 flex items-center justify-between",
                "transition-all duration-500",
                isOpen ? "center-gradient-collapse border-b border-gray/10" : "center-gradient"
              )}
            >
              <div className="flex max-sm:gap-6 max-xs:gap-4 items-center gap-8">
                <Icon size={50} className={cn('text-gray/60 max-xs:w-8 max-md:w-10 max-md:h-10 max-xs:h-8 group-hover:text-primary', isOpen ? 'text-primary' : '')}/>
                <div className="text-left flex items-center gap-10">
                  <h3 className={cn('text-5xl font-[600] max-md:text-4xl max-xs:text-3xl text-gray/60 group-hover:text-primary', isOpen ? 'text-primary' : '')}>
                    {formatTitle(service.title)}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-20">
                <div className={cn('group-hover:bg-primary max-sm:p-3 max-xs:p-2.5 p-4', isOpen ? 'bg-primary' : 'de')}>
                   <IconArrow variant='gray' className={cn(
                    'w-12 max-md:w-8 max-md:h-8 max-xs:w-6 max-xs:h-6 h-12',
                    isOpen ? 'brightness-0 opacity-100 -scale-y-[1]' : ''
                  )}/>
                </div>
              </div>
            </button>

            <div className={cn(
              "grid transition-all duration-300",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
              <div className="overflow-hidden">
                <div className="p-8 bg-gray-900/50 backdrop-blur-xl relative">
                  {/* Description et Prix */}
                  <div className="flex justify-between items-start max-lg:flex-col gap-8 mb-8">
                    <div className="space-y-8 flex-1 max-w-3xl">
                      <p className="text-gray/80 text-xl max-md:text-lg font-[500] leading-8">{service.description}</p>
                      
                      {/* Benefits */}
                      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                        {service.benefits.map((benefit, index) => {
                          const BenefitIcon = benefit.icon;
                          return (
                            <div 
                              key={index} 
                              className="border max-sm:text-left max-xs:flex-col max-sm:flex-row max-md:justify-start text-center text-base leading-5 border-gray/10 p-6 py-6 text-gray/80 font-[500] flex flex-col justify-center max-sm:items-center max-xs:items-start items-center gap-3"
                            >
                              <BenefitIcon className="min-w-8 min-h-8 text-gray" />
                              {benefit.text}
                            </div>
                          );
                        })}
                      </div>

                      {/* Plugins - Updated Section */}
                  <div className='space-y-2'>
  <h4 className="text-gray/60 font-medium uppercase text-sm tracking-wider">Extensions premium</h4>
  <div className="flex flex-wrap gap-2">
    {/* Plugins inclus */}
    {service.plugins.map((plugin, index) => {
      const PluginIcon = plugin.icon;
      return (
        <div 
          key={index} 
          className="bg-gray/5 max-w-xs max-sm:w-full max-sm:max-w-full w-max hover:bg-gray/10 pointer-events-auto p-4 flex items-center gap-4"
        >
          <div className={cn(
            "p-2",
            plugin.included ? "bg-primary/10" : "bg-gray/10"
          )}>
            <PluginIcon className={cn(
              "w-5 h-5",
              plugin.included ? "text-primary" : "text-gray"
            )} />
          </div>
          <div>
            <p className="text-gray/80 font-semibold">{plugin.name}</p>
            <p className="text-sm font-[500] text-gray/60">{plugin.description}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>
                    </div>

                    <div className="space-y-6 max-lg:w-full max-lg:min-w-full max-lg:max-w-0 min-w-[380px] max-w-[400px]">
                      {/* Prix et Délai Améliorés */}
                      <div className='anim-gray-bg max-lg:w-max max-md:w-full  rounded-xl relative overflow-hidden'>
                        <div className="flex max-xs:flex-col max-sm:gap-6 max-lg:gap-10 gap-6 p-8">
                          {/* Prix */}
                          <div className="space-y-1">
                            <p className="text-sm text-gray/50 font-medium uppercase tracking-wider">À partir de</p>
                            <div className="flex items-baseline gap-2">
                              <p className="text-4xl leading-7 max-md:text-4xl font-extrabold bg-gradient-to-r from-gray to-gray/80 bg-clip-text text-transparent">
                                {service.price}
                              </p>
                              <span className="text-gray/60 font-medium">TTC</span>
                            </div>
                          </div>

                          {/* Délai */}
                          <div className="space-y-1">
                            <p className="text-sm uppercase text-gray/50 font-medium tracking-wider">Délai estimé</p>
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-lg bg-secondary/10">
                                <Clock className="w-6 h-6 max-md:w-5 max-md:h-5 text-gray" />
                              </div>
                              <p className="text-xl max-md:text-base max-md:leading-4 leading-5 font-bold text-gray">{service.delay}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Effet de fond */}
                        <div className="absolute -z-10 top-0 left-0 w-full h-full">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary/20 blur-3xl rounded-full" />
                        </div>
                      </div>

                      {/* Features */}
                      <div className='space-y-2'>
                        <h4 className="text-gray/60 font-medium uppercase text-sm tracking-wider">Fonctionnalités incluses</h4>
                        <div className='text-lg space-y-1'>
                          {service.features.map((feature, index) => (
                            <div key={index} className='flex gap-4 group/feature items-center text-gray/60 border-y hover:bg-gray/10 bg-gray/5 border-gray/5 py-2 px-4'>
                              <IconArrow className="group-hover/feature:opacity-100 group-hover/feature:text-primary min-w-4 min-h-3 text-gray opacity-60" /> 
                              <span className="text-base font-[600] group-hover/feature:text-gray">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies avec icônes */}
                      <div className="space-y-4">
                        <h4 className="text-gray/60 font-medium uppercase text-sm tracking-wider">Technologies utilisées</h4>
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech, index) => {
                            const TechIcon = tech.icon;
                            return (
                              <div
                                key={index}
                                className="flex items-center gap-3 bg-gray/5 p-3 group hover:bg-gray/10 transition-all duration-300"
                              >
                                <div className="">
                                  <TechIcon 
                                    className="w-7 h-7" 
                                    style={{ color: tech.iconColor }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-12 pt-8 border-t border-gray/10 flex items-center justify-between">
                    <div className="text-gray/60 max-md:hidden font-[500]">
                      * Notre équipe vous accompagne tout au long du projet
                    </div>
                    <div className="flex items-center gap-4">
                      <Button 
                        className="bg-transparent border-gray/20 border text-gray/60 hover:bg-primary/90 font-[600]"
                      >
                        découvrir nos thèmes
                      </Button>
                      <Button 
                        className="bg-primary text-secondary hover:bg-primary/90 font-[600]"
                      >
                        réaliser un devis
                        <IconArrow className='text-secondary'/>
                      </Button>
                    </div>
                  </div>

                  {/* Background effect */}
                  <div className="absolute z-[1] pointer-events-none -top-20 -left-96 w-[1200px] h-[1200px] rounded-full bg-primary opacity-[0.02] blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}