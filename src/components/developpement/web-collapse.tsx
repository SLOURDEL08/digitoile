'use client'

import { useState } from 'react';
import { Clock, Check, Timer, Shield, Puzzle, CircleDot, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconArrow } from '../ui/icons';
import { webServices } from '../developpement/data';

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

  return (
    <div className="w-full mx-auto">
      {webServices.map((service) => {
        const Icon = service.icon;
        const isOpen = openItem === service.id;
        
        return (
          <div 
            key={service.id}
            className={cn(
              "overflow-hidden shadow-sm border-b first:border-t border-gray/30",
              "transition-all duration-300",
              isOpen && "shadow-lg"
            )}
          >
            {/* Header */}
            <button
              onClick={() => setOpenItem(isOpen ? null : service.id)}
              className={cn(
                "w-full group p-8 px-10 flex items-center justify-between",
                "transition-all duration-200",
                isOpen ? "bg-gray/20" : "hover:bg-gray/10"
              )}
            >
              <div className="flex items-center gap-8">
                <Icon size={60} className={cn('text-white group-hover:text-primary', isOpen ? 'text-primary' : '')}/>
                <div className="text-left flex items-center gap-10">
                  <h3 className={cn('text-5xl text-gray group-hover:text-primary font-semibold', isOpen ? 'text-primary' : '')}>{service.title}</h3>
                  <p className="text-sm font-medium rounded-full bg-gray/20 text-gray p-2 px-4">{service.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:flex text-gray items-center text-lg">
                  <Clock size={24} className="mr-4" />
                  {service.delay}
                </div>
                <IconArrow className={cn(
                  'brightness-[9999] transition w-20 h-20',
                  isOpen ? 'rotate-180 brightness-[1]' : 'group-hover:brightness-[1]'
                )}/>
              </div>
            </button>

            {/* Content amélioré */}
            <div className={cn(
              "grid transition-all duration-300",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
              <div className="overflow-hidden">
                <div className="p-10 bg-gray/10">
                  {/* Description */}
                  <div className="text-4xl text-gray/80 mb-12">
                    {service.description}
                  </div>

                  <div className="grid gap-8">
                    {/* Première rangée */}
                    <div className="flex justify-between">
                      {/* Avantages clés */}
                      <div className="text-xl font-light text-gray">
                        <span>Une présence web professionnelle pour présenter votre activité</span>
                      </div>

                      {/* Informations */}
                      <FeatureCard title="Informations" icon={CircleDot}>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-gray">
                            <Timer size={18} className="text-primary" />
                            <div>
                              <p className="font-medium">Délai de réalisation</p>
                              <p className="text-gray/80">{service.delay}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-gray">
                            <Shield size={18} className="text-primary" />
                            <div>
                              <p className="font-medium">Garantie</p>
                              <p className="text-gray/80">Satisfaction 30 jours</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-gray">
                            <Lock size={18} className="text-primary" />
                            <div>
                              <p className="font-medium">Sécurité</p>
                              <p className="text-gray/80">SSL inclus</p>
                            </div>
                          </div>
                        </div>
                      </FeatureCard>
                    </div>

                    {/* Deuxième rangée */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Fonctionnalités */}
                      <FeatureCard title="Fonctionnalités incluses" icon={Check}>
                        <ul className="grid grid-cols-2 gap-4">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray">
                              <div className="w-1.5 h-1.5 rounded-full mt-2.5 bg-primary" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </FeatureCard>

                      {/* Plugins inclus */}
                      <FeatureCard title="Plugins inclus" icon={Puzzle}>
                        <div className="grid gap-4">
                          {service.plugins.map((plugin, index) => {
                            const PluginIcon = plugin.icon;
                            return (
                              <div key={index} 
                                className="flex items-start gap-4 p-4 rounded-xl bg-gray/5 border border-gray/10">
                                <div className="bg-primary/10 rounded-lg p-2">
                                  <PluginIcon size={24} className="text-primary" />
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray mb-1">{plugin.name}</h5>
                                  <p className="text-sm text-gray/80">{plugin.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </FeatureCard>
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