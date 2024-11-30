'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Typography from "../ui/typography";
import { IconArrow } from "../ui/icons";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  steps: string[];
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Stratégie",
    description: "Analyse de vos besoins et élaboration d'une stratégie sur-mesure.",
    icon: "🎯",
    color: "from-violet-400/20 to-fuchsia-400/20",
    duration: "1-2 semaines",
    steps: [
      "Analyse des besoins",
      "Étude de marché",
      "Définition stratégique",
      "Planning & KPIs"
    ]
  },
  {
    id: 2,
    title: "Design",
    description: "Conception UX/UI et prototypage de votre solution digitale.",
    icon: "🎨",
    color: "from-emerald-400/20 to-teal-400/20",
    duration: "2-3 semaines",
    steps: [
      "UX Research",
      "Design System",
      "Interface UI",
      "Prototypage"
    ]
  },
  {
    id: 3,
    title: "Code",
    description: "Développement et optimisation des performances.",
    icon: "⚡️",
    color: "from-orange-400/20 to-amber-400/20",
    duration: "3-4 semaines",
    steps: [
      "Architecture",
      "Développement",
      "Tests & Debug",
      "Déploiement"
    ]
  }
];

export default function StepsProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="&@">
      <div className="mb-10">
        <Typography variant="title" className="text-gray">
          Notre processus<b className="text-primary">.</b>
        </Typography>
      </div>

      <div className="flex flex-col">
        {/* Navigation des étapes */}
        <div className="col-span-4 flex sticky top-8">
          {steps.map((step) => (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left p-5 px-6  border transition-all duration-300 relative overflow-hidden group ${
                activeStep === step.id 
                  ? 'border-primary bg-primary ' 
                  : 'border-gray/10 hover:border-gray/20 hover:bg-gray/20'
              }`}
            >


              <div className="relative flex items-center gap-3 z-10">
                <span className="text-3xl block">{step.icon}</span>
                <h3 className={`text-2xl font-semibold ${
                  activeStep === step.id ? 'text-secondary' : 'text-gray/60'
                }`}>
                  {step.title}
                </h3>

              </div>

              <IconArrow className={`absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-transform duration-300 ${
                activeStep === step.id ? 'translate-x-0 text-secondary' : '-translate-x-2 text-gray/40'
              }`} />
            </motion.button>
          ))}
        </div>

        {/* Contenu détaillé */}
        <div className="col-span-8">
          <AnimatePresence mode="wait">
            {steps.map((step) => step.id === activeStep && (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="p-8 border border-t-0 bg-gradient-to-r from-gray/10 to-transparent relative border-gray/10 space-y-6">
<div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle, #CEF440, transparent)] opacity-30 pointer-events-none"/>
                  <div className="space-y-3 !-mt-2">
                    <p className="text-xl font-[500] text-gray/70">{step.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {step.steps.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center rounded-lg gap-4 p-4 bg-gray/5 group hover:bg-gray/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">{index + 1}</span>
                        </div>
                        <span className="text-gray group-hover:text-primary transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}