'use client'

import { cn } from "@/lib/utils";
import { 
  Camera, 
  ShoppingCart, 
  Calendar, 
  Mail, 
  Map, 
  Bell, 
  Settings, 
  Users,
  Music,
  Video,
  Search,
  Heart,
  Star,
  Clock,
  Cloud,
} from "lucide-react";
import { useState } from "react";

interface Plugin {
  icon: React.ElementType;
  name: string;
  description: string;
  color: string;
}

const plugins: Plugin[] = [
  { icon: Camera, name: "Gallery", description: "Gérez vos images facilement", color: "from-purple-500 to-blue-500" },
  { icon: ShoppingCart, name: "Boutique", description: "Solution complète de boutique", color: "from-green-500 to-emerald-500" },
  { icon: Calendar, name: "Calendar", description: "Système de réservation avancé", color: "from-orange-500 to-red-500" },
  { icon: Mail, name: "Contact", description: "Formulaires personnalisables", color: "from-blue-500 to-cyan-500" },
  { icon: Map, name: "Maps", description: "Intégration Google Maps", color: "from-teal-500 to-green-500" },
  { icon: Bell, name: "Notifications", description: "Alertes en temps réel", color: "from-pink-500 to-rose-500" },
  { icon: Settings, name: "Settings", description: "Configuration avancée", color: "from-violet-500 to-purple-500" },
  { icon: Users, name: "Members", description: "Gestion des utilisateurs", color: "from-cyan-500 to-blue-500" },
  { icon: Music, name: "Audio", description: "Lecteur audio intégré", color: "from-rose-500 to-pink-500" },
  { icon: Video, name: "Video", description: "Lecteur vidéo avancé", color: "from-amber-500 to-orange-500" },
  { icon: Search, name: "Search", description: "Recherche performante", color: "from-blue-500 to-indigo-500" },
  { icon: Heart, name: "Likes", description: "Système de likes", color: "from-red-500 to-rose-500" },
  { icon: Star, name: "Reviews", description: "Système d'avis", color: "from-yellow-500 to-amber-500" },
  { icon: Clock, name: "Timer", description: "Minuteur et planificateur", color: "from-indigo-500 to-violet-500" },
  { icon: Cloud, name: "Cloud", description: "Stockage cloud intégré", color: "from-sky-500 to-blue-500" },
];

function PluginCard({ plugin }: { plugin: Plugin }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = plugin.icon;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card de base */}
      <div 
        className={cn(
          "w-[100px] h-[100px] rounded-3xl border-none relative overflow-hidden",
          "bg-gradient-to-br bg-opacity-10 backdrop-blur-lg",
          "border border-white/10 transition-transform duration-300 hover:scale-105",
          plugin.color
        )}
      >
        {/* Fond avec motif */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]" />

        {/* Contenu de la carte */}
        <div className="relative h-full w-full p-4 flex flex-col items-center justify-center">
          <Icon size={32} className="text-white mb-3" strokeWidth={1.5} />
          <p className="text-white text-sm font-medium text-center">{plugin.name}</p>
        </div>

        {/* Overlay au survol */}
        <div 
          className={cn(
            "absolute backdrop-blur-lg inset-0 bg-black/60 flex flex-col items-center justify-center p-2",
            "transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-white text-sm font-medium text-center mb-1">
            {plugin.name}
          </p>
          <p className="text-white/70 text-[12px] text-center">
            {plugin.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PluginViewer() {
  return (
    <div className="py-20 overflow-hidden bg-gray-950 -mx-20">
      {/* Première ligne - défilement vers la droite */}
      <div className="relative">
        <div
          className="flex gap-6 w-fit animate-scroll-right"
        >
          {[...plugins, ...plugins].map((plugin, idx) => (
            <PluginCard key={`right-${idx}`} plugin={plugin} />
          ))}
        </div>
      </div>

      {/* Deuxième ligne - défilement vers la gauche */}
      <div className="relative mt-12">
        <div
          className="flex gap-6 w-fit animate-scroll-left"
        >
          {[...plugins, ...plugins].map((plugin, idx) => (
            <PluginCard key={`left-${idx}`} plugin={plugin} />
          ))}
        </div>
      </div>
    </div>
  );
}