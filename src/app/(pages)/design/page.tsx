'use client'

import { motion } from "framer-motion";
import LayoutContent from "@/components/layout/content";
import { Hero } from "@/components/ui/hero/hero";
import { cn } from "@/lib/utils";
import { 
  Palette, 
  Layers, 
  Monitor, 
  Wand2,
  PenTool,
  Layout,
  Eye,
  Fingerprint,
  Sparkles,
  Users,
  Smartphone,
  Clapperboard,
  Lightbulb,
  target
} from "lucide-react";

// Animations variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const designServices = [
  {
    icon: PenTool,
    title: "Création Graphique",
    description: "Logos, chartes graphiques et identités visuelles qui captivent",
    gradient: "from-pink-500 to-violet-500",
    features: ["Logo Design", "Identité visuelle", "Support marketing", "Illustrations"]
  },
  {
    icon: Layout,
    title: "Maquettes Web",
    description: "Prototypes interactifs et wireframes qui donnent vie à vos idées",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Wireframes", "Prototypes", "Design System", "UI Kit"]
  },
  {
    icon: Wand2,
    title: "Design Sur-Mesure",
    description: "Solutions créatives adaptées à vos besoins spécifiques",
    gradient: "from-amber-500 to-orange-500",
    features: ["Consulting", "Direction artistique", "Brand Strategy", "Guidelines"]
  }
];

const heroFeatures = [
  { label: "UI Design", icon: Eye },
  { label: "Identité", icon: Fingerprint },
  { label: "Motion", icon: Sparkles },
  { label: "Création", icon: PenTool }
];

export default function Design() {
  return (
    <div className="relative overflow-hidden">
     <Hero className="">
  <div className="flex justify-between w-full gap-20 items-center relative">
    {/* Background Animation */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>

    {/* Left Content */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex-1"
    >
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 -left-5 w-10 h-10 border border-secondary/20 rounded-full"
      />

      {/* Main Content */}
      <div className=" space-y-4    ">
        <motion.span
          variants={itemVariants}
          className="text-secondary uppercase text-xl font-light tracking-wider"
        >
          Service de Design
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-7xl uppercase font-semibold"
        >
         Design Créatif
        
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-secondary leading-relaxed"
        >
          Des designs uniques et innovants pour donner vie à vos projets.
          Notre expertise en design transforme vos idées en expériences visuelles mémorables.
        </motion.p>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          className="flex gap-4 flex-wrap"
        >
          {heroFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { 
                    type: "spring",
                    stiffness: 300
                  }
                }}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/60 border border-gray/10 backdrop-blur-sm
                           hover:bg-secondary/20 transition-colors duration-300"
              >
                  <Icon size={20} className="text-primary" />
                <span className="text-gray font-medium">{feature.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-[350px]"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10"
      />
      
      <div className="grid grid-cols-2 gap-6">
        {[Palette, Layers, Monitor, Wand2].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 5, -5, 0],
              transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }
            }}
            className="bg-secondary/10 backdrop-blur-md rounded-2xl p-8 border border-white/10
                       hover:bg-secondary/20 transition-colors duration-300"
          >
            <Icon size={80} className="text-gray" />
          </motion.div>
        ))}
      </div>

      {/* Decorative dots */}
      <div className="absolute -right-10 top-1/2 space-y-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="w-2 h-2 rounded-full bg-primary/30"
          />
        ))}
      </div>
    </motion.div>
  </div>
</Hero>

      {/* Services Section Enhanced */}
      <LayoutContent>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-7xl font-semibold text-gray mb-6">
              Nos Services Design
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-gray/80">
              Solutions créatives adaptées à vos besoins
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Service Card */}
                <div className="bg-secondary/5 backdrop-blur-sm border border-gray/10 rounded-2xl p-8 h-full relative z-10">
                  <div className={cn(
                    "w-20 h-20 rounded-xl flex items-center justify-center mb-8",
                    "bg-gradient-to-r", service.gradient
                  )}>
                    <service.icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray mb-4">{service.title}</h3>
                  <p className="text-lg text-gray/80 mb-8">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 
                            transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{ 
                    background: `linear-gradient(to right, var(--${service.gradient}))` 
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </LayoutContent>
    </div>
  );
}