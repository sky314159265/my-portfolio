"use client";

import React from 'react';
import Link from 'next/link';
import { Caveat } from 'next/font/google';

const penFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Reusable Squiggle
const CyanSquiggle = ({ className = "", delay = "0s" }) => (
  <svg className={`absolute w-full h-3 text-[#06b6d4] pointer-events-none ${className}`} viewBox="0 0 300 20" preserveAspectRatio="none">
    <path className="live-draw" style={{ animationDelay: delay }} pathLength="100" d="M 0 10 L 15 2 L 30 15 L 45 2 L 60 15 L 75 2 L 90 15 L 105 2 L 120 15 L 135 2 L 150 15 L 165 2 L 180 15 L 195 2 L 210 15 L 225 2 L 240 15 L 255 2 L 270 15 L 285 2 L 300 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CnoizeProjectPage() {
  return (
    <div 
      className={`min-h-screen w-full relative overflow-x-hidden text-gray-900 pb-32 cursor-default select-none ${penFont.className}`}
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center top'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .live-draw { stroke-dasharray: 100; stroke-dashoffset: 100; animation: drawPath 1.2s ease-out forwards; }
        @keyframes drawPath { to { stroke-dashoffset: 0; } }
      `}} />

      {/* Header / Back Button */}
      <header className="pt-8 px-6 md:px-12 w-full max-w-6xl mx-auto flex items-center mb-12 relative z-10">
        <Link href="/#projects" className="group flex items-center gap-2 text-3xl font-bold transform -rotate-1 hover:-translate-x-2 transition-transform">
          <svg className="w-8 h-8 text-black" viewBox="0 0 100 100">
            <path className="live-draw" pathLength="100" d="M 80 50 L 20 50 M 40 30 L 20 50 L 40 70" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Desk
        </Link>
      </header>

      <main className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
        
        {/* Left Side: Project Details */}
        <div className="w-full lg:w-1/2">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl font-bold transform -rotate-2">Cnoize Trading App</h1>
            <CyanSquiggle className="-bottom-2 left-0" delay="0.5s" />
          </div>

          <p className="text-3xl text-gray-800 leading-relaxed mb-8">
            A real-time paper trading simulator built from scratch. I bypassed standard REST constraints by building a bidirectional WebSocket pipeline connected to a live market data feed.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-500 transform -rotate-1 mb-3">Core Tech:</h3>
            <div className="flex flex-wrap gap-3">
              {['Kotlin', 'Jetpack Compose', 'WebSockets', 'Firebase Auth', 'Firestore', 'Coroutines / Flow'].map((tech, i) => (
                <span key={tech} className={`px-4 py-1 border-2 border-gray-800 rounded-lg text-xl font-bold bg-yellow-50 shadow-sm ${i % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1 relative">
             <svg className="absolute -top-6 -right-6 w-12 h-12 text-emerald-500 transform rotate-12" viewBox="0 0 100 100">
                <path d="M 50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z" fill="currentColor"/>
            </svg>
            <h3 className="text-3xl font-bold mb-2">See it in action 👉</h3>
            <p className="text-2xl text-gray-700">
              Watch the raw APK executing live trades via WebSockets with sub-100ms latency. The Jetpack Compose UI remains butter-smooth during heavy data loads.
            </p>
          </div>
        </div>

        {/* Right Side: The Video Player Emulator */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative bg-white p-6 pb-20 shadow-[20px_20px_0_0_rgba(0,0,0,0.8)] border-2 border-black transform rotate-2 max-w-[350px] w-full">
            {/* Sticky Tape */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-10 bg-yellow-100/90 transform -rotate-3 border border-yellow-300 shadow-sm z-30"></div>

            {/* The Phone Bezel Wrapper */}
            <div className="relative w-full aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-gray-800 overflow-hidden shadow-inner flex flex-col font-sans text-white">
              
              {/* Camera Notch overlay to make it look like a real phone */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

              {/* THE VIDEO ELEMENT */}
              <video 
                src="/cnoize-demo.mp4"
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />

            </div>
            
            {/* Handwritten Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-black font-bold transform -rotate-1 whitespace-nowrap pointer-events-none">
              "Live Build Recording"
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}