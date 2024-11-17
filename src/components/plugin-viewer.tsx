'use client'

import { motion } from "framer-motion";
import { Code, Globe, ShoppingCart, Calendar, Settings, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ServiceType {
  icon: React.ElementType;
  name: string;
  highlight: string;
  gradient: string;
}

const services: ServiceType[] = [
  { 
    icon: Globe,
    name: "Site Vitrine",
    highlight: "Design & Performance",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: ShoppingCart,
    name: "E-commerce",
    highlight: "Vente & Gestion",
    gradient: "from-violet-500 to-purple-500"
  },
  { 
    icon: Calendar,
    name: "Site Booking",
    highlight: "Réservation & Planning",
    gradient: "from-amber-500 to-orange-500"
  },
  { 
    icon: Code,
    name: "Sur-Mesure",
    highlight: "Solutions Uniques",
    gradient: "from-emerald-500 to-green-500"
  }
];

export default function PluginViewer() {
  return (
    <div className="relative w-full pb-10 overflow-visible overflow-hidden bg-primary">

      <div className="w-full mx-auto px-6">
        <div className="">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 hover:bg-secondary/20 transition-all animate-bounce duration-500 bg-secondary/10 rounded-full pl-2 pr-4 py-1.5"
            >
              <span className="bg-secondary text-white font-[500] text-base px-2.5 py-0.5 rounded-full">New</span>
              <span className="text-lg text-secondary">Plugins & thèmes personnalisables</span>
            </motion.div>

            <h1 className="text-7xl uppercase font-bold text-gray">
              <span className="text-black">Développement</span>
              <br />
              <span className="text-black/80">Web sur mesure</span>
            </h1>

            <p className="text-xl w-2/3 mx-auto text-black/70 leading-relaxed">
              Des solutions web professionnelles adaptées à vos besoins. 
              De la vitrine à l'e-commerce, nous donnons vie à vos projets digitaux.
            </p>

            <div className="flex justify-center gap-4">
              <Button className="">
                Découvrir nos services
              </Button>
              <Button variant="outline" className="">
                Voir nos réalisations
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
           

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}