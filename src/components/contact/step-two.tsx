'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { FormData, ProjectInfo } from './types';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface StepTwoProps {
  formData: FormData;
  handleProjectInfoChange: (field: keyof ProjectInfo, value: boolean | string) => void;
}

interface ProjectQuestionProps {
  label: string;
  field: keyof ProjectInfo;
  value: boolean | null;
  onChange: (field: keyof ProjectInfo, value: boolean) => void;
  urlField?: boolean;
  urlValue?: string | null;
  onUrlChange?: (value: string) => void;
}

const ProjectQuestion = ({
  label,
  field,
  value,
  onChange,
  urlField,
  urlValue,
  onUrlChange
}: ProjectQuestionProps) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col gap-2"
  >
    <h4 className="text-[#CEF440] text-xl font-semibold">
      {label}
    </h4>
    
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {/* Button Oui */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full"
        >
          <button
            onClick={() => onChange(field, true)}
            className={cn(
              "flex items-center w-full h-14 cursor-pointer transition-all duration-200",
              "bg-gray/5 border-l-2",
              "group relative overflow-hidden",
              value === true ? "border-l-[#CEF440] bg-primary/10" : "border-transparent hover:border-l-[#D5D5D5]/50"
            )}
          >
            <div className={cn(
              "absolute inset-0 transition-all duration-200 -z-10",
              value === true 
                ? "bg-primary bg-opacity-10"  // Corrigé ici
                : "bg-[#151516] group-hover:bg-[#D5D5D5]/5"
            )} />
            
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded transition-all duration-200",
                  value === true 
                    ? "text-[#CEF440]" 
                    : "text-[#D5D5D5] group-hover:text-[#D5D5D5]"
                )}>
                  <Check className="w-5 h-5" />
                </div>

                <span className={cn(
                  "text-lg font-medium transition-colors duration-200",
                  value === true 
                    ? "text-[#CEF440]" 
                    : "text-[#D5D5D5]"
                )}>
                  Oui
                </span>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Button Non */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full"
        >
          <button
            onClick={() => onChange(field, false)}
            className={cn(
              "flex items-center w-full h-14 cursor-pointer transition-all duration-200",
              "bg-gray/5 border-l-2",
              "group relative overflow-hidden",
              value === false ? "border-l-[#CEF440] bg-primary/10" : "border-transparent hover:border-l-[#D5D5D5]/50"
            )}
          >
            <div className={cn(
              "absolute inset-0 transition-all duration-200 -z-10",
              value === false 
                ? "bg-primary bg-opacity-10"  // Corrigé ici
                : "bg-[#151516] group-hover:bg-[#D5D5D5]/5"
            )} />
            
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded transition-all duration-200",
                  value === false 
                    ? "text-[#CEF440]" 
                    : "text-[#D5D5D5] group-hover:text-[#D5D5D5]"
                )}>
                  <X className="w-5 h-5" />
                </div>

                <span className={cn(
                  "text-lg font-medium transition-colors duration-200",
                  value === false 
                    ? "text-[#CEF440]" 
                    : "text-[#D5D5D5]"
                )}>
                  Non
                </span>
              </div>
            </div>
          </button>
        </motion.div>
      </div>

      {/* URL Input */}
      <AnimatePresence>
        {urlField && value === true && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "56px" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full overflow-hidden"
          >
            <input
              type="url"
              placeholder="URL de votre site web"
              value={urlValue || ''}
              onChange={(e) => onUrlChange?.(e.target.value)}
              className={cn(
                "w-full h-14 font-[500] rounded-none px-4 bg-gray/5 text-[#D5D5D5] border-l-2 border-[#D5D5D5]/10",
                "placeholder:text-[#D5D5D5]/50",
                "focus:outline-none border-l-[#CEF440] focus:border-l-[#CEF440]",
                "transition-all duration-200"
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export default function StepTwo({ formData, handleProjectInfoChange }: StepTwoProps) {
  return (
    <article className="flex flex-col flex-1">
      <header className="space-y-4 mb-10">
        <motion.h2 
          className="text-6xl max-xl:text-5xl max-xs:text-4xl uppercase leading-[1.1] text-gray font-bold"
          variants={itemVariants}
        >
          Où en est votre projet ?
        </motion.h2>
        <motion.p 
          className="text-[#D5D5D5]/70 font-[500] text-xl"
          variants={itemVariants}
        >
          Dites-nous en plus sur votre situation actuelle
        </motion.p>
      </header>
      
      <motion.div
        className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 mt-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <ProjectQuestion
          label="SITE WEB"
          field="hasWebsite"
          value={formData.projectInfo.hasWebsite}
          onChange={handleProjectInfoChange}
          urlField
          urlValue={formData.projectInfo.websiteUrl}
          onUrlChange={(value) => handleProjectInfoChange('websiteUrl', value)}
        />

        <ProjectQuestion
          label="IDENTITÉ GRAPHIQUE"
          field="hasBranding"
          value={formData.projectInfo.hasBranding}
          onChange={handleProjectInfoChange}
        />

        <ProjectQuestion
          label="RÉSEAUX SOCIAUX"
          field="hasSocialMedia"
          value={formData.projectInfo.hasSocialMedia}
          onChange={handleProjectInfoChange}
        />
      </motion.div>
    </article>
  );
}