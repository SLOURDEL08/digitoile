'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Check, Timer, Shield, Puzzle, CircleDot, Lock, Palette, Paintbrush, FileEdit, Smartphone, HeadphonesIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconArrow } from '../ui/icons';
import { webServices } from '../developpement/data';
import { Button } from '../ui/button';

function FeatureCard({ title, children, icon: Icon }: { title?: string; children: React.ReactNode; icon: React.ElementType }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray/10">
      <h4 className="text-xl font-medium text-gray flex items-center gap-2 mb-6">
        <Icon size={20} className="text-primary" />
        {title}
      </h4>
      {children}
    </div>
  );
}

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
                isOpen ? "bg-gray/10" : "hover:bg-gray/5"
              )}
            >
              <div className="flex max-sm:gap-6 max-xs:gap-4 items-center gap-8">
                <Icon size={50} className={cn('text-gray/60 max-xs:w-8 max-md:w-10 max-md:h-10 max-xs:h-8 group-hover:text-primary', isOpen ? 'text-primary' : '')}/>
                <div className="text-left flex items-center gap-10">
                  <h3 className={cn('text-5xl max-md:text-4xl max-xs:text-3xl text-gray/60 group-hover:text-primary font-[500]', isOpen ? 'text-primary' : '')}>
                    {formatTitle(service.title)}
                  </h3>
                  <p className="text-sm max-lg:hidden font-medium rounded-full bg-gray/20 group-hover:text-secondary group-hover:bg-gray text-gray p-1.5 px-4">{service.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-20">
                <div className="flex text-gray max-xl:hidden items-center text-base">
                  <Clock size={20} className="mr-4" />
                  {service.delay}
                </div>
                <div className='group-hover:bg-primary max-sm:p-3 max-xs:p-2.5 p-4'>
                   <IconArrow variant='gray' className={cn(
                    'w-12 max-md:w-8 max-md:h-8 max-xs:w-6 max-xs:h-6 h-12',
                    isOpen ? ' ' : ''
                  )}/>
                </div>
              </div>
            </button>

            <div className={cn(
              "grid transition-all duration-300",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
              <div className="overflow-hidden">
                <div className="p-10 bg-gray/5">
                  <div className='flex justify-between mb-10 gap-20'>
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-gray">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray/60 text-lg max-w-2xl">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-2xl font-bold text-primary">
                        {service.price}
                      </div>
                      <div className="text-gray/60">
                        {service.delay}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div className="flex gap-4">
                      {[
                        {
                          title: "Sécurité SSL",
                          value: "Inclus",
                          icon: Lock,
                          color: {
                            from: "blue-500",
                            to: "cyan-500"
                          }
                        },
                        {
                          title: "Assistance",
                          value: "30 jours",
                          icon: HeadphonesIcon,
                          color: {
                            from: "purple-500",
                            to: "pink-500"
                          }
                        },
                        {
                          title: "Délai",
                          value: service.delay,
                          icon: Clock,
                          color: {
                            from: "emerald-500",
                            to: "green-500"
                          }
                        },
                        {
                          title: "Maquettes",
                          value: "Illimitées",
                          icon: Paintbrush,
                          color: {
                            from: "orange-500",
                            to: "amber-500"
                          }
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`
                            relative py-3 w-max px-4 rounded-2xl overflow-hidden group cursor-pointer flex-1
                            bg-gradient-to-br from-${item.color.from}/20 to-${item.color.to}/20 
                            hover:from-${item.color.from}/30 hover:to-${item.color.to}/30
                            border border-white/5
                            transform hover:-translate-y-1 transition-all duration-300
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`
                              p-2 rounded-lg bg-${item.color.from}/30
                            `}>
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-gray/60">{item.title}</p>
                              <h4 className="text-lg font-semibold text-gray">{item.value}</h4>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-white/5 rounded-2xl p-6 border border-gray/10">
                        <h4 className="text-xl font-semibold text-gray mb-6 flex items-center gap-2">
                          <Check className="text-primary" />
                          Fonctionnalités incluses
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-center gap-3 group"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                              <span className="text-gray/60 group-hover:text-gray/80 transition-colors">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-2xl p-6 border border-gray/10">
                        <h4 className="text-xl font-semibold text-gray mb-6 flex items-center gap-2">
                          <Puzzle className="text-primary" />
                          Extensions Premium
                        </h4>
                        <div className="grid gap-4">
                          {service.plugins.map((plugin, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray/5 to-transparent border border-gray/10 group hover:border-primary/20 transition-all"
                            >
                              <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors">
                                <plugin.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h5 className="font-medium text-gray mb-1">{plugin.name}</h5>
                                <p className="text-sm text-gray/60">{plugin.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>


                    <div className="flex justify-between items-center pt-6">
                      <div className="text-gray/60">
                        * Toutes nos prestations incluent un accompagnement personnalisé
                      </div>
                      <Button 
                        variant="outline" 
                        className="group hover:bg-primary hover:text-secondary transition-all border-gray text-gray"
                      >
                        Demander un devis
                        <IconArrow className='text-inherit' />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}