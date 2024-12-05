// components/contact/step-three.tsx
'use client'

import { motion } from 'framer-motion';
import { FormData } from './types';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface StepThreeProps {
  formData: FormData;
  handleContactChange: (field: keyof FormData['contact'], value: string) => void;
  errors: Record<string, string | undefined>;
  showErrors: boolean;
}

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

interface FormFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
  showError: boolean;
}

const FormField = ({ 
  label, 
  type, 
  value, 
  onChange, 
  placeholder,
  error,
  required,
  showError
}: FormFieldProps) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="relative w-full"
  >
    <div className={cn(
      "flex flex-col w-full cursor-text transition-all duration-200",
      "bg-gray/5 border-l-2 border-transparent",
      "group relative overflow-hidden",
      showError && error 
        ? "border-l-red-500" 
        : value 
          ? "border-l-[#CEF440]" 
          : "hover:border-l-[#D5D5D5]/50"
    )}>
      <div className={cn(
        "absolute inset-0 transition-all duration-200 -z-10",
        showError && error 
          ? "bg-red-500/5" 
          : value 
            ? "bg-[#CEF440]/5" 
            : "bg-[#151516] group-hover:bg-[#D5D5D5]/5"
      )} />
      
      <div className="flex flex-col w-full px-4 py-3">
        <label className="flex items-center gap-1 text-[#D5D5D5]/70 text-sm mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "bg-transparent w-full text-lg outline-none",
            showError && error 
              ? "text-red-500" 
              : value 
                ? "text-[#CEF440]" 
                : "text-[#D5D5D5]",
            "placeholder:text-[#D5D5D5]/30"
          )}
        />
      </div>
    </div>
    {showError && error && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-6 left-0 flex items-center gap-1 text-sm text-red-500"
      >
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </motion.div>
    )}
  </motion.div>
);

const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    variants={itemVariants}
    className="flex w-full flex-col space-y-1"
  >
    <h4 className="text-[#CEF440] text-xl font-semibold mb-2">
      {title}
    </h4>
    <div className="flex flex-col gap-6">
      {children}
    </div>
  </motion.div>
);

export default function StepThree({ 
  formData, 
  handleContactChange, 
  errors,
  showErrors
}: StepThreeProps) {
  return (
    <div className="w-full">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div className="space-y-4 -mt-4 mb-10">
          <motion.h3 
            className="text-6xl max-xl:text-5xl max-xs:text-4xl uppercase leading-[1.1] text-gray font-bold"
            variants={itemVariants}
          >
            Informations de contact
          </motion.h3>
          <motion.p 
            className="text-[#D5D5D5]/70 font-[500] text-xl"
            variants={itemVariants}
          >
            Renseignez vos coordonnées pour finaliser votre demande
          </motion.p>
        </div>
        
        <motion.div
          className="flex justify-start max-lg:flex-col gap-10 items-start"
          variants={containerVariants}
        >
          <FormSection title="INFORMATIONS">
            <FormField
              label="Prénom"
              type="text"
              value={formData.contact.firstName}
              onChange={(value) => handleContactChange('firstName', value)}
              placeholder="Votre prénom"
              error={errors.firstName}
              required
              showError={showErrors}
            />
            <FormField
              label="Nom"
              type="text"
              value={formData.contact.lastName}
              onChange={(value) => handleContactChange('lastName', value)}
              placeholder="Votre nom"
              error={errors.lastName}
              required
              showError={showErrors}
            />
            <FormField
              label="Email"
              type="email"
              value={formData.contact.email}
              onChange={(value) => handleContactChange('email', value)}
              placeholder="votre@email.com"
              error={errors.email}
              required
              showError={showErrors}
            />
          </FormSection>

          <FormSection title="ENTREPRISE">
            <FormField
              label="Société"
              type="text"
              value={formData.contact.company}
              onChange={(value) => handleContactChange('company', value)}
              placeholder="Nom de votre société"
              showError={showErrors}
            />
            <FormField
              label="Téléphone"
              type="tel"
              value={formData.contact.phone}
              onChange={(value) => handleContactChange('phone', value)}
              placeholder="06 00 00 00 00"
              error={errors.phone}
              showError={showErrors}
            />
          </FormSection>

          <FormSection title="LOCALISATION">
            <FormField
              label="Ville"
              type="text"
              value={formData.contact.city}
              onChange={(value) => handleContactChange('city', value)}
              placeholder="Votre ville"
              error={errors.city}
              required
              showError={showErrors}
            />
            <FormField
              label="Code Postal"
              type="text"
              value={formData.contact.zipCode}
              onChange={(value) => handleContactChange('zipCode', value)}
              placeholder="59000"
              error={errors.zipCode}
              showError={showErrors}
            />
          </FormSection>
        </motion.div>
      </motion.div>
    </div>
  );
}