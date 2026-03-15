import React from 'react';

const ForgeLogo = ({ className = "w-10 h-10" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Core Flame/Blade Shape */}
        <path 
          d="M50 10L80 40V80L50 90L20 80V40L50 10Z" 
          stroke="currentColor" 
          strokeWidth="4" 
          className="text-forge-orange"
          strokeLinejoin="bevel"
        />
        {/* Inner Anvil Shape */}
        <path 
          d="M35 50H65L70 65H30L35 50Z" 
          fill="currentColor" 
          className="text-white"
        />
        <path 
          d="M45 40V50M55 40V50" 
          stroke="currentColor" 
          strokeWidth="3" 
          className="text-forge-orange"
        />
        {/* Glow Element */}
        <circle cx="50" cy="50" r="15" fill="currentColor" className="text-forge-orange opacity-20 blur-md" />
      </svg>
    </div>
  );
};

export default ForgeLogo;
