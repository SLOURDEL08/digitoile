'use client'

import { motion } from 'framer-motion';
import { FormData } from './types';
import { cn } from '@/lib/utils';

interface StepThreeProps {
  formData: FormData;
  handleContactChange: (field: keyof FormData['contact'], value: string) => void;
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
}

const FormField = ({ label, type, value, onChange, placeholder }: FormFieldProps) => (
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
      value ? "border-l-[#CEF440]" : "hover:border-l-[#D5D5D5]/50"
    )}>
      <div className={cn(
        "absolute inset-0 transition-all duration-200 -z-10",
        value ? "bg-[#CEF440]/5" : "bg-[#151516] group-hover:bg-[#D5D5D5]/5"
      )} />
      
      <div className="flex flex-col w-full px-4 py-3">
        <label className="text-[#D5D5D5]/70 text-sm mb-1">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "bg-transparent w-full text-lg outline-none",
            value ? "text-[#CEF440]" : "text-[#D5D5D5]",
            "placeholder:text-[#D5D5D5]/30"
          )}
        />
      </div>
    </div>
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
    <div className="flex flex-col gap-1">
      {children}
    </div>
  </motion.div>
);

export default function StepThree({ formData, handleContactChange }: StepThreeProps) {
  return (
    <div className="w-full ">
      <motion.div 
        className=""
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div className="space-y-4 -mt-4 mb-10">
          <motion.h3 
            className="text-6xl max-xl:text-5xl  max-xs:text-4xl   uppercase leading-[1.1] text-gray font-bold"
            variants={itemVariants}
          >
            Informations de contact
          </motion.h3>
          <motion.p 
            className="text-[#D5D5D5]/70 text-xl"
            variants={itemVariants}
          >
            Renseignez vos coordonnées pour finaliser votre demande
          </motion.p>
        </div>
        
        <motion.div
          className="flex justify-start max-lg:flex-col gap-10 items-start"
          variants={containerVariants}
        >
          {/* Informations personnelles */}
          <FormSection title="INFORMATIONS">
            <FormField
              label="Prénom"
              type="text"
              value={formData.contact.firstName}
              onChange={(value) => handleContactChange('firstName', value)}
              placeholder="Votre prénom"
            />
            <FormField
              label="Nom"
              type="text"
              value={formData.contact.lastName}
              onChange={(value) => handleContactChange('lastName', value)}
              placeholder="Votre nom"
            />
            <FormField
              label="Email"
              type="email"
              value={formData.contact.email}
              onChange={(value) => handleContactChange('email', value)}
              placeholder="votre@email.com"
            />
          </FormSection>

          {/* Informations professionnelles */}
          <FormSection title="ENTREPRISE">
            <FormField
              label="Société"
              type="text"
              value={formData.contact.company}
              onChange={(value) => handleContactChange('company', value)}
              placeholder="Nom de votre société"
            />
            <FormField
              label="Téléphone"
              type="tel"
              value={formData.contact.phone}
              onChange={(value) => handleContactChange('phone', value)}
              placeholder="Votre numéro"
            />
          </FormSection>

          {/* Localisation */}
          <FormSection title="LOCALISATION">
            <FormField
              label="Ville"
              type="text"
              value={formData.contact.city}
              onChange={(value) => handleContactChange('city', value)}
              placeholder="Votre ville"
            />
            <FormField
              label="Code Postal"
              type="text"
              value={formData.contact.zipCode}
              onChange={(value) => handleContactChange('zipCode', value)}
              placeholder="Code postal"
            />
          </FormSection>
        </motion.div>
      </motion.div>
    </div>
  );
}