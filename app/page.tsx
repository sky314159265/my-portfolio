"use client";

import React, { useState, useEffect } from 'react';
import { Caveat } from 'next/font/google';

const penFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// --- REUSABLE SVG COMPONENTS ---
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

// ==========================================
// --- ADVANCED PIPELINE SUB-COMPONENTS ---
// ==========================================

const DrawboardStep = () => (
  <div className="w-full h-full bg-[#0f172a] relative flex flex-col items-center justify-center overflow-hidden font-mono shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
    
    {/* Blueprint Grid Background */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <h3 className="absolute top-4 left-4 text-emerald-400 text-xs md:text-sm font-bold tracking-widest z-20 animate-pulse">
      SYSTEM_ARCHITECTURE_MAP
    </h3>
    
    <div className="relative w-full h-full flex items-center justify-center p-2 z-10">
      <svg className="w-full h-full md:w-[90%] md:h-[90%] text-slate-300" viewBox="0 0 400 250">
        
        {/* Animated Data Streams */}
        <path className="animate-[dashMove_1s_linear_infinite]" style={{animationDelay: '3s', opacity: 0, animationFillMode: 'forwards'}} d="M 70 125 L 130 125" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
        <path className="animate-[dashMove_1s_linear_infinite]" style={{animationDelay: '4.5s', opacity: 0, animationFillMode: 'forwards'}} d="M 170 105 L 230 65" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
        <path className="animate-[dashMove_1s_linear_infinite]" style={{animationDelay: '5s', opacity: 0, animationFillMode: 'forwards'}} d="M 170 145 L 230 185" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
        <path className="animate-[dashMove_1s_linear_infinite]" style={{animationDelay: '6.5s', opacity: 0, animationFillMode: 'forwards'}} d="M 270 185 L 330 125" stroke="#eab308" strokeWidth="2" strokeDasharray="4 4" fill="none"/>

        {/* NODE 1: CLIENT */}
        <rect className="live-draw" style={{animationDelay: '0.5s'}} pathLength="100" x="20" y="100" width="50" height="50" rx="8" stroke="currentColor" strokeWidth="3" fill="#1e293b"/>
        <text x="45" y="130" className="text-[10px] fill-white opacity-0" style={{animation: 'fadeInText 0.5s forwards 1s'}} textAnchor="middle">APP</text>

        {/* CONNECTION 1 */}
        <path className="live-draw" style={{animationDelay: '1.5s'}} pathLength="100" d="M 70 125 L 130 125" stroke="currentColor" strokeWidth="3" fill="none"/>

        {/* NODE 2: API GATEWAY */}
        <path className="live-draw" style={{animationDelay: '2s'}} pathLength="100" d="M 150 95 L 170 125 L 150 155 L 130 125 Z" stroke="#3b82f6" strokeWidth="3" fill="#1e293b"/>
        <text x="150" y="170" className="text-[8px] fill-blue-400 opacity-0" style={{animation: 'fadeInText 0.5s forwards 2.5s'}} textAnchor="middle">API_GATEWAY</text>

        {/* CONNECTIONS OUT OF GATEWAY */}
        <path className="live-draw" style={{animationDelay: '3s'}} pathLength="100" d="M 170 105 L 230 65" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path className="live-draw" style={{animationDelay: '3.5s'}} pathLength="100" d="M 170 145 L 230 185" stroke="currentColor" strokeWidth="3" fill="none"/>

        {/* NODE 3: AUTH SERVICE */}
        <rect className="live-draw" style={{animationDelay: '4s'}} pathLength="100" x="230" y="40" width="60" height="40" rx="4" stroke="#10b981" strokeWidth="3" fill="#1e293b"/>
        <text x="260" y="63" className="text-[10px] fill-emerald-400 opacity-0" style={{animation: 'fadeInText 0.5s forwards 4.5s'}} textAnchor="middle">AUTH</text>

        {/* NODE 4: WEBSOCKETS */}
        <rect className="live-draw" style={{animationDelay: '4.5s'}} pathLength="100" x="230" y="165" width="60" height="40" rx="4" stroke="#ef4444" strokeWidth="3" fill="#1e293b"/>
        <text x="260" y="188" className="text-[10px] fill-red-400 opacity-0" style={{animation: 'fadeInText 0.5s forwards 5s'}} textAnchor="middle">WSS_NODE</text>

        {/* CONNECTION TO DB */}
        <path className="live-draw" style={{animationDelay: '5.5s'}} pathLength="100" d="M 290 185 L 330 125" stroke="currentColor" strokeWidth="3" fill="none"/>

        {/* NODE 5: REDIS / DB */}
        <ellipse className="live-draw" style={{animationDelay: '6s'}} pathLength="100" cx="350" cy="95" rx="25" ry="10" stroke="#eab308" strokeWidth="3" fill="#1e293b"/>
        <path className="live-draw" style={{animationDelay: '6.5s'}} pathLength="100" d="M 325 95 L 325 145 A 25 10 0 0 0 375 145 L 375 95" stroke="#eab308" strokeWidth="3" fill="none"/>
        <text x="350" y="130" className="text-[10px] fill-yellow-400 opacity-0" style={{animation: 'fadeInText 0.5s forwards 7s'}} textAnchor="middle">REDIS</text>

      </svg>
    </div>
  </div>
);

const CodingStep = () => {
  // BUG FIX: Changed JSX.Element[] to React.ReactNode[]
  const [codeLines, setCodeLines] = useState<React.ReactNode[]>([]);
  
  const rawCode = [
    { text: "import", color: "text-purple-400" }, { text: " { WebSocketServer } ", color: "text-gray-300" }, { text: "from", color: "text-purple-400" }, { text: " 'ws';\n\n", color: "text-green-300" },
    { text: "const", color: "text-purple-400" }, { text: " wss ", color: "text-blue-300" }, { text: "= new", color: "text-purple-400" }, { text: " WebSocketServer({ port: ", color: "text-gray-300" }, { text: "8080", color: "text-orange-400" }, { text: " });\n\n", color: "text-gray-300" },
    { text: "wss.", color: "text-gray-300" }, { text: "on", color: "text-yellow-200" }, { text: "(", color: "text-gray-300" }, { text: "'connection'", color: "text-green-300" }, { text: ", (ws) => {\n", color: "text-gray-300" },
    { text: "  console.", color: "text-gray-300" }, { text: "log", color: "text-yellow-200" }, { text: "(", color: "text-gray-300" }, { text: "'Client connected, bridging stream...'", color: "text-green-300" }, { text: ");\n\n", color: "text-gray-300" },
    { text: "  ws.", color: "text-gray-300" }, { text: "on", color: "text-yellow-200" }, { text: "(", color: "text-gray-300" }, { text: "'message'", color: "text-green-300" }, { text: ", async (data) => {\n", color: "text-gray-300" },
    { text: "    try {\n", color: "text-purple-400" },
    { text: "      const", color: "text-purple-400" }, { text: " payload ", color: "text-blue-300" }, { text: "= ", color: "text-gray-300" }, { text: "JSON.", color: "text-blue-200" }, { text: "parse", color: "text-yellow-200" }, { text: "(data);\n", color: "text-gray-300" },
    { text: "      await", color: "text-purple-400" }, { text: " db.", color: "text-gray-300" }, { text: "execute", color: "text-yellow-200" }, { text: "(payload);\n", color: "text-gray-300" },
    { text: "    } catch (err) {\n", color: "text-purple-400" },
    { text: "      ws.", color: "text-gray-300" }, { text: "send", color: "text-yellow-200" }, { text: "(", color: "text-gray-300" }, { text: "'Error: Invalid layout'", color: "text-red-400" }, { text: ");\n", color: "text-gray-300" },
    { text: "    }\n  });\n});\n", color: "text-gray-300" }
  ];

  useEffect(() => {
    // BUG FIX: Changed JSX.Element[] to React.ReactNode[]
    let currentLines: React.ReactNode[] = [];
    let chunkIndex = 0;
    
    const typeChunk = () => {
      if (chunkIndex >= rawCode.length) return;
      const chunk = rawCode[chunkIndex];
      
      currentLines.push(<span key={chunkIndex} className={chunk.color}>{chunk.text}</span>);
      setCodeLines([...currentLines]);
      
      chunkIndex++;
      const nextDelay = Math.random() * 120 + 30; 
      setTimeout(typeChunk, nextDelay);
    };
    
    setTimeout(typeChunk, 500);
  }, []);

  return (
    <div className="w-full h-full bg-[#1e1e1e] font-mono text-xs md:text-sm text-left flex flex-col shadow-inner">
      <div className="w-full bg-[#2d2d2d] flex items-center border-b border-black">
        <div className="px-4 py-1 bg-[#1e1e1e] text-gray-300 border-t-2 border-blue-500 text-[10px] flex items-center gap-2">
          <span className="text-blue-400 font-bold">TS</span> server.ts
        </div>
      </div>
      <div className="flex-1 p-3 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-end py-3 pr-2 text-[#666] select-none">
          {Array.from({length: 12}).map((_, i) => <div key={i}>{i+1}</div>)}
        </div>
        <div className="ml-8 whitespace-pre-wrap leading-tight break-all">
          {codeLines}
          <span className="animate-pulse bg-gray-400 w-2 h-3 inline-block ml-1 align-middle"></span>
        </div>
      </div>
    </div>
  )
};

const DebugStep = () => {
  // BUG FIX: Changed JSX.Element[] to React.ReactNode[]
  const [logs, setLogs] = useState<React.ReactNode[]>([]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timeline = [
      { t: 300, elem: <span><span className="text-emerald-400">~/app</span> ➜ git add . && git commit -m "feat: init websocket bridge"</span> },
      { t: 1500, elem: <span><span className="text-emerald-400">~/app</span> ➜ git push origin main</span> },
      { t: 2500, elem: <span className="text-gray-500">... GitHub Actions CI/CD Triggered ...</span> },
      { t: 3500, elem: <span className="text-gray-500">... Running integration tests (142/142) ...</span> },
      { t: 4500, elem: <span className="text-red-500 font-bold bg-red-950/50 p-1 w-full block">✖ FATAL: Race condition detected in WS stream. Process exited with code 1.</span> },
      { t: 4700, action: () => setIsGlitching(true) }, 
      { t: 5500, action: () => setIsGlitching(false) },
      { t: 6000, elem: <span><span className="text-emerald-400">~/app</span> ➜ git checkout -b hotfix/ws-race</span> },
      { t: 7500, elem: <span><span className="text-emerald-400">~/app</span> ➜ git commit -am "hotfix: implement mutex lock"</span> },
      { t: 8500, elem: <span><span className="text-emerald-400">~/app</span> ➜ git push --force origin hotfix/ws-race</span> },
      { t: 10000, elem: <span className="text-blue-400 font-bold block mt-2 text-sm md:text-base border-t border-dashed border-blue-800 pt-2">✨ SUCCESS: CI passed. Merged to main. Ready for deployment.</span> },
    ];

    const timeouts = timeline.map(({ t, elem, action }) => 
      setTimeout(() => {
        if (action) action();
        if (elem) setLogs(prev => [...prev, elem]);
      }, t)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className={`w-full h-full bg-gray-950 p-4 font-mono text-[10px] md:text-xs text-gray-300 text-left flex flex-col overflow-hidden relative ${isGlitching ? 'animate-[glitchShake_0.2s_infinite]' : ''}`}>
      <div className={`absolute inset-0 bg-red-500/20 pointer-events-none transition-opacity duration-75 ${isGlitching ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {logs.map((log, i) => (
        <div key={i} className="mb-1">{log}</div>
      ))}
      <div className="mt-2 flex items-center">
        <span className="text-emerald-400 mr-2">~/app ➜</span> <span className="animate-pulse w-2 h-4 bg-gray-400 inline-block"></span>
      </div>
    </div>
  )
};

const DeployStep = () => (
  <div className="w-full h-full bg-[#0f172a] relative flex flex-col items-center justify-center overflow-hidden border-[12px] border-[#0f172a]">
    <div className="absolute top-6 text-white font-sans text-xl md:text-2xl font-black z-20 animate-[pulse_2s_infinite] tracking-[0.3em]">
      DEPLOYING...
    </div>
    
    <svg className="w-full h-full text-white z-10" viewBox="0 0 200 200">
      <g style={{ animation: 'rocketLaunch 7s ease-in forwards' }}>
        <path className="live-draw" style={{animationDuration: '2s'}} pathLength="100" d="M 100 40 C 120 70 120 120 120 140 L 80 140 C 80 120 80 70 100 40 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="live-draw" style={{animationDelay: '1s', animationDuration: '1s'}} pathLength="100" d="M 80 120 L 50 150 L 80 140 M 120 120 L 150 150 L 120 140" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle className="live-draw" style={{animationDelay: '1.5s', animationDuration: '0.5s'}} pathLength="100" cx="100" cy="90" r="12" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path className="live-draw text-orange-500 origin-top animate-[flameFlicker_0.1s_infinite]" style={{animationDelay: '2.5s', animationDuration: '0.5s'}} pathLength="100" d="M 85 140 L 85 170 L 100 190 L 115 170 L 115 140" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <path className="opacity-0 text-gray-500 animate-[fadeInOut_4s_ease-in-out_3.5s_forwards]" d="M 70 180 Q 50 160 30 190 Q 60 210 90 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path className="opacity-0 text-gray-500 animate-[fadeInOut_4s_ease-in-out_3.8s_forwards]" d="M 130 180 Q 150 160 170 190 Q 140 210 110 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"/>
    </svg>
  </div>
);

// ==========================================
// --- MAIN PORTFOLIO COMPONENT ---
// ==========================================

export default function NotebookPortfolio() {
  const [buildStep, setBuildStep] = useState(1);
  const [loopKey, setLoopKey] = useState(0); 

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (buildStep === 1) timer = setTimeout(() => setBuildStep(2), 10000); 
    else if (buildStep === 2) timer = setTimeout(() => setBuildStep(3), 7000);  
    else if (buildStep === 3) timer = setTimeout(() => setBuildStep(4), 11000); 
    else if (buildStep === 4) timer = setTimeout(() => {
      setBuildStep(1);
      setLoopKey(prev => prev + 1); 
    }, 7000); 
    return () => clearTimeout(timer);
  }, [buildStep]);

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
        .live-draw { stroke-dasharray: 100; stroke-dashoffset: 100; animation: drawPath 1s ease-out forwards; }
        @keyframes drawPath { to { stroke-dashoffset: 0; } }
        html { scroll-behavior: smooth; }
        
        @keyframes fadeInText { to { opacity: 1; } }
        @keyframes dashMove { to { stroke-dashoffset: -20; opacity: 1; } }
        @keyframes glitchShake {
          0% { transform: translate(1px, 1px) rotate(0deg); filter: hue-rotate(90deg); }
          20% { transform: translate(-2px, 0px) rotate(-1deg); }
          40% { transform: translate(2px, -1px) rotate(1deg); }
          60% { transform: translate(-1px, 2px) rotate(0deg); }
          80% { transform: translate(2px, -2px) rotate(1deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes flameFlicker { 0% { transform: scaleY(1); } 50% { transform: scaleY(1.2); } 100% { transform: scaleY(1); } }
        @keyframes fadeInOut { 0% { opacity: 0; transform: scale(0.8); } 20% { opacity: 1; transform: scale(1.1); } 100% { opacity: 0; transform: scale(1.5); } }
        @keyframes rocketLaunch {
          0% { transform: translateY(0); }
          40% { transform: translateY(0); }
          45% { transform: translateY(5px); } 
          50% { transform: translateY(-2px); } 
          55% { transform: translateY(5px); }
          60% { transform: translateY(-5px); }
          100% { transform: translateY(-600px); } 
        }
        @keyframes crtScanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}} />

      {/* --- RANDOM BACKGROUND DOODLES --- */}
      <svg className="absolute top-24 right-4 md:right-32 w-24 h-24 text-gray-300 pointer-events-none transform rotate-12" viewBox="0 0 100 100">
        <path d="M 20 50 C 20 20 80 20 80 50 C 80 80 40 80 40 60 C 40 40 60 40 60 55 C 60 70 50 70 50 65" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      <svg className="absolute top-[35%] left-2 md:left-12 w-16 h-16 text-gray-300 pointer-events-none transform -rotate-12" viewBox="0 0 100 100">
        <path d="M 10 30 Q 30 10 50 30 T 90 30 M 15 50 Q 40 30 60 50 T 85 50 M 20 70 Q 50 50 70 70" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      <svg className="absolute top-[65%] right-10 w-16 h-16 text-yellow-400/60 pointer-events-none" viewBox="0 0 100 100">
        <path d="M 50 10 L 55 45 L 90 50 L 55 55 L 50 90 L 45 55 L 10 50 L 45 45 Z" fill="currentColor"/>
        <path d="M 20 20 L 25 35 L 40 40 L 25 45 L 20 60 L 15 45 L 0 40 L 15 35 Z" fill="currentColor" transform="scale(0.5) translate(120, -50)"/>
      </svg>

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
            
            <p className="text-2xl md:text-[1.65rem] text-gray-800 leading-[1.6] mt-6">
              I architect and build high-performance, scalable software from the ground up. I bridge the gap between complex backend logic and seamless frontend user experiences, delivering MVPs that are production-ready on day one.
            </p>

            <div className="mt-8 relative">
              <h3 className="text-xl font-bold text-gray-500 transform -rotate-1 mb-3">My Stack:</h3>
              <div className="flex flex-wrap gap-3">
                {['Kotlin / Compose', 'Server Integration', 'WebSockets', 'Prompt Engineering', 'Next.js', 'Node.js', 'Upstash Redis', 'Python RAG / AI'].map((skill, index) => (
                  <span key={skill} className={`px-4 py-1 border-2 border-gray-800 rounded-lg text-xl font-bold bg-white/50 shadow-sm transition-transform hover:-translate-y-1 ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}>
                    {skill}
                  </span>
                ))}
              </div>
              <svg className="absolute -right-8 bottom-0 w-12 h-12 text-red-500 pointer-events-none transform rotate-45 hidden md:block" viewBox="0 0 100 100">
                <path d="M 20 80 Q 50 20 90 20 M 70 10 L 90 20 L 80 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="w-full md:w-[45%] flex flex-col justify-center items-center relative">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="relative bg-white p-4 pb-12 border border-gray-200 shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] transform rotate-1 transition-transform hover:-rotate-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 transform -rotate-2 border border-yellow-300"></div>
              <div className="aspect-video bg-gray-900 rounded-sm mb-4 flex items-center justify-center text-white border-2 border-black overflow-hidden">
                <img src="/cnoize.png" alt="Cnoize Trading App Interface" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Cnoize Trading App</h3>
              <p className="text-xl text-gray-700 leading-tight">Kotlin/Jetpack Compose UI powered by real-time WebSockets and Upstash Redis.</p>
            </div>

            <div className="relative bg-white p-4 pb-12 border border-gray-200 shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] transform -rotate-2 transition-transform hover:rotate-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 transform rotate-3 border border-yellow-300"></div>
              <div className="aspect-video bg-blue-900 rounded-sm mb-4 flex items-center justify-center text-white border-2 border-black">
                <span className="font-mono text-xs md:text-sm opacity-50">AI_RAG_PIPELINE_SYS</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Agentic Workflow</h3>
              <p className="text-xl text-gray-700 leading-tight">Zero-hallucination data extraction tool using custom Python LLM orchestration.</p>
            </div>

            <div className="relative bg-white p-4 pb-12 border border-gray-200 shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] transform rotate-2 transition-transform hover:-rotate-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-red-200/80 transform -rotate-1 border border-red-300"></div>
              <div className="aspect-video bg-emerald-900 rounded-sm mb-4 flex items-center justify-center text-white border-2 border-black">
                <span className="font-mono text-xs md:text-sm opacity-50">REACT_NATIVE_STOREFRONT</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Mobile Storefront</h3>
              <p className="text-xl text-gray-700 leading-tight">Cross-platform e-commerce app built in a React Native environment. Optimized for scalability.</p>
            </div>
          </div>
        </section>

        {/* 4. THE RETRO COMPUTER PIPELINE SECTION */}
        <section className="pt-16 pb-10 relative">
          <div className="relative inline-block mb-10">
            <h2 className="text-4xl font-bold transform -rotate-1">How it gets built</h2>
            <CyanSquiggle className="-bottom-2" delay="0s" />
          </div>

          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Monitor Body */}
            <div className="w-full bg-[#e2e8f0] border-4 border-black rounded-[2rem] p-4 md:p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative z-10">
              
              {/* Screen Bezel */}
              <div className="w-full aspect-[1.1/1] md:aspect-[1.8/1] bg-[#cbd5e1] border-4 border-black rounded-2xl p-3 md:p-5 shadow-inner relative">
                
                {/* Glass Screen */}
                <div className="w-full h-full bg-gray-950 border-4 border-black rounded-xl overflow-hidden relative shadow-[inset_0_0_30px_rgba(0,0,0,1)] flex items-center justify-center">
                  
                  {/* Key forces remount/re-animation of components */}
                  <React.Fragment key={loopKey}>
                    {buildStep === 1 && <DrawboardStep />}
                    {buildStep === 2 && <CodingStep />}
                    {buildStep === 3 && <DebugStep />}
                    {buildStep === 4 && <DeployStep />}
                  </React.Fragment>

                  {/* Retro CRT Scanline Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10%] opacity-50 animate-[crtScanline_6s_linear_infinite]"></div>
                </div>
              </div>
              
              {/* Monitor Dashboard */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-2 gap-4">
                <div className="flex gap-2 md:gap-4 items-center">
                   <div className={`px-2 md:px-3 py-1 rounded font-mono text-[10px] md:text-xs font-bold transition-colors ${buildStep === 1 ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>1.ARCH</div>
                   <div className={`px-2 md:px-3 py-1 rounded font-mono text-[10px] md:text-xs font-bold transition-colors ${buildStep === 2 ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>2.CODE</div>
                   <div className={`px-2 md:px-3 py-1 rounded font-mono text-[10px] md:text-xs font-bold transition-colors ${buildStep === 3 ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>3.CI/CD</div>
                   <div className={`px-2 md:px-3 py-1 rounded font-mono text-[10px] md:text-xs font-bold transition-colors ${buildStep === 4 ? 'bg-emerald-600 text-white' : 'text-gray-500'}`}>4.DEPLOY</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-xs font-bold font-mono text-gray-400 hidden md:block">SYS_V.2.1</div>
                  <div className={`w-4 h-4 rounded-full border-2 border-black transition-colors ${buildStep === 3 ? 'bg-red-500 animate-none shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]'}`}></div>
                </div>
              </div>
            </div>

            {/* Stand Base */}
            <div className="w-24 md:w-32 h-8 md:h-12 bg-[#cbd5e1] border-x-4 border-black relative z-0 -mt-2"></div>
            <div className="w-48 md:w-64 h-6 bg-[#94a3b8] border-4 border-black rounded-t-xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative z-0"></div>
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

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="pt-10 pb-20 scroll-mt-24 flex flex-col items-center text-center relative">
          <svg className="absolute -top-4 right-10 md:right-40 w-16 h-16 text-gray-400 pointer-events-none transform rotate-12 hidden md:block" viewBox="0 0 100 100">
            <path d="M 20 30 L 70 30 L 65 70 C 65 80 25 80 25 70 Z M 70 40 C 85 40 85 60 70 60 M 35 15 C 35 5 45 25 45 15 M 55 15 C 55 5 65 25 65 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <h2 className="text-5xl font-bold mb-6 transform -rotate-2">Let's build something.</h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-xl">
            Currently taking on new projects. If you need robust architecture and zero bloat, drop me a line.
          </p>
          <a href="mailto:theskylensteam@gmail.com" className="relative group inline-block cursor-pointer">
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