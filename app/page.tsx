import React from 'react';

export default function NotebookPortfolio() {
  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        backgroundColor: '#ffffff', // Pure white paper
        backgroundImage: `
          linear-gradient(90deg, transparent 78px, #fca5a5 78px, #fca5a5 80px, transparent 80px),
          linear-gradient(transparent 31px, #bfdbfe 31px, #bfdbfe 32px, transparent 32px)
        `,
        backgroundSize: '100% 100%, 100% 32px'
      }}
    >
      {/* 
        The site is now completely empty. 
        Just a pure notebook paper background.
        Waiting for your next instructions! 
      */}
    </div>
  );
}