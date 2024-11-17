'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typography from "../ui/typography";



export default function StepsProcess() {
      const [activeCard, setActiveCard] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

  // Réinitialise à la première carte si aucune carte n'est survolée
  useEffect(() => {
    if (!isHovering) {
      setActiveCard(0);
    }
  }, [isHovering]);


  return (
        <section className=" pb-14">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center uppercase mb-20"
        >

          <Typography variant="title" className="text-gray">
            Des Solutions simples <br />Sur Mesure<b className="text-primary">.</b>
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Analyse', 'Conception', 'Production'].map((phase, index) => (
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
              onMouseEnter={() => {
                setIsHovering(true);
                setActiveCard(index);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
            >
              {/* Fond avec gradient primaire qui diffuse */}
              <div 
                className={`absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-br from-[#CEF440]/20 via-[#CEF440]/10 to-transparent transition-all duration-500 blur-2xl ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
              
              {/* Card principale */}
              <div 
                className={`relative bg-transparent border p-8 h-full backdrop-blur-sm transition-all duration-500 
                  ${activeCard === index ? '!bg-gray/10 border-gray/60' : 'border-white/10'}
                  group-hover:bg-gray/10 group-hover:border-gray/60`}
              >
                {/* Numéro */}
                <div className="absolute top-6 right-6 flex items-start">
                  <span 
                    className={`text-7xl  font-bold transition-colors duration-500 
                      ${activeCard === index ? 'text-[#CEF440]/20' : 'text-[#CEF440]/10'}
                      group-hover:text-[#CEF440]/20`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Contenu */}
                <div className="relative z-10 mt-12">
                  <h3 
                    className={`text-2xl font-semibold mb-2 transition-colors duration-500 
                      ${activeCard === index ? 'text-[#CEF440]' : 'text-gray'}
                      group-hover:text-[#CEF440]`}
                  >
                    {phase}
                  </h3>
                  <p className="text-gray/70 font-[500] w-[85%] text-base leading-relaxed">
                    Notre approche méthodique garantit des résultats exceptionnels à chaque étape du projet.
                  </p>
                </div>

                {/* Décoration bas de card */}
                <div 
                  className={`absolute -bottom-6 right-0 w-32 h-32 pointer-events-none transition-all duration-500 
                    ${activeCard === index ? 'opacity-100' : 'opacity-0'}
                    group-hover:opacity-100`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CEF440]/20 via-[#CEF440]/5 to-transparent transform rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}