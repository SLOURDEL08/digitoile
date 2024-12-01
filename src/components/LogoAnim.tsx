import React from 'react';

const LogoAnim = () => {
  return (
    <div className="relative w-64 h-20">
      <svg 
        viewBox="0 0 300 150" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate
                attributeName="stop-color"
                values="#3b82f6; #8b5cf6; #3b82f6"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate
                attributeName="stop-color"
                values="#8b5cf6; #3b82f6; #8b5cf6"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Masque pour contenir le fluide */}
          <mask id="containerMask">
            <rect x="40" y="35" width="220" height="80" fill="white" rx="40" />
          </mask>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>

        {/* Cadre de conteneur */}
        <rect 
          x="40" 
          y="35" 
          width="220" 
          height="80" 
          fill="none" 
          stroke="#e2e8f0" 
          strokeWidth="2" 
          rx="40"
        />

        {/* Fluide animé */}
        <g mask="url(#containerMask)">
          <path 
            fill="url(#fluidGradient)"
            filter="url(#goo)"
            className="animate-fluid"
            d="M30,75 
               Q75,65 150,75 
               T270,75 
               Q270,75 270,75 
               Q150,85 30,75 Z"
          >
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
                M30,75 Q75,65 150,75 T270,75 Q270,75 270,75 Q150,85 30,75 Z;
                M30,75 Q75,85 150,75 T270,75 Q270,75 270,75 Q150,65 30,75 Z;
                M30,75 Q75,65 150,75 T270,75 Q270,75 270,75 Q150,85 30,75 Z
              "
            />
          </path>
          
          {/* Deuxième forme pour plus de dynamisme */}
          <path 
            fill="url(#fluidGradient)"
            filter="url(#goo)"
            className="animate-fluid-reverse"
            d="M30,75 
               Q75,85 150,75 
               T270,75 
               Q270,75 270,75 
               Q150,65 30,75 Z"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="
                M30,75 Q75,85 150,75 T270,75 Q270,75 270,75 Q150,65 30,75 Z;
                M30,75 Q75,65 150,75 T270,75 Q270,75 270,75 Q150,85 30,75 Z;
                M30,75 Q75,85 150,75 T270,75 Q270,75 270,75 Q150,65 30,75 Z
              "
            />
          </path>
        </g>
      </svg>

      <style jsx>{`
        .animate-fluid {
          animation: moveFluid 6s ease-in-out infinite;
        }

        .animate-fluid-reverse {
          animation: moveFluidReverse 8s ease-in-out infinite;
        }

        @keyframes moveFluid {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(10px) translateY(-5px);
          }
        }

        @keyframes moveFluidReverse {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-10px) translateY(5px);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoAnim;