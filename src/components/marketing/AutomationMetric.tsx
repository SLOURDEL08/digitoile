import React, { useState } from 'react';
import { ShoppingCart, Mail, Star, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type MetricColor = 'blue' | 'purple' | 'green' | 'orange';

interface AutomationMetric {
  title: string;
  icon: LucideIcon;
  value: string;
  color: MetricColor;
  trend: string;
  isActive: boolean;
}

const getColorClasses = (color: MetricColor): string => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600'
  };
  return colorClasses[color];
};

const AutomationSection = () => {
  const metrics: AutomationMetric[] = [
    {
      title: 'Paniers abandonnés',
      icon: ShoppingCart,
      value: '789€',
      color: 'blue',
      trend: '+12%',
      isActive: true
    },
    {
      title: 'Newsletter',
      icon: Mail,
      value: '1234€',
      color: 'purple',
      trend: '+8%',
      isActive: true
    },
    {
      title: 'Avis clients',
      icon: Star,
      value: '456€',
      color: 'green',
      trend: '+15%',
      isActive: true
    },
    {
      title: 'Alertes stock',
      icon: Bell,
      value: '234€',
      color: 'orange',
      trend: '+5%',
      isActive: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? metrics.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === metrics.length - 1 ? 0 : prev + 1));
  };

  const currentMetric = metrics[currentIndex];

  return (
    <div className="bg-white max-md:hidden rounded-lg p-3 sm:p-4 w-full">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-xs sm:text-sm font-semibold">Automatisations actives</h3>
        <div className="flex gap-1">
          <button 
            onClick={handlePrev}
            className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button 
            onClick={handleNext}
            className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 rounded-lg animate-fade ${getColorClasses(currentMetric.color)}`}>
          <div className="flex-1 flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`p-1.5 sm:p-2 rounded-lg bg-opacity-20 bg-current`}>
                <currentMetric.icon className="w-6 text-white h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-medium block sm:inline">{currentMetric.title}</span>
                <p className="text-lg sm:text-2xl font-bold -mt-1">{currentMetric.value}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center gap-1 mt-2 max-md:mt-0 sm:mt-3">
          {metrics.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gray-800 w-3 sm:w-4' : 'bg-gray-300 w-1 sm:w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade {
          animation: fadeEffect 0.3s ease-in-out;
        }

        @keyframes fadeEffect {
          from {
            opacity: 0.7;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .animate-fade {
            animation-duration: 0.2s;
          }
        }
      `}</style>
    </div>
  );
};

export default AutomationSection;