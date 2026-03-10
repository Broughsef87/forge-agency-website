import React from 'react';

export default function ForgeLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Angles (Orange) */}
      <path
        d="M 5 30 L 35 30 L 50 60 L 65 30 L 95 30 L 50 95 Z"
        fill="url(#orangeGrad)"
        style={{ filter: "drop-shadow(0px 0px 8px rgba(255,87,34,0.6))" }}
      />

      {/* Inner Diamond (Cyan) */}
      <path
        d="M 50 10 L 75 45 L 50 80 L 25 45 Z"
        fill="url(#cyanGrad)"
        style={{ filter: "drop-shadow(0px 0px 8px rgba(0,255,255,0.6))" }}
      />

      {/* Center Core (Dark) */}
      <path
        d="M 50 25 L 65 45 L 50 65 L 35 45 Z"
        fill="#0a0a0f"
      />
      
      {/* Small Core Gem (Red/Orange) */}
      <path
        d="M 50 35 L 57 45 L 50 55 L 43 45 Z"
        fill="url(#redGrad)"
      />

      <defs>
        <linearGradient id="orangeGrad" x1="5" y1="30" x2="95" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5722" />
          <stop offset="1" stopColor="#FF1744" />
        </linearGradient>
        <linearGradient id="cyanGrad" x1="25" y1="10" x2="75" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFFF" />
          <stop offset="1" stopColor="#00838F" />
        </linearGradient>
        <linearGradient id="redGrad" x1="43" y1="35" x2="57" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5252" />
          <stop offset="1" stopColor="#D50000" />
        </linearGradient>
      </defs>
    </svg>
  );
}