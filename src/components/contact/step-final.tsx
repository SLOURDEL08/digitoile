'use client'

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const StepFinal = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
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
      </motion.div>
    </div>
  );
};

export default StepFinal;