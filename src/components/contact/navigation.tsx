'use client'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  className?: string;
}

export default function Navigation({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrev,
  onSubmit 
}: NavigationProps) {
  return (
    <motion.div 
      className="mt-10 -mb-20 max-md:-mb-10 bg-[#151516]/80 backdrop-blur-sm border-t border-[#D5D5D5]/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-full px-8 py-6 max-md:px-0">
        <div className="flex items-center justify-between gap-8">
          {/* Indicateur d'étapes */}
          <div className="flex items-center space-x-2 max-sm:w-1/6">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <motion.div
                key={step}
                initial={false}
                animate={{
                  backgroundColor: currentStep >= step ? '#CEF440' : '#D5D5D5',
                  opacity: currentStep >= step ? 1 : 0.2,
                }}
                className="w-12 h-1 rounded-full"
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>

          {/* Boutons de navigation */}
          <div className="flex items-center justify-end gap-4 w-5/6">
            {/* Bouton Précédent */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: currentStep === 1 ? 0 : 1,
                x: currentStep === 1 ? 20 : 0,
              }}
              className={cn(
                "flex items-center h-14 px-6 group",
                "bg-[#151516] border border-[#D5D5D5]/10",
                "hover:border-[#CEF440]/20 transition-all duration-200",
                currentStep === 1 && "pointer-events-none"
              )}
              onClick={onPrev}
            >
              <ArrowLeft className="w-5 h-5 mr-3 text-[#D5D5D5] group-hover:text-[#CEF440] transition-colors" />
              <span className="text-[#D5D5D5] group-hover:text-[#CEF440] font-medium transition-colors">
                Précédent
              </span>
            </motion.button>

            {/* Bouton Suivant/Envoyer */}
            <motion.button
              onClick={currentStep === totalSteps ? onSubmit : onNext}
              className={cn(
                "flex items-center h-14 px-6 group transition-all duration-200",
                currentStep === totalSteps
                  ? "bg-[#CEF440] hover:bg-[#CEF440]/90 text-[#151516]"
                  : "bg-[#151516] border border-[#D5D5D5]/10 hover:border-[#CEF440]/20"
              )}
            >
              <span className={cn(
                "font-medium transition-colors",
                currentStep === totalSteps
                  ? "text-[#151516]"
                  : "text-[#D5D5D5] group-hover:text-[#CEF440]"
              )}>
                {currentStep === totalSteps ? 'Envoyer' : 'Suivant'}
              </span>
              {currentStep === totalSteps ? (
                <Send className="w-5 h-5 ml-3 text-[#151516]" />
              ) : (
                <ArrowRight className="w-5 h-5 ml-3 text-[#D5D5D5] group-hover:text-[#CEF440] transition-colors" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}