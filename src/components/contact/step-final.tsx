'use client'

import { motion } from 'framer-motion';
import { CheckCircle, Instagram, Twitter, Linkedin, LucideIcon } from 'lucide-react';

const SocialLink = ({ 
  icon: Icon, 
  href, 
  label 
}: { 
  icon: LucideIcon;
  href: string;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 text-[#D5D5D5] hover:text-[#CEF440] transition-colors"
  >
    <Icon className="w-5 h-5" />
    {label}
  </motion.a>
);

const StepFinal = () => {
  return (
     <div className="w-full h-full min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center"> {/* Mise à jour */}
     <motion.div 
       className="text-center space-y-8"
       initial="hidden"
       animate="visible"
       variants={{
         hidden: { opacity: 0, y: 50 },
         visible: { opacity: 1, y: 0 }
       }}
     >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
        >
          <CheckCircle className="w-24 h-24 text-[#CEF440] mx-auto" />
        </motion.div>

        <div className="space-y-4">
          <motion.h3 
            className="text-6xl max-xl:text-5xl max-xs:text-4xl uppercase leading-[1.1] text-gray font-bold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4 }
              }
            }}
          >
            Message envoyé<b className="text-[#CEF440]">.</b>
          </motion.h3>

          <motion.p 
            className="text-[#D5D5D5]/70 font-[500] text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.6 }
              }
            }}
          >
            Nous reviendrons vers vous dans les plus brefs délais.
          </motion.p>
        </div>

        {/* Section réseaux sociaux */}
        <motion.div
          className="-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8 }
            }
          }}
        >

          <div className="flex justify-center gap-8 text-lg font-medium">
            <SocialLink 
              icon={Instagram} 
              href="https://instagram.com/digitoile" 
              label="Instagram"
            />
            <SocialLink 
              icon={Twitter} 
              href="https://twitter.com/digitoile" 
              label="Twitter"
            />
            <SocialLink 
              icon={Linkedin} 
              href="https://linkedin.com/company/digitoile" 
              label="LinkedIn"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StepFinal;