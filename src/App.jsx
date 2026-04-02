import React, { useState, useEffect } from 'react';
import { ArrowRight, Box, Terminal, Layers, Globe, Mail, MapPin, ChevronRight, Activity, Command, Cpu } from 'lucide-react';

const AccardiTech = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logs, setLogs] = useState([
    "INITIALIZING_CORE_ENGINE...",
    "SCANNING_INBOUND_SIGNALS",
    "APPLYING_SCORING_LOGIC",
    "ROUTING_TO_PARTNER_NODE_A",
    "VERIFYING_DATA_INTEGRITY",
    "OPTIMIZING_RESPONSE_LATENCY"
  ]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev];
        const first = newLogs.shift();
        newLogs.push(first);
        return newLogs;
      });
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] font-sans selection:bg-black selection:text-white leading-relaxed overflow-x-hidden">
      {/* Background Texture/Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }} />

      {/* Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-[#F9F9F7]/80 backdrop-blur-xl py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="h-4 w-4 bg-[#1A1A1A] transition-all duration-700 group-hover:rotate-[180deg] group-hover:rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] antialiased">Accardi Tech</span>
          </div>
          <nav className="hidden gap-12 text-[9px] font-bold uppercase tracking-[0.25em] text-black/30 md:flex">
            <a href="#systems" className="hover:text-black transition-colors relative group">
              Systems
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </a>
            <a href="#method" className="hover:text-black transition-colors relative group">
              Method
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </a>
            <a href="#infrastructure" className="hover:text-black transition-colors relative group">
              Infrastructure
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </a>
          </nav>
          <a 
            href="mailto:hello@accarditech.com" 
            className="text-[9px] font-bold uppercase tracking-[0.25em] border border-black/10 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all"
          >
            Inquire
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col justify-center pt-32 pb-16 px-6">
          <div className="mx-auto max-w-6xl w-full">
            <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">
              <span className="flex h-1.5 w-1.5 items-center justify-center">
                <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-black/20" />
                <span className="h-1 w-1 rounded-full bg-black/60" />
              </span>
              Operational Systems Studio / Washington D.C.
            </div>
            
            <h1 className="max-w-5xl text-7xl font-light leading-[0.95] tracking-[-0.06em] sm:text-9xl lg:text-[10rem]">
              Precision <br />
              <span className="italic text-black/20 font-serif tracking-tight pr-4">Intake</span> Architecture.
            </h1>
            
            <div className="mt-20 grid gap-16 md:grid-cols-2 lg:mt-32">
              <p className="text-xl leading-relaxed text-black/50 sm:text-2xl font-light tracking-tight max-w-lg">
                We design and deploy the critical software infrastructure that high-stakes firms use to scale without operational collapse.
              </p>
              <div className="flex flex-col justify-end items-start md:items-end">
                <div className="text-[9px] leading-loose text-black/30 max-w-[200px] uppercase tracking-[0.3em] font-black border-l md:border-l-0 md:border-r border-black/10 pl-4 md:pl-0 md:pr-4">
                  Deploying control where performance is won or lost.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Thesis */}
        <section id="systems" className="border-t border-black/5 bg-white py-40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-20 lg:grid-cols-12">
              <div className="lg:col-span-1 text-[9px] font-bold uppercase tracking-[0.4em] text-black/20 [writing-mode:vertical-lr] hidden lg:block">
                The Thesis
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-7xl">
                  Software is a tool. <br />Systems are the <span className="text-black/20 italic font-serif">strategy.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 space-y-10 text-lg text-black/60 font-light leading-relaxed">
                <p>
                  Most firms attempt to solve growth pains by stacking disparate tools. We solve them by designing a singular, unified logic. We operate at the intersection of process engineering and custom software.
                </p>
                <p>
                  Our work ensures that intake is instantaneous, follow-up is obsessive, and every data point is leveraged for visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="infrastructure" className="border-t border-black/5 py-40 bg-[#F9F9F7]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-24 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20">Capabilities</div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Intake Logic",
                  desc: "Implementation of custom routing and scoring engines that eliminate manual triage and human error.",
                  icon: <Command size={18} />
                },
                {
                  title: "Real-time Visibility",
                  desc: "Development of proprietary dashboards that expose latent revenue and operational bottlenecks instantly.",
                  icon: <Activity size={18} />
                },
                {
                  title: "System Discipline",
                  desc: "Designing the automated follow-up infrastructure that ensures high-trust clients never experience silence.",
                  icon: <Cpu size={18} />
                }
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-12 transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                  <div className="mb-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.03] text-black/30 transition-all group-hover:bg-black group-hover:text-white group-hover:rotate-[360deg] duration-700">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-black/40 font-light">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black scale-x-0 transition-transform origin-left group-hover:scale-x-100 duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Method */}
        <section id="method" className="border-t border-black/5 bg-white py-40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-black/20">
                  The Method
                </div>
                <h2 className="text-5xl font-medium tracking-[-0.03em] sm:text-7xl">Hands-on architecture.</h2>
                <p className="mt-10 text-xl text-black/50 font-light leading-relaxed max-w-lg">
                  We don't sell licenses; we sell outcomes. We embed within your firm's existing workflow to build and refine the system until the friction is gone.
                </p>
                <div className="mt-16 space-y-8">
                  {[
                    "Workflow Mapping & Audit",
                    "Custom Component Build",
                    "Data Structure Integration",
                    "Continuous Optimization"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-black/60 group cursor-default">
                      <span className="text-black/10 group-hover:text-black transition-colors duration-500">0{i+1}</span>
                      <div className="h-px w-12 bg-black/5 group-hover:w-20 group-hover:bg-black transition-all duration-500" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[4rem] bg-[#1A1A1A] border border-white/5 p-12">
                <div className="h-full w-full flex flex-col font-mono text-[10px] leading-relaxed tracking-wider text-white/20 uppercase">
                  <div className="flex-1 overflow-hidden">
                    {logs.map((log, i) => (
                      <div key={i} className={`mb-2 flex items-center gap-3 transition-opacity duration-1000 ${i === 0 ? 'text-white opacity-100' : 'opacity-40'}`}>
                        <span className="text-white/10">[{new Date().toLocaleTimeString('en-GB', { hour12: false })}]</span>
                        <span className="flex-1">{log}</span>
                        {i === 0 && <span className="h-1 w-1 rounded-full bg-white animate-pulse" />}
                      </div>
                    ))}
                    <div className="mt-6 border-t border-white/5 pt-6 space-y-4">
                      <div className="flex justify-between">
                        <span>LOAD_FACTOR</span>
                        <span className="text-white">0.42</span>
                      </div>
                      <div className="flex justify-between">
                        <span>NODE_HEALTH</span>
                        <span className="text-emerald-400 font-bold">STABLE</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ACTIVE_PROCESS</span>
                        <span className="text-white italic">INTAKE_REFINEMENT_04</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 right-12 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30">System Live</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="border-t border-black/5 bg-[#1A1A1A] pt-40 pb-16 text-white overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
          
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-6xl font-light tracking-tighter sm:text-9xl italic font-serif text-white/90">Inquire.</h2>
              <p className="mt-10 max-w-md text-lg text-white/30 font-light tracking-tight">
                For professional service firms ready to move beyond fragmented software.
              </p>
              
              <div className="mt-20 flex flex-col items-center gap-16">
                <a 
                  href="mailto:hello@accarditech.com" 
                  className="group relative inline-flex items-center gap-8 rounded-full bg-white px-14 py-7 text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-[#F9F9F7] hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <Mail size={16} />
                  Access the Studio
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </a>
                
                <div className="flex flex-col items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
                  <div className="flex items-center gap-3">
                    <MapPin size={12} className="text-white/40" />
                    Washington, D.C.
                  </div>
                  <div className="h-px w-8 bg-white/10" />
                  <span>By Appointment Only</span>
                </div>
              </div>
            </div>

            <div className="mt-40 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-16 text-[9px] font-bold uppercase tracking-[0.5em] text-white/10 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-white/20 rounded-full" />
                <span>Accardi Tech Systems Studio</span>
              </div>
              <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AccardiTech;
