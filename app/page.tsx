import React from 'react';
import { ArrowRight, Terminal, Code, Zap } from 'lucide-react';
import Link from 'next/link';

export default function NotebookPortfolio() {
  return (
    <div 
      className="min-h-screen text-gray-900 font-sans selection:bg-blue-300 relative"
      style={{
        backgroundColor: '#ffffff',
        // This creates the notebook box lines AND the dots
        backgroundImage: `
          radial-gradient(circle, #000000 1px, transparent 1px),
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        backgroundPosition: '20px 20px, 0 0, 0 0'
      }}
    >
      
      {/* Navigation (Sticky with sharp borders) */}
      <nav className="border-b-2 border-black bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
            <Terminal size={24} strokeWidth={3} />
            YOUR_NAME.
          </div>
          <a href="#contact" className="border-2 border-black bg-blue-600 text-white font-bold px-4 py-2 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            Book Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="inline-block border-2 border-black bg-yellow-300 font-mono text-xs font-bold px-3 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          STATUS: TAKING Q4 PROJECTS
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
          I build scalable <br className="hidden md:block" />
          <span className="bg-black text-white px-2 leading-snug inline-block transform -skew-x-3">Mobile & AI MVPs</span>
        </h1>
        
        <p className="text-lg md:text-xl font-medium text-gray-700 max-w-2xl mb-10 leading-relaxed bg-white/80 p-2 border border-dashed border-gray-400">
          No slow agencies. No bloated code. Just pure, high-performance architecture built on Jetpack Compose, WebSockets, and AI logic.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/process" className="flex items-center justify-center gap-2 border-2 border-black bg-white text-black px-6 py-3 font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            View My Process <ArrowRight size={18} strokeWidth={3} />
          </Link>
          <Link href="/ui-lab" className="flex items-center justify-center gap-2 border-2 border-black bg-gray-100 text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors">
            UI Engineering Lab
          </Link>
        </div>
      </header>

      {/* Trust Signals (Sketchbook Style Cards) */}
      <section className="border-t-2 border-black bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="border-2 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <Zap size={32} className="mb-4" strokeWidth={2.5} />
            <h3 className="font-black text-xl mb-2">Sub-50ms Latency</h3>
            <p className="text-gray-600 font-medium">Powered by Upstash Redis and real-time WebSockets.</p>
          </div>

          <div className="border-2 border-black p-6 bg-blue-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <Code size={32} className="mb-4" strokeWidth={2.5} />
            <h3 className="font-black text-xl mb-2">Native Rendering</h3>
            <p className="text-gray-600 font-medium">Flawless 60 FPS Android UIs using Jetpack Compose.</p>
          </div>

          <div className="border-2 border-black p-6 bg-yellow-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <Terminal size={32} className="mb-4" strokeWidth={2.5} />
            <h3 className="font-black text-xl mb-2">Agentic Logic</h3>
            <p className="text-gray-600 font-medium">Zero-hallucination RAG pipelines for reliable AI tools.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-white py-8 text-center">
        <p className="font-mono text-sm font-bold">© 2026 Your Name. Hand-coded from scratch.</p>
      </footer>

    </div>
  );
}