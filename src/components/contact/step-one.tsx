'use client'

import { motion, MotionProps } from 'framer-motion'; // Ajout de MotionProps
import { ServiceCategory, ServiceOption, FormData, serviceOptions } from './types';
import { cn } from '@/lib/utils';
import { Check, Globe, ShoppingCart, LucideProps, Calendar, Wrench, RefreshCcw, Palette, Share2, Brush, Target, LineChart, MousePointer } from 'lucide-react';

interface StepOneProps {
  formData: FormData;
  handleServiceChange: (category: ServiceCategory, service: string) => void;
}

interface ServiceCheckboxProps {
  category: ServiceCategory;
  service: ServiceOption;
  formData: FormData;
  handleServiceChange: (category: ServiceCategory, service: string) => void;
}

const serviceIcons: Record<string, React.ComponentType<LucideProps>> = {
  vitrine: Globe,
  ecommerce: ShoppingCart,
  booking: Calendar,
  surmesure: Wrench,
  maintenance: Wrench,
  refonte: RefreshCcw,
  'web-design': Palette,
  'social-media': Share2,
  branding: Brush,
  tracking: Target,
  optimization: LineChart,
  pixel: MousePointer,
};
const ServiceCheckbox = ({
  category,
  service,
  formData,
  handleServiceChange
}: ServiceCheckboxProps) => {
  const Icon = serviceIcons[service.id] || Globe;
  const isChecked = formData.services[category].includes(service.id);
  
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <input
        type="checkbox"
        id={service.id}
        checked={isChecked}
        onChange={() => handleServiceChange(category, service.id)}
        className="peer absolute opacity-0"
      />
      <label
        htmlFor={service.id}
        className={cn(
          "flex items-center w-full h-14 cursor-pointer transition-all duration-200",
          "bg-gray/5 border-l-2",
          "group relative overflow-hidden",
          isChecked ? "border-l-[#CEF440]" : "border-transparent hover:border-l-[#D5D5D5]/50"
        )}
      >
        <div className={cn(
          "absolute inset-0 transition-all duration-200 -z-10",
          isChecked 
            ? "bg-[#CEF440]/5" 
            : "bg-[#151516] group-hover:bg-[#D5D5D5]/5"
        )} />
        
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center space-x-3">
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded transition-all duration-200",
              isChecked 
                ? "text-[#CEF440]" 
                : "text-[#D5D5D5] group-hover:text-[#D5D5D5]"
            )}>
              <Icon className="w-5 h-5" />
            </div>

            <span className={cn(
              "text-lg font-medium transition-colors duration-200",
              isChecked 
                ? "text-[#CEF440]" 
                : "text-[#D5D5D5]"
            )}>
              {service.label}
            </span>
          </div>

          <div className={cn(
            "transition-all duration-200",
            isChecked ? "opacity-100" : "opacity-0"
          )}>
            <Check className="w-4 h-4 text-[#CEF440]" />
          </div>
        </div>
      </label>
    </motion.div>
  );
};

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

interface CategoryGridProps extends MotionProps {
  category: ServiceCategory;
  services: ServiceOption[];
  formData: FormData;
  handleServiceChange: (category: ServiceCategory, service: string) => void;
}

const CategoryGrid = ({ 
  category, 
  services, 
  formData, 
  handleServiceChange,
  ...motionProps
}: CategoryGridProps) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col"
    {...motionProps}
  >
    <h4 className="text-[#CEF440] text-xl font-semibold mb-2">
      {category.toUpperCase()}
    </h4>
    
    <div className="flex flex-col gap-1">
      {services.map((service: ServiceOption) => (
        <ServiceCheckbox
          key={service.id}
          category={category}
          service={service}
          formData={formData}
          handleServiceChange={handleServiceChange}
        />
      ))}
    </div>
  </motion.div>
);

export default function StepOne({ formData, handleServiceChange }: StepOneProps) {
  return (
    <div className="w-full">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div className="space-y-4 mb-10">
          <motion.h3 
            className="text-6xl max-xl:text-5xl max-xs:text-4xl uppercase leading-[1.1] text-gray font-bold"
            variants={itemVariants}
          >
            Travaillons ensemble<b className='text-primary'>.</b>
          </motion.h3>
          <motion.p 
            className="text-[#D5D5D5]/70 font-[500] text-xl"
            variants={itemVariants}
          >
            Sélectionnez les services qui correspondent à vos besoins
          </motion.p>
        </div>
        
        <motion.div
          className="grid grid-cols-3 max-xl:grid-cols-1 justify-start gap-10 max-:grid-cols-1 items-start"
          variants={containerVariants}
        >
          {(Object.entries(serviceOptions) as [ServiceCategory, ServiceOption[]][]).map(([category, services]) => (
            <CategoryGrid
              key={category}
              category={category as ServiceCategory}
              services={services}
              formData={formData}
              handleServiceChange={handleServiceChange}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}