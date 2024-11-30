import { LucideIcon } from "lucide-react";

export interface SubTheme {
  id: string;
  image: string;
  features: string[];
  objective: string;
}

export interface Theme {
  id: string;
  label: string;
  description: string;
  type: "vitrine" | "ecommerce" | "vitrine-booking" | "vitrine-ecommerce";
    icon: LucideIcon;
  subThemes: SubTheme[];
}

export interface ScrollControlsProps {
  isPlaying: boolean;
  showScrollTop: boolean;
  onPlayToggle: () => void;
  onScrollTop: () => void;
}

export interface ThemeItemProps {
  theme: Theme;
  currentSubTheme: SubTheme;
  isActive: boolean;
  onClick: (theme: Theme) => void;
  onSubThemeChange: (subTheme: SubTheme) => void;
}

export interface ThemeSelectorProps {
  themes: Theme[];
  currentTheme: Theme;
  currentSubTheme: SubTheme;
  onThemeChange: (theme: Theme) => void;
  onSubThemeChange: (subTheme: SubTheme) => void;
}