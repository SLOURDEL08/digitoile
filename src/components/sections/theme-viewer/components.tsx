import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import { Pause, Play, ArrowUp, ChevronRight, Star, TrendingUp, Target, ChevronDown } from "lucide-react";
import { IconArrow } from "@/components/ui/icons";
import { ScrollControlsProps, ThemeItemProps, Theme, ThemeMetrics } from "./types";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ScrollControls = ({ isPlaying, showScrollTop, onPlayToggle, onScrollTop }: ScrollControlsProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/40 
              rounded-full p-2 flex items-center gap-2 transition-all duration-300
              hover:bg-black/40 z-10"
  >
    <Button
      size="icon"
      variant="ghost"
      onClick={onPlayToggle}
      className="h-8 w-8 max-md:h-6 max-md:w-6 rounded-full hover:bg-white/20 bg-white/20 transition-colors"
    >
      {isPlaying ? (
        <Pause className="h-4 max-md:h-3.5 max-md:w-3.5 w-4 text-white" />
      ) : (
        <Play className="h-4 max-md:h-3.5 max-md:w-3.5 w-4 text-white" />
      )}
    </Button>

    {showScrollTop && <div className="w-[1px] h-4 bg-white/20" />}
    
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={onScrollTop}
            className="h-8 max-md:h-6 max-md:w-6 w-8 rounded-full hover:bg-white/20 bg-white/20 transition-colors"
          >
            <ArrowUp className="h-4 max-md:h-3.5 max-md:w-3.5 w-4 text-white" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>

    <span className="text-base max-md:text-sm uppercase font-[500] text-white px-2">
      {isPlaying ? 'Lecture' : 'Pause'}
    </span>
  </motion.div>
);

export const ThemeMetricsDisplay = ({ metrics }: { metrics: ThemeMetrics }) => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    <div className="flex items-center gap-2">
      <Target className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{metrics.conversion} conv.</span>
    </div>
    <div className="flex items-center gap-2">
      <TrendingUp className="h-4 w-4 text-green-500" />
      <span className="text-sm font-medium">{metrics.traffic}</span>
    </div>
    <div className="flex items-center gap-2">
      <Star className="h-4 w-4 text-yellow-500" />
      <span className="text-sm font-medium">{metrics.reviews}</span>
    </div>
  </div>
);

export const ThemeItem = ({ theme, isActive, onClick }: ThemeItemProps) => (
  <button
    onClick={() => onClick(theme)}
    className={cn(
      "w-full text-left p-6  transition-all duration-300",
      isActive
        ? "bg-gray/10 text-gray shadow-lg"
        : "bg-secondary/60 hover:bg-black/10 text-gray hover:shadow-md"
    )}
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-[800] uppercase">{theme.label}</h3>
          <span className={cn(
            "text-xs px-2 py-1 rounded-full",
            {
              "bg-blue-500/10 text-blue-500": theme.type === "vitrine",
              "bg-purple-500/10 text-purple-500": theme.type === "ecommerce",
              "bg-green-500/10 text-green-500": theme.type === "vitrine-booking",
              "bg-orange-500/10 text-orange-500": theme.type === "vitrine-ecommerce",
            }
          )}>
            {theme.type}
          </span>
        </div>
        <p className="mt-1 text-sm font-[500] opacity-80">
          {theme.description}
        </p>
        {!isActive && <ThemeMetricsDisplay metrics={theme.metrics} />}
      </div>
      {isActive && (
        <IconArrow className="h-6 brightness-[9999] opacity-70 w-6" />
      )}
    </div>
    
    {isActive && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        className="mt-4 pt-4 border-t border-gray/20"
      >
        <ThemeMetricsDisplay metrics={theme.metrics} />
        
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-[600] mb-2">Fonctionnalités</h4>
            <ul className="space-y-2">
              {theme.features.map((feature, index) => (
                <li key={index} className="flex font-[500] items-center gap-2 text-sm">
                  <ChevronRight className="h-3 w-3 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-[600] mb-2">Extensions</h4>
            <ul className="space-y-2">
              {theme.extensions.map((extension, index) => (
                <li key={index} className="flex font-[500] items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray/60" />
                  {extension}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    )}
  </button>
);

export const ThemeSelector = ({ 
  themes, 
  currentTheme, 
  onThemeChange 
}: { 
  themes: Theme[], 
  currentTheme: Theme, 
  onThemeChange: (theme: Theme) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const otherThemes = themes.filter(theme => theme.id !== currentTheme.id);

  return (
    <div className="relative  space-y-4 z-10">
      {/* Section déroulante pour les autres thèmes - maintenant en haut */}
      <div className="relative z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full  text-gray p-4 flex items-center justify-between bg-gray/10 hover:bg-gray/20 transition-colors backdrop-blur-sm"
        >
          <span className="font-medium">Secteurs dactivité</span>
          <ChevronDown className={cn(
            "h-5 w-5 transition-transform",
            isOpen ? "transform rotate-180" : ""
          )} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div

              className="absolute w-full mt-2 shadow-xl overflow-hidden backdrop-blur-md bg-gray/10"
            >
              <div className="max-h-[400px] overflow-y-auto scrollbar-hide divide-y divide-gray/10">
                {otherThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onThemeChange(theme);
                      setIsOpen(false);
                    }}
                    className="w-full p-4 hover:bg-gray/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex text-gray items-center gap-2">
                          <h3 className="text-lg font-medium">{theme.label}</h3>
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            {
                              "bg-blue-500/10 text-blue-500": theme.type === "vitrine",
                              "bg-purple-500/10 text-purple-500": theme.type === "ecommerce",
                              "bg-green-500/10 text-green-500": theme.type === "vitrine-booking",
                              "bg-orange-500/10 text-orange-500": theme.type === "vitrine-ecommerce",
                            }
                          )}>
                            {theme.type}
                          </span>
                        </div>
                        <p className="text-sm mt-1 opacity-80 text-gray/60 text-left">{theme.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 opacity-50 flex-shrink-0" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Thème actif - maintenant en dessous */}
      <div className={cn(
        "transition-all duration-300",
        isOpen ? "opacity-50" : "opacity-100"
      )}>
        <ThemeItem 
          theme={currentTheme} 
          isActive={true} 
          onClick={() => {}}
        />
      </div>

      {/* Overlay de flou quand le sélecteur est ouvert */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-max h-max inset-0 bg-black/20 backdrop-blur-sm z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};