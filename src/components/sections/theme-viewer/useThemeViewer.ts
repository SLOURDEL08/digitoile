import { useState, useEffect, useRef, useCallback } from "react";
import { Theme, SubTheme } from "./types";

export const useThemeViewer = (initialTheme: Theme, initialSubTheme: SubTheme) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme);
  const [currentSubTheme, setCurrentSubTheme] = useState<SubTheme>(initialSubTheme);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const autoScroll = useCallback(() => {
    if (!containerRef.current) return;

    const doScroll = () => {
      if (!containerRef.current || !isPlaying) return;

      const container = containerRef.current;
      const newScrollTop = container.scrollTop + 1;

      if (newScrollTop >= container.scrollHeight - container.clientHeight) {
        container.scrollTop = 0;
      } else {
        container.scrollTop = newScrollTop;
      }
    };

    autoScrollIntervalRef.current = setInterval(doScroll, 20);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setIsInView(isVisible);
        if (!isVisible && isPlaying) {
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying && isInView) {
      const cleanup = autoScroll();
      return () => {
        cleanup?.();
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
      };
    }
  }, [isPlaying, isInView, autoScroll]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setShowScrollTop(container.scrollTop > 200);
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      setIsPlaying(false);
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleThemeChange = (theme: Theme) => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setIsPlaying(false);
    setIsLoading(true);
    setCurrentTheme(theme);
    setCurrentSubTheme(theme.subThemes[0]);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  const handleSubThemeChange = (subTheme: SubTheme) => {
    setIsPlaying(false);
    setIsLoading(true);
    setCurrentSubTheme(subTheme);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return {
    currentTheme,
    currentSubTheme,
    isLoading,
    isPlaying,
    showScrollTop,
    containerRef,
    handleScroll,
    scrollToTop,
    togglePlay,
    handleThemeChange,
    handleSubThemeChange,
    handleImageLoad
  };
};