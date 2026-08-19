import React from 'react';
import { Terminal, Code, Cpu, Zap, ArrowRight, CheckCircle2, PlayCircle, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-gray-300 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="text-indigo-500" size={24} />
            <span className="text-white font-bold tracking-tight">Your Name</span>
          </div>
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Book Discovery Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for 1 MVP Sprint in Q4 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          I build high-performance <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Mobile & AI MVPs
          </span> in 4 weeks.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Founders lose months waiting for slow agencies. I am a Full-Stack Mobile Architect specializing in Jetpack Compose, real-time WebSockets, distributed Redis engines, and Agentic AI. I ship scalable products that get you funded.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#case-study" className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
            View My Architecture <ArrowRight size={18} />
          </a>
          <a href="#services" className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-6 py-3 rounded-lg font-medium text-white hover:bg-white/10 transition-colors">
            View Pricing
          </a>
        </div>
      </header>

      {/* Live Engineering Metrics (Trust Signals) */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-indigo-400 mb-2">
              <Zap size={18} /> <span className="font-mono text-sm font-bold">LATENCY</span>
            </div>
            <span className="text-2xl text-white font-semibold">&lt; 50ms Execution</span>
            <span className="text-sm text-gray-500 mt-1">Via Upstash Redis & WebSockets</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Cpu size={18} /> <span className="font-mono text-sm font-bold">RENDERING</span>
            </div>
            <span className="text-2xl text-white font-semibold">60 FPS UI</span>
            <span className="text-sm text-gray-500 mt-1">Native Android via Jetpack Compose</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Code size={18} /> <span className="font-mono text-sm font-bold">AI PIPELINE</span>
            </div>
            <span className="text-2xl text-white font-semibold">Agentic RAG</span>
            <span className="text-sm text-gray-500 mt-1">Zero-hallucination workflow</span>
          </div>
        </div>
      </section>

      {/* Flagship Case Study: Cnoize */}
      <section id="case-study" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-white mb-12">Flagship Case Study</h2>
        
        <div className="bg-[#111215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Video Placeholder */}
            <div className="relative aspect-video lg:aspect-auto bg-black border-r border-white/10 flex items-center justify-center group cursor-pointer">
              {/* NOTE: Embed your YouTube Video Here */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-black mix-blend-overlay"></div>
              <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10" />
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <span className="bg-black/80 backdrop-blur text-white text-xs px-2 py-1 rounded font-mono border border-white/20">LIVE DEMO</span>
                <span className="bg-black/80 backdrop-blur text-gray-300 text-xs px-2 py-1 rounded font-mono border border-white/20">01:00</span>
              </div>
            </div>

            {/* Right Column: Tech Specs */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-2">Cnoize: Real-Time Trading Engine</h3>
              <p className="text-gray-400 text-sm mb-6">A high-frequency paper trading simulator featuring sub-millisecond execution, gamified education, and live custom candlestick rendering.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Architecture
                  </h4>
                  <p className="text-sm text-gray-400">
                    Bypassed standard REST constraints by building a bidirectional WebSocket pipeline connected to an Alpaca market data feed. Designed a custom Jetpack Compose Canvas layer to handle live rendering without triggering UI thread jank.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> The Backend
                  </h4>
                  <p className="text-sm text-gray-400">
                    Migrated heavy client-side trade logic to a dedicated Node.js microservice hosted on Render, paired with an Upstash Redis cache to guarantee instant balance updates before batch-syncing to Firestore.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {['Kotlin', 'Jetpack Compose', 'Node.js', 'Redis', 'WebSockets', 'Firebase'].map((tech) => (
                    <span key={tech} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-md text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productized Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Productized Engineering</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">I don't charge hourly. Hourly rates punish efficiency. I charge flat rates for production-ready business outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tier 1 */}
          <div className="bg-[#111215] border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">The Mobile MVP Sprint</h3>
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">$6,000</div>
            <p className="text-gray-400 text-sm mb-6 h-12">Perfect for pre-seed founders who need a high-fidelity, functional Android app to raise capital.</p>
            <ul className="space-y-3 mb-8">
              {['Native Android (Jetpack Compose)', 'Firebase Auth & Database Setup', 'REST API Integrations', 'Delivered in 4 Weeks'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-indigo-400" /> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full text-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-medium transition-colors">
              Secure This Slot
            </a>
          </div>

          {/* Tier 2 */}
          <div className="bg-gradient-to-b from-indigo-900/20 to-[#111215] border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
            <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Realtime & AI</h3>
            <div className="text-3xl font-extrabold text-white mb-6">$12,000</div>
            <p className="text-gray-400 text-sm mb-6 h-12">For startups building complex financial data feeds, WebSocket architectures, or LLM agent integrations.</p>
            <ul className="space-y-3 mb-8">
              {['Everything in MVP Sprint', 'Dedicated Node.js / Serverless Backend', 'Upstash Redis In-Memory Caching', 'Bidirectional WebSockets', 'Custom LLM / RAG Agent Pipeline'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-indigo-400" /> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-medium transition-colors">
              Secure This Slot
            </a>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Stop waiting for slow agencies.</h2>
        <p className="text-xl text-gray-400 mb-10">Let's hop on a 15-minute scoping call to review your architecture and see if we are a technical fit.</p>
        <a href="https://calendly.com/YOUR_LINK" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
          Book Scoping Call <ExternalLink size={20} />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-600 text-sm">
        <p>Built with React & Tailwind. © 2026 Your Name.</p>
      </footer>
    </div>
  );
}