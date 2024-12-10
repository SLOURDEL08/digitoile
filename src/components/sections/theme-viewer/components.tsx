import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import { Pause, Play, ArrowUp, ChevronRight } from "lucide-react";
import { ScrollControlsProps, ThemeItemProps, ThemeSelectorProps } from "./types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconArrow } from "@/components/ui/icons";

export const ScrollControls = ({ isPlaying, showScrollTop, onPlayToggle, onScrollTop }: ScrollControlsProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/40 rounded-full p-2 flex items-center gap-2 transition-all duration-300 hover:bg-black/40 z-10"
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

export const ThemeItem = ({ theme, currentSubTheme, isActive, onClick, onSubThemeChange }: ThemeItemProps) => {
  const ThemeIcon = theme.icon;
  
  return (
    <div
      onClick={() => onClick(theme)}
      className={cn(
        "w-full text-left p-6 transition-all duration-300 cursor-pointer",
        isActive ? "bg-gray/10 text-gray shadow-lg" : "bg-secondary/60 hover:bg-black/10 text-gray hover:shadow-md"
      )}
    >
      <div className="flex items-center  max-sm:relative max-sm:flex-col max-sm:gap-4 max-sm:items-stretch justify-between">
        <div className="flex-1 ">
          <div className="flex max-md:flex-wrap max-md:justify-start  items-center gap-3">
            <ThemeIcon className="h-6 w-6 max-md:-mt-1" />
            <h3 className="text-2xl font-semibold ">{theme.label}</h3>
            <span className={cn(
              "text-xs max-sm:text-sm capitalize  max-sm:absolute max-sm:bottom-1 max-sm:left-0  font-[600] px-3 py-1 rounded-full",
              {
                "bg-blue-500/20 text-blue-500": theme.type === "vitrine",
                "bg-purple-500/10 text-purple-500": theme.type === "ecommerce",
                "bg-green-500/10 text-green-500": theme.type === "vitrine-booking",
                "bg-orange-500/10 text-orange-500": theme.type === "vitrine-ecommerce",
              }
            )}>
              {theme.type}
            </span>
          </div>
        </div>
        
        <div className="flex max-sm:justify-end gap-2">
          {theme.subThemes.map((subTheme, index) => (
            <button
              key={subTheme.id}
              onClick={(e) => {
                e.stopPropagation();
                onSubThemeChange(subTheme);
              }}
              className={cn(
                "!leading-none w-8 h-8 mx-auto max-sm:mx-0  rounded-full border text-xs",
                currentSubTheme.id === subTheme.id 
                  ? "bg-primary border-primary text-secondary" 
                  : "bg-transparent border-gray text-gray hover:bg-gray hover:text-secondary"
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
      
      {isActive && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex gap-10 max-md:gap-2 max-md:flex-col pt-5 mt-5 border-t border-gray/10"
        >
          <div className="mb-4 w-3/5 max-md:w-full">
            <h4 className="text-base font-[600] mb-2">Objectif :</h4>
            <p className="text-sm leading-6 font-[500] opacity-80">{currentSubTheme.objective}</p>
          </div>

          <div className="w-2/5 max-md:w-full">
            <h4 className="text-base font-[600] mb-4">Fonctionnalités :</h4>
            <ul className="flex-wrap gap-6 gap-y-2 flex">
              {currentSubTheme.features.map((feature, index) => (
                <li key={index} className="flex font-[500] items-center gap-2 text-sm">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const ThemeSelector = ({ 
  themes, 
  currentTheme,
  currentSubTheme, 
  onThemeChange,
  onSubThemeChange
}: ThemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const otherThemes = themes.filter(theme => theme.id !== currentTheme.id);

  return (
    <div className="relative space-y-4 z-10">
      <div className="relative z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-gray p-4 flex items-center justify-between group bg-gray/10 anim-graylight-bg hover:bg-gray/5 transition-colors backdrop-blur-sm"
        >
          <span className="font-medium text-xl">Secteurs dactivité</span>
          <IconArrow className={cn(
            "h-5 w-5 text-inherit group-hover:-scale-y-[1] transition-transform",
            isOpen ? "transform -scale-y-[1]" : ""
          )} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute w-full mt-2 shadow-xl overflow-hidden backdrop-blur-md bg-gray/10"
            >
              <div className="max-h-[400px] overflow-y-auto scrollbar-hide divide-y divide-gray/10">
                {otherThemes.map((theme) => {
                  const ThemeIcon = theme.icon;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => {
                        onThemeChange(theme);
                        onSubThemeChange(theme.subThemes[0]);
                        setIsOpen(false);
                      }}
                      className="w-full p-4 px-3 hover:bg-gray/10 transition-colors"
                    >
                      <div className="flex  items-center justify-between">
                        <div>
                          <div className="flex text-gray items-center gap-2">
                            <ThemeIcon className="h-5 w-5" />
                            <h3 className="text-lg font-semibold">{theme.label}</h3>
                 
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 opacity-50 text-gray flex-shrink-0" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={cn("transition-all duration-300", isOpen ? "opacity-50" : "opacity-100")}>
        <ThemeItem 
          theme={currentTheme}
          currentSubTheme={currentSubTheme}
          isActive={true}
          onClick={() => {}}
          onSubThemeChange={onSubThemeChange}
        />
      </div>

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