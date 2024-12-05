'use client'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Send, Loader2, RotateCcw } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  onReset: () => void;
  disabled?: boolean;
}

export default function Navigation({ 
  currentStep, 
  onNext, 
  onPrev,
  onSubmit,
  onReset,
  disabled
}: NavigationProps) {
  const TOTAL_VISIBLE_STEPS = 3;
  const isLastStepBeforeSubmit = currentStep === 3;
  const isFinalStep = currentStep === 4;

  return (
    <motion.div 
      className="mt-10 -mb-20 max-md:-mb-10 bg-[#151516]/80 backdrop-blur-sm border-t border-[#D5D5D5]/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-full px-8 py-6 max-md:px-0">
        <div className="flex items-center justify-between gap-8">
          {/* Indicateur d'étapes - Caché sur l'étape finale */}
          {!isFinalStep && (
            <div className="flex items-center space-x-2 max-sm:w-1/6">
              {Array.from({ length: TOTAL_VISIBLE_STEPS }, (_, i) => i + 1).map((step) => (
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
          )}

          {/* Boutons de navigation */}
          <div className={cn(
            "flex items-center justify-end gap-4",
            isFinalStep ? "w-full" : "w-5/6"
          )}>
            {/* Bouton Précédent - Caché sur la première étape et l'étape finale */}
            {!isFinalStep && currentStep > 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={onPrev}
                disabled={disabled}
                className={cn(
                  "flex items-center h-14 px-6 group",
                  "bg-[#151516] border border-[#D5D5D5]/10",
                  "hover:border-[#CEF440]/20 transition-all duration-200",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <ArrowLeft className="w-5 h-5 mr-3 text-[#D5D5D5] group-hover:text-[#CEF440] transition-colors" />
                <span className="text-[#D5D5D5] group-hover:text-[#CEF440] font-medium transition-colors">
                  Précédent
                </span>
              </motion.button>
            )}

            {/* Bouton Suivant/Envoyer/Nouveau message */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={isFinalStep ? onReset : isLastStepBeforeSubmit ? onSubmit : onNext}
              disabled={disabled}
              className={cn(
                "flex items-center h-14 px-6 group transition-all duration-200",
                disabled && "opacity-50 cursor-not-allowed",
                isLastStepBeforeSubmit
                  ? "bg-[#CEF440] hover:bg-[#CEF440]/90 text-[#151516]"
                  : "bg-[#151516] border border-[#D5D5D5]/10 hover:border-[#CEF440]/20"
              )}
            >
              <span className={cn(
                "font-medium transition-colors",
                isFinalStep
                  ? "text-[#D5D5D5] group-hover:text-[#CEF440]"
                  : isLastStepBeforeSubmit
                    ? "text-[#151516]"
                    : "text-[#D5D5D5] group-hover:text-[#CEF440]"
              )}>
                {isFinalStep
                  ? 'Nouveau message'
                  : isLastStepBeforeSubmit
                    ? (disabled ? 'Envoi en cours...' : 'Envoyer')
                    : 'Suivant'
                }
              </span>
              {isFinalStep ? (
                <RotateCcw className="w-5 h-5 ml-3 text-[#D5D5D5] group-hover:text-[#CEF440] transition-colors" />
              ) : isLastStepBeforeSubmit ? (
                disabled ? (
                  <Loader2 className="w-5 h-5 ml-3 text-[#151516] animate-spin" />
                ) : (
                  <Send className="w-5 h-5 ml-3 text-[#151516]" />
                )
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