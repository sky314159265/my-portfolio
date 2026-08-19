"use client";

import React, { useState, useEffect } from 'react';
import { Caveat } from 'next/font/google';

const penFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function NotebookPortfolio() {
  // --- STATE: TEXT & ERASER ---
  const [phase, setPhase] = useState<'typing-draft' | 'erasing' | 'typing-final' | 'done'>('typing-draft');
  const [draftText, setDraftText] = useState('');
  const [finalText, setFinalText] = useState('');
  
  const draftContent = "I build apps. Usually they work. Sometimes they break. I'm just a developer who writes code.";
  const finalContent = "I take messy ideas and turn them into products that don't crash. No agency jargon, no bloated code. Just solid architecture, smooth interfaces, and backend logic that works on day one.";

  // --- STATE: THE LIVE EMULATOR UI ---
  const [activeTab, setActiveTab] = useState<'dashboard' | 'trade' | 'portfolio'>('dashboard');
  const [btcPrice, setBtcPrice] = useState(64230.50);
  const [ethPrice, setEthPrice] = useState(3450.20);
  const [balance, setBalance] = useState(10000.00);
  const [tradeFlash, setTradeFlash] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (phase === 'typing-draft') {
      if (draftText.length < draftContent.length) {
        timeout = setTimeout(() => setDraftText(draftContent.slice(0, draftText.length + 1)), 40);
      } else {
        timeout = setTimeout(() => setPhase('erasing'), 1500);
      }
    } else if (phase === 'erasing') {
      timeout = setTimeout(() => setPhase('typing-final'), 2000);
    } else if (phase === 'typing-final') {
      if (finalText.length < finalContent.length) {
        timeout = setTimeout(() => setFinalText(finalContent.slice(0, finalText.length + 1)), 30);
      } else {
        setPhase('done');
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, draftText, finalText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice(prev => prev + ((Math.random() - 0.5) * 50));
      setEthPrice(prev => prev + ((Math.random() - 0.5) * 15));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const executeFakeTrade = () => {
    if (balance >= 100) {
      setBalance(prev => prev - 100);
      setTradeFlash(true);
      setTimeout(() => setTradeFlash(false), 300);
    }
  };

  return (
    <div 
      className={`min-h-screen w-full relative overflow-x-hidden text-gray-900 pb-32 cursor-default select-none ${penFont.className}`}
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `linear-gradient(to right, #bfdbfe 1px, transparent 1px), linear-gradient(to bottom, #bfdbfe 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }}
    >
      {/* GLOBAL CSS ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hover Circle Fix: Stroke offset starts at 2000 to ensure it is completely hidden */
        .group:hover .draw-circle { stroke-dashoffset: 0 !important; }
        
        /* Sequential Live Drawing */
        .live-draw {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawPath 3s linear forwards;
        }
        @keyframes drawPath { to { stroke-dashoffset: 0; } }
        
        /* Pipeline Timing */
        .seq-1 { animation-delay: 0.5s; }
        .seq-2 { animation-delay: 3s; }
        .seq-3 { animation-delay: 5s; }
        .seq-4 { animation-delay: 8s; }
        .seq-5 { animation-delay: 10s; }
        .seq-6 { animation-delay: 13s; }
        .seq-7 { animation-delay: 15s; }
        .fade-in-seq { opacity: 0; animation: fadeInText 1s ease forwards; }
        @keyframes fadeInText { to { opacity: 1; } }

        /* Tic-Tac-Toe Timing */
        .ttt-grid { animation-delay: 1s; }
        .ttt-1 { animation-delay: 2s; } /* O */
        .ttt-2 { animation-delay: 3s; } /* X */
        .ttt-3 { animation-delay: 4s; } /* O */
        .ttt-4 { animation-delay: 5s; } /* X */
        .ttt-5 { animation-delay: 6s; } /* O wins */
        .ttt-strike { animation-delay: 7s; }

        /* Eraser Animation */
        @keyframes scrubEraser {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { transform: translate(0, 0) rotate(-15deg); opacity: 1; }
          20% { transform: translate(300px, 10px) rotate(10deg); }
          40% { transform: translate(-20px, 30px) rotate(-10deg); }
          60% { transform: translate(320px, 50px) rotate(15deg); }
          80% { transform: translate(0px, 80px) rotate(-15deg); opacity: 1; }
          100% { transform: translate(400px, 150px) rotate(45deg); opacity: 0; }
        }
        .animate-eraser { animation: scrubEraser 2s ease-in-out forwards; }
        
        @keyframes fadeOutDraft {
          0% { opacity: 1; } 40% { opacity: 0.5; } 80% { opacity: 0; } 100% { opacity: 0; }
        }
        .erasing-text { animation: fadeOutDraft 1.5s ease-in-out forwards; }
      `}} />

      {/* 1. HEADER */}
      <header className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <div className="group relative inline-block cursor-pointer">
          <h1 className="text-5xl md:text-6xl text-black font-bold transform -rotate-2">
            Hi, I'm Sky.
          </h1>
          {/* 
            BUG FIX: Added inline style to enforce dash array hiding before hover.
            The group-hover in CSS overrides this to 0. 
          */}
          <svg className="absolute -inset-4 w-[120%] h-[140%] text-red-500 pointer-events-none transform -rotate-2" viewBox="0 0 200 100" preserveAspectRatio="none">
            <path 
              className="draw-circle transition-all duration-700 ease-out" 
              style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
              d="M 100 5 C 160 5 190 20 195 50 C 200 80 160 95 100 95 C 40 95 5 80 5 50 C 5 20 40 5 90 8 Z" 
              stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>

      {/* 2. WHAT I ACTUALLY DO & TIC-TAC-TOE */}
      <section className="pt-40 md:pt-48 px-8 md:px-16 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-6 underline decoration-blue-400 decoration-wavy underline-offset-4 transform -rotate-1">What I actually do:</h2>
          <div className="relative text-4xl text-gray-800 leading-relaxed min-h-[150px]">
            {(phase === 'typing-draft' || phase === 'erasing') && (
              <p className={`absolute top-0 left-0 text-gray-500 ${phase === 'erasing' ? 'erasing-text' : ''}`}>
                {draftText}{phase === 'typing-draft' && <span className="animate-pulse">|</span>}
              </p>
            )}
            {phase === 'erasing' && (
              <div className="absolute top-0 left-0 z-20 animate-eraser pointer-events-none">
                <svg width="80" height="60" viewBox="0 0 100 80" className="drop-shadow-lg">
                  <path d="M10 40 L40 10 L90 30 L60 60 Z" fill="#fbcfe8" stroke="#f472b6" strokeWidth="3"/>
                  <path d="M10 40 L10 55 L35 75 L60 60 L60 45" fill="#f9a8d4" stroke="#f472b6" strokeWidth="3"/>
                  <path d="M35 75 L90 45 L90 30 L60 60" fill="#fdf2f8" stroke="#f472b6" strokeWidth="3"/>
                </svg>
              </div>
            )}
            {(phase === 'typing-final' || phase === 'done') && (
              <p className="absolute top-0 left-0 text-black">
                {finalText}{phase === 'typing-final' && <span className="animate-pulse">|</span>}
              </p>
            )}
          </div>
        </div>

        {/* Self-Playing Tic-Tac-Toe Doodle */}
        <div className="w-full md:w-1/3 flex justify-center items-center mt-12 md:mt-0 opacity-80 transform rotate-2">
          <svg className="w-48 h-48 text-gray-800" viewBox="0 0 100 100">
            {/* Grid */}
            <path className="live-draw ttt-grid" d="M 33 5 L 33 95 M 66 5 L 66 95 M 5 33 L 95 33 M 5 66 L 95 66" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Move 1: O Top Left */}
            <circle className="live-draw ttt-1" cx="19" cy="19" r="10" stroke="blue" strokeWidth="3" fill="none"/>
            {/* Move 2: X Center */}
            <path className="live-draw ttt-2" d="M 40 40 L 60 60 M 60 40 L 40 60" stroke="red" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Move 3: O Top Right */}
            <circle className="live-draw ttt-3" cx="81" cy="19" r="10" stroke="blue" strokeWidth="3" fill="none"/>
            {/* Move 4: X Bottom Left */}
            <path className="live-draw ttt-4" d="M 10 70 L 30 90 M 30 70 L 10 90" stroke="red" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Move 5: O Top Middle (Wins) */}
            <circle className="live-draw ttt-5" cx="50" cy="19" r="10" stroke="blue" strokeWidth="3" fill="none"/>
            {/* Winning Strike */}
            <path className="live-draw ttt-strike" d="M 5 19 L 95 19" stroke="blue" strokeWidth="5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* 3. HOW IT GETS BUILT (Aligned to left, Literal Drawings) */}
      <section className="mt-40 px-8 md:px-16 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 transform rotate-1 underline decoration-blue-400 decoration-wavy underline-offset-4">How it gets built:</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          
          {/* Step 1: Drawboard (Blueprint & Pencil) */}
          <div className="relative flex flex-col items-center">
            <svg className="w-32 h-32 text-gray-800 transform -rotate-2" viewBox="0 0 100 100">
              {/* Clipboard paper */}
              <path className="live-draw seq-1" d="M 25 15 L 75 15 L 75 85 L 25 85 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Clip */}
              <path className="live-draw seq-1" d="M 40 15 L 40 5 L 60 5 L 60 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Pencil drawing a line */}
              <path className="live-draw seq-1" d="M 65 50 L 85 30 L 90 35 L 70 55 Z M 65 50 L 60 55 L 70 55 M 35 55 L 60 55" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-2xl text-blue-700 mt-2 text-center font-bold fade-in-seq seq-1">Drawboard<br/>Planning</p>
          </div>

          <svg className="hidden md:block w-24 h-16 text-red-500" viewBox="0 0 100 50">
            <path className="live-draw seq-2" d="M 0 25 Q 50 -10 100 25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path className="live-draw seq-2" d="M 85 15 L 100 25 L 85 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>

          {/* Step 2: Integration (Gears / Puzzle Pieces) */}
          <div className="relative flex flex-col items-center mt-8 md:mt-0">
            <svg className="w-32 h-32 text-gray-800 transform rotate-3" viewBox="0 0 100 100">
              {/* Two interlocking puzzle pieces */}
              <path className="live-draw seq-3" d="M 20 30 L 40 30 C 40 20 60 20 60 30 L 80 30 L 80 50 C 90 50 90 70 80 70 L 80 90 L 60 90 C 60 80 40 80 40 90 L 20 90 L 20 70 C 10 70 10 50 20 50 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Inner connection lines */}
              <path className="live-draw seq-3" d="M 40 50 C 40 40 60 40 60 50 M 50 60 L 50 80" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <p className="text-2xl text-blue-700 mt-2 text-center font-bold fade-in-seq seq-3">Integration<br/>Logic</p>
          </div>

          <svg className="hidden md:block w-24 h-16 text-red-500" viewBox="0 0 100 50">
            <path className="live-draw seq-4" d="M 0 25 Q 50 60 100 25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path className="live-draw seq-4" d="M 85 15 L 100 25 L 85 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>

          {/* Step 3: Debugging (Bug getting squashed) */}
          <div className="relative flex flex-col items-center mt-8 md:mt-0">
            <svg className="w-32 h-32 text-gray-800 transform -rotate-1" viewBox="0 0 100 100">
              {/* Bug Body */}
              <path className="live-draw seq-5" d="M 40 30 C 40 10 60 10 60 30 L 60 70 C 60 90 40 90 40 70 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              {/* Legs & Antennae */}
              <path className="live-draw seq-5" d="M 45 30 L 30 20 M 55 30 L 70 20 M 40 45 L 20 45 M 60 45 L 80 45 M 40 60 L 25 75 M 60 60 L 75 75" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Big Red Cross out */}
              <circle className="live-draw seq-5 text-red-500" cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="live-draw seq-5 text-red-500" d="M 20 20 L 80 80" stroke="currentColor" strokeWidth="4" fill="none"/>
            </svg>
            <p className="text-2xl text-blue-700 mt-2 text-center font-bold fade-in-seq seq-5">Hostile<br/>Debugging</p>
          </div>

          <svg className="hidden md:block w-24 h-16 text-red-500" viewBox="0 0 100 50">
            <path className="live-draw seq-6" d="M 0 25 Q 50 -10 100 25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path className="live-draw seq-6" d="M 85 15 L 100 25 L 85 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>

          {/* Step 4: Deployment (Rocketship) */}
          <div className="relative flex flex-col items-center mt-8 md:mt-0">
            <svg className="w-32 h-32 text-gray-800 transform rotate-2" viewBox="0 0 100 100">
              {/* Rocket Body */}
              <path className="live-draw seq-7" d="M 50 10 C 65 30 65 60 65 70 L 35 70 C 35 60 35 30 50 10 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Fins */}
              <path className="live-draw seq-7" d="M 35 60 L 20 80 L 35 70 M 65 60 L 80 80 L 65 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Window & Fire */}
              <circle className="live-draw seq-7" cx="50" cy="45" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path className="live-draw seq-7 text-red-500" d="M 40 70 L 40 90 L 50 80 L 60 90 L 60 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-2xl text-red-600 mt-2 text-center font-bold fade-in-seq seq-7">Ship to<br/>Production</p>
          </div>

        </div>
      </section>

      {/* 4. THE LIVE EMULATOR SHOWCASE */}
      <section className="mt-48 w-full border-t-4 border-black border-dashed pt-24 bg-gray-50/50 pb-32">
        <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6 transform -rotate-1">What I've Built</h2>
            <h3 className="text-4xl text-blue-700 font-bold mb-6 underline decoration-wavy">Cnoize Trading Engine</h3>
            <p className="text-3xl text-gray-800 leading-relaxed mb-8">
              Click through the tabs on the emulator. Check the live market data dashboard, swipe through the layout, and try placing a dummy trade to see the instant WebSocket response. 
            </p>
            <p className="text-2xl text-red-500 font-bold transform rotate-2 animate-bounce">
              (Interact with the prototype -&gt;)
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative bg-white p-6 pb-20 shadow-[20px_20px_0_0_rgba(0,0,0,0.8)] border-2 border-black transform rotate-2 max-w-sm w-full">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-10 bg-yellow-100/90 transform -rotate-3 border border-yellow-300 shadow-sm z-30"></div>

              {/* THE FULLY INTERACTIVE EMULATOR */}
              <div className="relative w-full aspect-[9/19] bg-gray-950 rounded-3xl border-[12px] border-black overflow-hidden shadow-inner font-sans text-white flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

                {/* DYNAMIC CONTENT AREA based on activeTab */}
                <div className="flex-1 p-5 pt-12 overflow-y-auto no-scrollbar">
                  
                  {activeTab === 'dashboard' && (
                    <div className="animate-in slide-in-from-right-4 duration-300">
                      <h4 className="text-gray-400 text-xs font-bold tracking-widest mb-4">MARKET OVERVIEW</h4>
                      
                      {/* BTC Card */}
                      <div className="bg-gray-900 rounded-xl p-4 mb-3 border border-gray-800 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-colors">
                        <div>
                          <div className="font-bold">BTC</div>
                          <div className="text-gray-400 text-xs">Bitcoin</div>
                        </div>
                        {/* Fake SVG Sparkline */}
                        <svg className="w-16 h-8 text-emerald-500" viewBox="0 0 100 50">
                          <path d="M 0 40 L 20 30 L 40 45 L 60 20 L 80 25 L 100 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        </svg>
                        <div className="text-right">
                          <div className="font-mono font-bold">${btcPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                          <div className="text-emerald-500 text-xs">+1.2%</div>
                        </div>
                      </div>

                      {/* ETH Card */}
                      <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-colors">
                        <div>
                          <div className="font-bold">ETH</div>
                          <div className="text-gray-400 text-xs">Ethereum</div>
                        </div>
                        <svg className="w-16 h-8 text-red-500" viewBox="0 0 100 50">
                          <path d="M 0 10 L 20 30 L 40 20 L 60 45 L 80 30 L 100 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        </svg>
                        <div className="text-right">
                          <div className="font-mono font-bold">${ethPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                          <div className="text-red-500 text-xs">-0.4%</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'trade' && (
                    <div className="animate-in slide-in-from-bottom-4 duration-300 h-full flex flex-col justify-center">
                      <h4 className="text-gray-400 text-xs font-bold tracking-widest mb-1 text-center">INSTANT EXECUTION</h4>
                      <div className="text-center mt-2 mb-8">
                        <div className="text-gray-400 text-sm">Purchasing Power</div>
                        <div className="text-4xl font-black font-mono tracking-tighter">${balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                      </div>

                      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-emerald-500/20 transition-opacity duration-300 ${tradeFlash ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="flex justify-between items-center mb-6 relative z-10">
                          <span className="font-bold text-lg">BTC/USD</span>
                          <span className="font-mono font-bold text-xl">${btcPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                        <button onClick={executeFakeTrade} className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-xl transition-colors relative z-10 cursor-pointer active:scale-95 text-lg shadow-lg">
                          MARKET BUY $100
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'portfolio' && (
                    <div className="animate-in slide-in-from-left-4 duration-300">
                      <h4 className="text-gray-400 text-xs font-bold tracking-widest mb-6">ASSET ALLOCATION</h4>
                      
                      {/* Hand-drawn Donut Chart SVG */}
                      <div className="flex justify-center mb-8">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#1f2937" strokeWidth="15" fill="none" />
                          <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="15" fill="none" strokeDasharray="180 250" />
                          <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="15" fill="none" strokeDasharray="50 250" strokeDashoffset="-180" />
                        </svg>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div><span className="text-sm">Bitcoin</span></div>
                          <span className="font-mono">72%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="text-sm">Ethereum</span></div>
                          <span className="font-mono">20%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-700 rounded-full"></div><span className="text-sm">USD Cash</span></div>
                          <span className="font-mono">8%</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* BOTTOM NAVIGATION BAR */}
                <div className="w-full bg-gray-900 border-t border-gray-800 p-4 flex justify-between items-center pb-6 px-8 relative z-30">
                  <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <span className="text-[10px] font-bold">Dash</span>
                  </button>
                  
                  <button onClick={() => setActiveTab('trade')} className={`flex flex-col items-center gap-1 ${activeTab === 'trade' ? 'text-emerald-500' : 'text-gray-500 hover:text-gray-300'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    <span className="text-[10px] font-bold">Trade</span>
                  </button>

                  <button onClick={() => setActiveTab('portfolio')} className={`flex flex-col items-center gap-1 ${activeTab === 'portfolio' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
                    <span className="text-[10px] font-bold">Wallet</span>
                  </button>
                </div>

              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-black font-bold transform -rotate-1 whitespace-nowrap">
                "Live Cnoize Build"
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER & CTA */}
      <footer className="mt-16 px-8 md:px-12 w-full flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-8 transform rotate-1">Ready to start?</h2>
        <a href="mailto:your.email@gmail.com" className="group relative inline-block cursor-pointer">
          <div className="absolute inset-0 bg-black rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
          <div className="relative bg-white border-4 border-black px-12 py-6 text-4xl font-bold transform rotate-1 group-hover:rotate-0 transition-transform">
            Book a Scoping Call
          </div>
        </a>
      </footer>

    </div>
  );
}