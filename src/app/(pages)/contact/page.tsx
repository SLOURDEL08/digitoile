// ContactPage.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LayoutContent from '@/components/layout/content';
import { ServiceCategory, FormData, defaultFormData } from '@/components/contact/types';
import   Navigation  from '@/components/contact/navigation';
import  StepOne  from '@/components/contact/step-one';
import  StepTwo   from '@/components/contact/step-two';
import  StepThree  from '@/components/contact/step-three';
import { Phone, Mail, MapPin, LocateIcon, PoundSterlingIcon, AtSign, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IconArrow } from '@/components/ui/icons';

const ContactInfo = () => (
  <div className="space-y-12">
    <div className="space-y-12  max-lg:space-y-0 max-lg:gap-10 max-lg:flex items-center">
      <div className="space-y-6 max-sm:items-start max-sm: max-lg:w-full  max-lg:flex max-lg:gap-4 max-lg:justify-between max-lg:items-center max-lg:space-y-0 uppercase max-lg:text-xl max-md:text-lg max-sm:text-base text-lg font-[500] leading-5">
        <a href="tel:+33600000000" className="flex max-sm:hidden items-center space-x-4 text-[#D5D5D5] hover:text-[#CEF440] transition-colors group">
          <PhoneCall className='max-lg:w-8 max-lg:h-8 max-md:w-6 max-md:h-6'/>
          <span className='leading-5'>+33 6 00 00 00 00</span>
        </a>
        <a href="mailto:contact@example.com" className="flex max-sm:items-center items-center space-x-4 text-[#D5D5D5] hover:text-[#CEF440] transition-colors group">
        <AtSign className='max-lg:w-8 max-lg:h-8 max-md:w-6 max-md:h-6'/>
          <span className='leading-5'>contact@example.com</span>
        </a>
        <div className="flex max-sm:hidden items-center space-x-4 text-[#D5D5D5]">
       <MapPin className='max-lg:w-8 max-lg:h-8 max-md:w-6 max-md:h-6'/>
          <span  className='leading-5'>Paris, France</span>
        </div>
      </div>
    </div>

    <div className='space-y-6 max-lg:hidden max-lg:flex max-lg:space-y-0 max-lg:gap-10'>
      <Button variant="outline" className='opacity-60 border-gray hover:bg-primary group hover:text-secondary hover:border-primary text-gray'>
        Prendre RDV
        <IconArrow className='brightness-[9999] group-hover:brightness-0 transition-colors opacity-80'/>
      </Button>
      <Button variant="outline" className='opacity-60 border-gray hover:bg-primary group hover:text-secondary hover:border-primary text-gray'>
        Nos projets
        <IconArrow className='brightness-[9999] group-hover:brightness-0 transition-colors opacity-80'/>
      </Button>
    </div>
  </div>
);

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleServiceChange = (category: ServiceCategory, service: string) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [category]: prev.services[category].includes(service)
          ? prev.services[category].filter(s => s !== service)
          : [...prev.services[category], service]
      }
    }));
  };

  const handleProjectInfoChange = (field: string, value: boolean | string) => {
    setFormData(prev => ({
      ...prev,
      projectInfo: { ...prev.projectInfo, [field]: value }
    }));
  };

  const handleContactChange = (field: keyof FormData['contact'], value: string) => {
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  return (
    <main className="flex max-lg:flex-col min-h-screened">
      <aside className="w-1/4 max-lg:w-full min-w-[350px] max-md:p-6 max-md:py-6 max-xl:py-10  p-8 py-14 bg-gray/5">
        <ContactInfo />
      </aside>
      
      <section className="w-3/4  max-lg:w-full  flex border-l border-[#D5D5D5]/10">
        <LayoutContent className="flex flex-col w-full">
          <div className="flex flex-col flex-1 min-h-[calc(100vh-16rem)] justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                className="flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="-mt-8 max-md:mt-0">
                  {currentStep === 1 && (
                    <StepOne 
                      formData={formData} 
                      handleServiceChange={handleServiceChange} 
                    />
                  )}
                  {currentStep === 2 && (
                    <StepTwo 
                      formData={formData}
                      handleProjectInfoChange={handleProjectInfoChange}
                    />
                  )}
                  {currentStep === 3 && (
                    <StepThree 
                      formData={formData}
                      handleContactChange={handleContactChange}
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <Navigation
              currentStep={currentStep}
              totalSteps={3}
              onNext={() => setCurrentStep(p => p + 1)}
              onPrev={() => setCurrentStep(p => p - 1)}
              onSubmit={() => console.log('Formulaire soumis:', formData)}
            />
          </div>
        </LayoutContent>
      </section>
    </main>
  );
}