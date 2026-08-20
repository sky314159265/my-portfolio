"use client";

import React from 'react';
import Link from 'next/link';
import { Caveat } from 'next/font/google';

const penFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// --- REUSABLE SVG DOODLES ---
const OrangeUnderline = ({ className = "", delay = "0s" }) => (
  <svg className={`absolute w-full h-3 text-[#ff5e00] pointer-events-none ${className}`} viewBox="0 0 200 20" preserveAspectRatio="none">
    <path className="live-draw" style={{ animationDelay: delay }} pathLength="100" d="M 2 12 Q 50 8 100 12 T 198 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

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

      {/* 1. TOP NAVIGATION / BACK BUTTON */}
      <header className="pt-8 px-6 md:px-12 w-full max-w-6xl mx-auto flex justify-between items-center mb-10 relative z-10">
        <Link href="/#projects" className="group flex items-center gap-2 text-3xl font-bold transform -rotate-1 hover:-translate-x-2 transition-transform">
          <svg className="w-8 h-8 text-black" viewBox="0 0 100 100">
            <path className="live-draw" pathLength="100" d="M 80 50 L 20 50 M 40 30 L 20 50 L 40 70" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Desk
        </Link>
        <span className="text-xl font-bold text-gray-400 font-mono hidden md:inline">PROJECT_LOG // 001</span>
      </header>

      <main className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-20 relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Left Details */}
          <div className="w-full lg:w-1/2">
            <div className="relative inline-block mb-6">
              <h1 className="text-5xl md:text-6xl font-bold transform -rotate-2">Cnoize Trading App</h1>
              <CyanSquiggle className="-bottom-2 left-0" delay="0.4s" />
            </div>

            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8">
              A high-frequency paper trading engine built with Kotlin & Jetpack Compose. Engineered from the metal up to deliver sub-100ms real-time market updates without UI lag.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-500 transform -rotate-1 mb-3">Core Stack:</h3>
              <div className="flex flex-wrap gap-3">
                {['Kotlin', 'Jetpack Compose', 'WebSockets', 'Kotlin Coroutines / Flow', 'Firebase Auth', 'Firestore'].map((tech, i) => (
                  <span key={tech} className={`px-4 py-1 border-2 border-gray-800 rounded-lg text-xl font-bold bg-yellow-50 shadow-sm transition-transform hover:-translate-y-1 ${i % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1 relative">
              <div className="absolute -top-3 left-6 w-20 h-5 bg-yellow-200/90 border border-yellow-300 transform -rotate-2"></div>
              <h3 className="text-3xl font-bold mb-2">Real-Time Native Architecture</h3>
              <p className="text-2xl text-gray-700">
                Eliminates REST polling bottlenecks by maintaining persistent, isolated WebSocket streams feeding reactive Kotlin StateFlow directly into scoped UI composables.
              </p>
            </div>
          </div>

          {/* Right Phone Mockup (Video Demo) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative bg-white p-6 pb-20 shadow-[20px_20px_0_0_rgba(0,0,0,0.8)] border-2 border-black transform rotate-2 max-w-[350px] w-full">
              {/* Sticky Tape */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-10 bg-yellow-100/90 transform -rotate-3 border border-yellow-300 shadow-sm z-30"></div>

              {/* Phone Frame */}
              <div className="relative w-full aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-gray-800 overflow-hidden shadow-inner flex flex-col font-sans text-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                <video 
                  src="/cnoize-demo.mp4"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-black font-bold transform -rotate-1 whitespace-nowrap pointer-events-none">
                "Live Build Recording"
              </div>
            </div>
          </div>
        </section>

        {/* 3. INSPIRATION & STORY */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-yellow-50 p-8 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-1 relative">
            <div className="relative inline-block mb-4">
              <h2 className="text-4xl font-bold">💡 The Inspiration</h2>
              <OrangeUnderline className="-bottom-1" delay="0.2s" />
            </div>
            <p className="text-2xl text-gray-800 leading-relaxed">
              Most mobile trading applications overwhelm beginners with cluttered interfaces and restrictive paywalls. I wanted to build an institutional-grade sandbox where traders could practice volatility execution with zero capital risk, experienced through an uncluttered, native interface.
            </p>
          </div>

          <div className="bg-blue-50 p-8 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1 relative">
            <div className="relative inline-block mb-4">
              <h2 className="text-4xl font-bold">📖 The Story</h2>
              <OrangeUnderline className="-bottom-1" delay="0.3s" />
            </div>
            <p className="text-2xl text-gray-800 leading-relaxed">
              Cnoize began with a classic problem: traditional REST endpoints hit rate limits (HTTP 429) during market spikes. I tore down the initial prototype and rewrote the entire backend ingestion pipeline around full-duplex WebSockets, optimizing Kotlin StateFlow to maintain butter-smooth UI rendering under heavy ticker bursts.
            </p>
          </div>
        </section>

        {/* 4. DEEP DIVE: ARCHITECTURE & WORKFLOW */}
        <section className="p-8 md:p-10 border-4 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-[0.5deg]">
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">⚙️ Architecture & Data Pipeline</h2>
            <CyanSquiggle className="-bottom-2" delay="0.2s" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Identity */}
            <div className="p-6 border-2 border-black bg-gray-50 rounded-xl relative transform rotate-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">🔐 Auth & Identity</h3>
              <p className="text-xl text-gray-700 leading-snug">
                Powered by Firebase Auth. Sessions are securely managed and tokenized, ensuring user portfolios, trade histories, and buying power are strictly segregated and protected from the moment of login.
              </p>
            </div>

            {/* Sockets */}
            <div className="p-6 border-2 border-black bg-emerald-50 rounded-xl relative transform -rotate-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">🔌 Isolated Sockets</h3>
              <p className="text-xl text-gray-700 leading-snug">
                Instead of a single congested firehose, every market (Crypto, Forex, Stocks) spins up a <strong>dedicated, isolated WebSocket channel</strong>. This prevents thread-blocking and guarantees that a spike in crypto volume won't lag stock quotes.
              </p>
            </div>

            {/* Trade Engine */}
            <div className="p-6 border-2 border-black bg-blue-50 rounded-xl relative transform rotate-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">⚡ Trade Execution</h3>
              <p className="text-xl text-gray-700 leading-snug">
                When a user initiates a trade, local state validates purchasing power instantly. The payload is then processed via Firestore transactions to guarantee ACID compliance before updating the live portfolio.
              </p>
            </div>

            {/* Flow */}
            <div className="p-6 border-2 border-black bg-gray-50 rounded-xl relative transform -rotate-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">🧵 Coroutines & Flow</h3>
              <p className="text-xl text-gray-700 leading-snug">
                Incoming market packets from all sockets are parsed asynchronously on background I/O threads using Kotlin Coroutines, ensuring the main execution loop remains completely unblocked.
              </p>
            </div>

            {/* State */}
            <div className="p-6 border-2 border-black bg-gray-50 rounded-xl relative transform rotate-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">🗃️ State Dispatch</h3>
              <p className="text-xl text-gray-700 leading-snug">
                Clean StateFlow updates mutable state models. It buffers rapid, overlapping ticks to prevent the UI from attempting to render unnecessary intermediary frames.
              </p>
            </div>

            {/* Compose */}
            <div className="p-6 border-2 border-black bg-gray-50 rounded-xl relative transform -rotate-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">🎨 Jetpack Compose</h3>
              <p className="text-xl text-gray-700 leading-snug">
                The UI is broken into strictly scoped composables. Compose intelligently recomposes <em>only</em> the specific ticker nodes with updated pricing, maintaining a flawless 60 FPS.
              </p>
            </div>

          </div>
        </section>

        {/* 5. USE CASES */}
        <section>
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl font-bold transform -rotate-1">🎯 Use Cases</h2>
            <OrangeUnderline className="-bottom-1" delay="0.1s" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform rotate-1">
              <h3 className="text-2xl font-bold mb-2">Strategy Prototyping</h3>
              <p className="text-xl text-gray-700">
                Test intraday scalping and momentum setups against genuine real-time bid/ask spreads without risking real capital.
              </p>
            </div>

            <div className="bg-purple-50 p-6 border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform -rotate-1">
              <h3 className="text-2xl font-bold mb-2">Low-Latency Benchmarking</h3>
              <p className="text-xl text-gray-700">
                Serves as a production benchmark for high-performance Kotlin and Compose state handling under massive data loads.
              </p>
            </div>
          </div>
        </section>

        {/* 6. FUTURE ROADMAP (NEW) */}
        <section className="p-8 md:p-10 border-4 border-black bg-yellow-100 shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-[1deg]">
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">🚀 Future Roadmap</h2>
            <CyanSquiggle className="-bottom-2" delay="0.2s" />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-black text-black font-mono mt-1">V2</div>
              <div>
                <h3 className="text-3xl font-bold mb-1">The Learning Phase</h3>
                <p className="text-2xl text-gray-800">
                  Transitioning Cnoize from just a sandbox into an educational hub. This phase introduces interactive modules covering candlestick patterns, risk management formulas, and fundamental trading psychology designed specifically for newcomers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 opacity-75 hover:opacity-100 transition-opacity">
              <div className="text-4xl font-black text-gray-500 font-mono mt-1">V3</div>
              <div>
                <h3 className="text-3xl font-bold mb-1 text-gray-600">Advanced Order Types</h3>
                <p className="text-2xl text-gray-600">
                  Implementation of server-side Limit, Stop-Loss, and Trailing Stop orders to simulate complex execution strategies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 opacity-75 hover:opacity-100 transition-opacity">
              <div className="text-4xl font-black text-gray-500 font-mono mt-1">V4</div>
              <div>
                <h3 className="text-3xl font-bold mb-1 text-gray-600">Social Trading & Leaderboards</h3>
                <p className="text-2xl text-gray-600">
                  Global leaderboards tracking highest monthly ROI, allowing users to share their paper-trading portfolios and learn from top performers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PERFORMANCE BENCHMARKS */}
        <section className="p-8 md:p-10 border-4 border-black bg-gray-900 text-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-[0.5deg]">
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl font-bold text-emerald-400">⚡ Performance & Metrics</h2>
            <CyanSquiggle className="-bottom-2" delay="0s" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 border-2 border-gray-700 bg-gray-800 rounded-lg">
              <div className="text-4xl md:text-5xl font-black text-[#00FF66]">&lt;80ms</div>
              <div className="text-lg md:text-xl text-gray-300 font-sans mt-2 font-bold">Tick-to-Screen Latency</div>
            </div>

            <div className="p-4 border-2 border-gray-700 bg-gray-800 rounded-lg">
              <div className="text-4xl md:text-5xl font-black text-cyan-400">60 FPS</div>
              <div className="text-lg md:text-xl text-gray-300 font-sans mt-2 font-bold">Steady Frame Rate</div>
            </div>

            <div className="p-4 border-2 border-gray-700 bg-gray-800 rounded-lg">
              <div className="text-4xl md:text-5xl font-black text-yellow-400">&lt;45MB</div>
              <div className="text-lg md:text-xl text-gray-300 font-sans mt-2 font-bold">Memory Footprint</div>
            </div>

            <div className="p-4 border-2 border-gray-700 bg-gray-800 rounded-lg">
              <div className="text-4xl md:text-5xl font-black text-pink-400">0 Dropped</div>
              <div className="text-lg md:text-xl text-gray-300 font-sans mt-2 font-bold">WebSocket Packets</div>
            </div>
          </div>
        </section>

        {/* 8. FOOTER CALL TO ACTION */}
        <section className="pt-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transform -rotate-1">Interested in the code?</h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-lg">
            Let's discuss architecture choices, state optimization, or building your next production MVP.
          </p>
          <a href="mailto:theskylensteam@gmail.com" className="relative group inline-block cursor-pointer">
            <div className="absolute inset-0 bg-black transform rotate-2 group-hover:rotate-0 transition-transform"></div>
            <div className="relative bg-white border-2 border-black px-8 py-3 text-3xl font-bold transform -rotate-1 group-hover:rotate-0 transition-transform flex items-center gap-3">
              Get in Touch
            </div>
          </a>
        </section>

      </main>
    </div>
  );
}