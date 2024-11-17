export interface ThemeMetrics {
  conversion: string;
  traffic: string;
  reviews: string;
}

export interface Theme {
  id: string;
  label: string;
  description: string;
  image: string;
  type: "vitrine" | "ecommerce" | "vitrine-booking" | "vitrine-ecommerce";
  features: string[];
  metrics: ThemeMetrics;
  extensions: string[];
}

export interface ScrollControlsProps {
  isPlaying: boolean;
  showScrollTop: boolean;
  onPlayToggle: () => void;
  onScrollTop: () => void;
}

export interface ThemeItemProps {
  theme: Theme;
  isActive: boolean;
  onClick: (theme: Theme) => void;
}