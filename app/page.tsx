"use client";

import React, { useState, useEffect } from 'react';
import { Caveat } from 'next/font/google';

const penFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Reusable SVG Components
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

export default function NotebookPortfolio() {
  // --- TIC-TAC-TOE AI STATE ---
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winningLine, setWinningLine] = useState<string | null>(null);

  const winningCombinations = [
    [0, 1, 2, "M 5 16 L 95 16"], [3, 4, 5, "M 5 50 L 95 50"], [6, 7, 8, "M 5 84 L 95 84"],
    [0, 3, 6, "M 16 5 L 16 95"], [1, 4, 7, "M 50 5 L 50 95"], [2, 5, 8, "M 84 5 L 84 95"],
    [0, 4, 8, "M 5 5 L 95 95"],  [2, 4, 6, "M 95 5 L 5 95"]
  ];

  const checkWinner = (squares: any[]) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c, path] = winningCombinations[i];
      if (squares[a as number] && squares[a as number] === squares[b as number] && squares[a as number] === squares[c as number]) {
        return { winner: squares[a as number], path: path as string };
      }
    }
    return null;
  };

  const handlePlayerMove = (i: number) => {
    if (board[i] || winningLine || !isPlayerTurn) return;
    const newBoard = [...board];
    newBoard[i] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    const status = checkWinner(board);
    if (status) {
      setWinningLine(status.path);
      return;
    }
    if (!isPlayerTurn && board.includes(null)) {
      const timer = setTimeout(() => {
        const newBoard = [...board];
        const emptyIndices = newBoard.map((v, i) => v === null ? i : null).filter(v => v !== null) as number[];
        const randomMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newBoard[randomMove] = 'O';
        setBoard(newBoard);
        setIsPlayerTurn(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinningLine(null);
  };

  return (
    <div 
      className={`min-h-screen w-full relative overflow-x-hidden text-gray-900 pb-20 cursor-default select-none ${penFont.className}`}
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
        html { scroll-behavior: smooth; }
      `}} />

      {/* --- RANDOM BACKGROUND DOODLES --- */}
      {/* Top Right Swirl */}
      <svg className="absolute top-24 right-4 md:right-32 w-24 h-24 text-gray-300 pointer-events-none transform rotate-12" viewBox="0 0 100 100">
        <path d="M 20 50 C 20 20 80 20 80 50 C 80 80 40 80 40 60 C 40 40 60 40 60 55 C 60 70 50 70 50 65" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      
      {/* Mid Left Scribble */}
      <svg className="absolute top-[35%] left-2 md:left-12 w-16 h-16 text-gray-300 pointer-events-none transform -rotate-12" viewBox="0 0 100 100">
        <path d="M 10 30 Q 30 10 50 30 T 90 30 M 15 50 Q 40 30 60 50 T 85 50 M 20 70 Q 50 50 70 70" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Bottom Right Stars */}
      <svg className="absolute top-[65%] right-10 w-16 h-16 text-yellow-400/60 pointer-events-none" viewBox="0 0 100 100">
        <path d="M 50 10 L 55 45 L 90 50 L 55 55 L 50 90 L 45 55 L 10 50 L 45 45 Z" fill="currentColor"/>
        <path d="M 20 20 L 25 35 L 40 40 L 25 45 L 20 60 L 15 45 L 0 40 L 15 35 Z" fill="currentColor" transform="scale(0.5) translate(120, -50)"/>
      </svg>
      {/* --------------------------------- */}

      {/* 1. HEADER */}
      <header className="pt-8 px-6 md:px-12 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pb-6 mb-8 relative z-10">
        
        <div className="relative inline-block transform -rotate-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Hi, I'm sky!
          </h1>
          <OrangeUnderline className="-bottom-1 left-0" delay="0.2s" />
        </div>

        <nav className="flex justify-center gap-6 md:gap-12">
          <a href="#projects" className="flex flex-col items-center relative group cursor-pointer hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-900 mb-1" viewBox="0 0 100 100">
              <path className="live-draw" style={{animationDelay: '0.4s'}} pathLength="100" d="M 15 80 L 85 80 L 75 30 L 50 55 L 25 30 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle className="live-draw" style={{animationDelay: '0.6s'}} pathLength="100" cx="25" cy="20" r="5" stroke="currentColor" strokeWidth="4" fill="none"/>
              <circle className="live-draw" style={{animationDelay: '0.7s'}} pathLength="100" cx="50" cy="45" r="5" stroke="currentColor" strokeWidth="4" fill="none"/>
              <circle className="live-draw" style={{animationDelay: '0.8s'}} pathLength="100" cx="75" cy="20" r="5" stroke="currentColor" strokeWidth="4" fill="none"/>
            </svg>
            <span className="text-2xl font-bold transform -rotate-1">Projects</span>
            <OrangeUnderline className="-bottom-1" delay="0.9s" />
          </a>

          <a href="#contact" className="flex flex-col items-center relative group cursor-pointer hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-900 mb-1" viewBox="0 0 100 100">
              <path className="live-draw" style={{animationDelay: '0.6s'}} pathLength="100" d="M 10 60 L 90 20 L 60 90 L 50 65 Z M 90 20 L 50 65 M 40 60 L 50 65 L 45 85 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-bold transform -rotate-1">Contact</span>
            <OrangeUnderline className="-bottom-1" delay="1.1s" />
          </a>

          <a href="#testimonials" className="flex flex-col items-center relative group cursor-pointer hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-900 mb-1" viewBox="0 0 100 100">
              <path className="live-draw" style={{animationDelay: '0.8s'}} pathLength="100" d="M 20 30 L 70 30 L 70 70 L 40 70 L 20 90 L 20 70 L 20 30 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="live-draw" style={{animationDelay: '1s'}} pathLength="100" d="M 35 45 L 55 45 M 35 55 L 45 55" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="text-2xl font-bold transform -rotate-1">Testimonials</span>
            <OrangeUnderline className="-bottom-1" delay="1.3s" />
          </a>
        </nav>
      </header>

      <main className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-24 relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row justify-between items-start gap-12 relative">
          
          <div className="w-full md:w-[55%]">
            <div className="flex items-end gap-2 mb-6">
              <svg className="w-12 h-12 text-gray-900 pb-1 transform -rotate-6" viewBox="0 0 100 100">
                <path className="live-draw" style={{animationDelay: '1.2s'}} pathLength="100" d="M 15 50 L 25 48 M 25 30 L 35 35 M 50 15 L 50 25 M 75 30 L 65 35 M 85 50 L 75 48" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path className="live-draw" style={{animationDelay: '1.5s'}} pathLength="100" d="M 35 70 C 20 60 20 35 50 35 C 80 35 80 60 65 70 L 65 80 L 35 80 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="live-draw" style={{animationDelay: '1.7s'}} pathLength="100" d="M 40 85 L 60 85 M 40 90 L 60 90 M 45 95 L 55 95" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
              <div className="relative mb-1">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight transform -rotate-1">What i Actually do :</h2>
                <CyanSquiggle className="-bottom-2 left-0" delay="2.1s" />
              </div>
            </div>
            
            {/* Professional, Industry Standard Copy */}
            <p className="text-2xl md:text-[1.65rem] text-gray-800 leading-[1.6] mt-6">
              I architect and build high-performance, scalable software from the ground up. I bridge the gap between complex backend logic and seamless frontend user experiences, delivering MVPs that are production-ready on day one.
            </p>

            {/* Technical Skills Display */}
            <div className="mt-8 relative">
              <h3 className="text-xl font-bold text-gray-500 transform -rotate-1 mb-3">My Stack:</h3>
              <div className="flex flex-wrap gap-3">
                {/* Updated skills array to include Server Integration & Prompt Engineering */}
                {['Kotlin / Compose', 'Server Integration', 'WebSockets', 'Prompt Engineering', 'Next.js', 'Node.js', 'Upstash Redis', 'Python RAG / AI'].map((skill, index) => (
                  <span key={skill} className={`px-4 py-1 border-2 border-gray-800 rounded-lg text-xl font-bold bg-white/50 shadow-sm transition-transform hover:-translate-y-1 ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Hand-drawn arrow pointing to skills */}
              <svg className="absolute -right-8 bottom-0 w-12 h-12 text-red-500 pointer-events-none transform rotate-45 hidden md:block" viewBox="0 0 100 100">
                <path d="M 20 80 Q 50 20 90 20 M 70 10 L 90 20 L 80 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* TIC-TAC-TOE GAME */}
          <div className="w-full md:w-[45%] flex flex-col justify-center items-center relative">
            
            {/* Fun hand-drawn arrow pointing to game */}
            <svg className="absolute -top-12 left-10 w-16 h-16 text-blue-500 pointer-events-none transform -rotate-12 hidden md:block" viewBox="0 0 100 100">
              <path d="M 10 90 Q 30 10 90 50 M 70 35 L 90 50 L 75 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <div className="relative w-56 h-56 md:w-72 md:h-72 transform -rotate-4 transition-transform hover:-rotate-2">
              <svg className="absolute inset-0 w-full h-full text-black pointer-events-none z-0" viewBox="0 0 100 100">
                <path className="live-draw" style={{animationDelay: '1s'}} pathLength="100" d="M 33 5 L 35 95 M 66 2 L 64 98 M 2 33 L 98 35 M 5 66 L 95 64" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                {winningLine && <path className="live-draw text-black" pathLength="100" d={winningLine} stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>}
              </svg>
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 z-10">
                {board.map((cell, i) => (
                  <div key={i} onClick={() => handlePlayerMove(i)} className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-black/5 rounded-md">
                    {cell === 'X' && (
                      <svg className="w-12 h-12 text-black" viewBox="0 0 100 100">
                        <path className="live-draw" pathLength="100" d="M 15 15 L 85 85 M 85 15 L 15 85" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                    {cell === 'O' && (
                      <svg className="w-12 h-12 text-black" viewBox="0 0 100 100">
                        <circle className="live-draw" pathLength="100" cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="6" fill="none"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-10 mt-4">
              {(winningLine || !board.includes(null)) ? (
                <button onClick={resetGame} className="text-xl font-bold border-2 border-black px-4 py-1 transform rotate-2 hover:bg-black hover:text-white transition-all bg-white shadow-sm">
                  Play Again ✏️
                </button>
              ) : (
                <div className="text-lg text-gray-500 transform rotate-1">
                  {isPlayerTurn ? "(Your turn - You are X)" : "(Website is thinking...)"}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="pt-10 scroll-mt-24 relative">
          
          <div className="relative inline-block mb-10">
            <h2 className="text-4xl font-bold transform -rotate-1">Proof of Work</h2>
            <OrangeUnderline className="-bottom-1" delay="0s" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative bg-white p-4 pb-12 border border-gray-200 shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] transform rotate-1 transition-transform hover:-rotate-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 transform -rotate-2 border border-yellow-300"></div>
              <div className="aspect-video bg-gray-900 rounded-sm mb-4 flex items-center justify-center text-white border-2 border-black">
                <span className="font-mono text-sm opacity-50">CNOIZE_TRADING_ENGINE_UI</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Cnoize Trading App</h3>
              <p className="text-xl text-gray-700 leading-tight">Kotlin/Jetpack Compose UI powered by real-time WebSockets and Upstash Redis.</p>
            </div>

            <div className="relative bg-white p-4 pb-12 border border-gray-200 shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] transform -rotate-2 transition-transform hover:rotate-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 transform rotate-3 border border-yellow-300"></div>
              <div className="aspect-video bg-blue-900 rounded-sm mb-4 flex items-center justify-center text-white border-2 border-black">
                <span className="font-mono text-sm opacity-50">AI_RAG_PIPELINE_SYS</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Agentic Workflow</h3>
              <p className="text-xl text-gray-700 leading-tight">Zero-hallucination data extraction tool using custom Python LLM orchestration.</p>
            </div>
          </div>
        </section>

        {/* 4. PROCESS / PIPELINE SECTION */}
        <section className="pt-10 relative">
          <div className="relative inline-block mb-10">
            <h2 className="text-4xl font-bold transform -rotate-1">How it gets built</h2>
            <CyanSquiggle className="-bottom-2" delay="0s" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {['Drawboard Scope', 'Integration Logic', 'Hostile Debugging', 'Ship to Prod'].map((step, i) => (
              <React.Fragment key={step}>
                <div className={`flex flex-col items-center transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                  <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center text-2xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-2">
                    {i + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-center">{step}</h4>
                </div>
                {i < 3 && (
                  <svg className="hidden md:block w-16 h-8 text-gray-400" viewBox="0 0 100 50">
                    <path d="M 0 25 Q 50 -10 100 25 M 85 15 L 100 25 L 85 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 5. TESTIMONIALS SECTION */}
        <section id="testimonials" className="pt-10 scroll-mt-24">
          <div className="relative inline-block mb-10">
            <h2 className="text-4xl font-bold transform -rotate-1">Word on the street</h2>
            <OrangeUnderline className="-bottom-1" delay="0s" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-yellow-100 p-6 shadow-md transform -rotate-1 md:w-1/2 border border-yellow-200">
              <p className="text-2xl leading-relaxed mb-4">"Sky didn't just write code, they fixed our entire backend architecture before we even realized it was broken. True engineering mindset."</p>
              <p className="text-xl font-bold text-gray-600">- Startup Founder</p>
            </div>
            <div className="bg-blue-50 p-6 shadow-md transform rotate-2 md:w-1/2 mt-4 md:mt-0 border border-blue-100">
              <p className="text-2xl leading-relaxed mb-4">"Fastest MVP turnaround we've had. The Compose UI is butter smooth and the WebSockets handle live data flawlessly."</p>
              <p className="text-xl font-bold text-gray-600">- Technical Lead</p>
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION (With Coffee Doodle) */}
        <section id="contact" className="pt-10 pb-20 scroll-mt-24 flex flex-col items-center text-center relative">
          
          {/* Coffee Cup Doodle */}
          <svg className="absolute -top-4 right-10 md:right-40 w-16 h-16 text-gray-400 pointer-events-none transform rotate-12 hidden md:block" viewBox="0 0 100 100">
            <path d="M 20 30 L 70 30 L 65 70 C 65 80 25 80 25 70 Z M 70 40 C 85 40 85 60 70 60 M 35 15 C 35 5 45 25 45 15 M 55 15 C 55 5 65 25 65 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <h2 className="text-5xl font-bold mb-6 transform -rotate-2">Let's build something.</h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-xl">
            Currently taking on new projects. If you need robust architecture and zero bloat, drop me a line.
          </p>
          <a href="mailto:your.email@gmail.com" className="relative group inline-block cursor-pointer">
            <div className="absolute inset-0 bg-black transform rotate-2 group-hover:rotate-0 transition-transform"></div>
            <div className="relative bg-white border-2 border-black px-8 py-3 text-3xl font-bold transform -rotate-1 group-hover:rotate-0 transition-transform flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 100 100">
                <path d="M 10 60 L 90 20 L 60 90 L 50 65 Z M 90 20 L 50 65 M 40 60 L 50 65 L 45 85 Z" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Say Hello
            </div>
          </a>
        </section>

      </main>
    </div>
  );
}