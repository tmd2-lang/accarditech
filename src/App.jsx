import React, { useState, useEffect } from 'react';
import { ArrowRight, Box, Terminal, Layers, Globe, Mail, MapPin, ChevronRight, Activity, Command, Cpu, X, Maximize2, Minimize2 } from 'lucide-react';
import { supabase } from './supabase';

const AccardiTech = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeLegal, setActiveLegal] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/privacy') return 'privacy';
      if (window.location.pathname === '/terms') return 'terms';
    }
    return null;
  });

  const [formData, setFormData] = useState({ fullName: '', firmName: '', email: '', challenge: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [formErrors, setFormErrors] = useState({});
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

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setIsFullScreen(false);
      setFormStatus('idle');
      setFormData({ fullName: '', firmName: '', email: '', challenge: '' });
      setFormErrors({});
    }, 500);
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormErrors({});

    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.firmName.trim()) errors.firmName = 'Firm / Company Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus('idle');
      return;
    }

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          full_name: formData.fullName,
          firm_name: formData.firmName,
          email: formData.email,
          challenge: formData.challenge
        }]);

      if (error) throw error;
      setFormStatus('success');
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

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
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="text-[9px] font-bold uppercase tracking-[0.25em] border border-black/10 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all"
          >
            Inquire
          </button>
        </div>
      </header>

      {window.location.pathname !== '/' && window.location.pathname !== '/privacy' && window.location.pathname !== '/terms' ? (
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-medium tracking-tight mb-4 sm:text-7xl">Nothing here.</h1>
          <p className="text-lg text-black/50 font-light mb-12 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/"
            className="text-[9px] font-bold uppercase tracking-[0.3em] border border-black/10 px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all"
          >
            BACK TO HOME
          </a>
        </main>
      ) : (
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col justify-center pt-32 pb-16 px-6">
          <div className="mx-auto max-w-6xl w-full">
            <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">
              <span className="flex h-1.5 w-1.5 items-center justify-center">
                <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-black/20" />
                <span className="h-1 w-1 rounded-full bg-black/60" />
              </span>
              OPERATIONAL SOFTWARE FIRM / WASHINGTON DC
            </div>
            
            <h1 className="max-w-5xl text-7xl font-light leading-[0.95] tracking-[-0.06em] sm:text-9xl lg:text-[10rem]">
              Software <br />
              <span className="italic text-black/20 font-serif tracking-tight pr-4">that runs</span> the firm.
            </h1>
            
            <div className="mt-20 grid gap-16 md:grid-cols-2 lg:mt-32">
              <p className="text-xl leading-relaxed text-black/50 sm:text-2xl font-light tracking-tight max-w-lg">
                We design and build operational software systems for firms that need more control over how work enters, moves through, and gets managed inside their business.
              </p>
              <div className="flex flex-col justify-end items-start md:items-end">
                <div className="text-[9px] leading-loose text-black/30 max-w-[200px] uppercase tracking-[0.3em] font-black border-l md:border-l-0 md:border-r border-black/10 pl-4 md:pl-0 md:pr-4">
                  Where operations become infrastructure.
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
                  Most firms try to fix operational problems by adding more tools. We fix them by designing one system with clear logic. Process engineering meets software.
                </p>
                <p>
                  Our work makes sure nothing falls through the cracks. Every lead, every task, every handoff has a clear owner, a clear status, and a clear next step.
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
                  title: "Inbound Systems",
                  desc: "Systems that capture, route, and qualify inbound work without manual sorting or missed follow-ups.",
                  icon: <Command size={18} />
                },
                {
                  title: "Real-time Visibility",
                  desc: "Dashboards that show where every lead stands, what needs attention, and where the pipeline is breaking.",
                  icon: <Activity size={18} />
                },
                {
                  title: "System Discipline",
                  desc: "Automated follow-up logic that makes sure no lead goes cold and no task gets dropped.",
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
                  We don't sell licenses. We learn how your firm operates, build the system around it, and refine it until it runs clean.
                </p>
                <div className="mt-16 space-y-8">
                  {[
                    "Operational Audit",
                    "System Design",
                    "Build & Integration",
                    "Ongoing Refinement"
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
                For law firms, financial services, consultancies, and agencies ready to move beyond fragmented software.
              </p>
              
              <div className="mt-20 flex flex-col items-center gap-16">
                <button 
                  onClick={() => setIsDrawerOpen(true)}
                  className="group relative inline-flex items-center gap-8 rounded-full bg-white px-14 py-7 text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-[#F9F9F7] hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <Mail size={16} />
                  ACCESS THE FIRM
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </button>
                
                <div className="flex flex-col items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
                  <div className="flex items-center gap-3">
                    <MapPin size={12} className="text-white/40" />
                    Washington, D.C.
                  </div>
                  <div className="h-px w-8 bg-white/10" />
                  <span>By Appointment Only</span>
                  <div className="flex items-center gap-1 mt-3">
                    <button onClick={() => setActiveLegal('privacy')} className="hover:text-white transition-colors">Privacy</button>
                    <span>/</span>
                    <button onClick={() => setActiveLegal('terms')} className="hover:text-white transition-colors">Terms</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-40 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-16 text-[9px] font-bold uppercase tracking-[0.5em] text-white/10 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-white/20 rounded-full" />
                <span>Accardi Tech</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
      )}

      {/* Inquire Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeDrawer}
        />
        
        {/* Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full bg-[#F9F9F7] shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isDrawerOpen ? 'translate-x-0' : 'translate-x-[100%]'} ${isFullScreen ? 'max-w-full' : 'max-w-md'}`}
        >
          <div className="flex items-center justify-between p-8 border-b border-black/5">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Inquire</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block text-black/40 hover:text-black"
                title={isFullScreen ? "Collapse" : "Expand"}
              >
                {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button 
                onClick={closeDrawer}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          
          <div className={`flex-1 overflow-y-auto p-8 ${formStatus === 'success' || formStatus === 'error' ? 'flex flex-col justify-center' : ''}`}>
            <div className="mx-auto w-full max-w-md transition-all duration-500">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-20 animate-in fade-in zoom-in duration-500">
                  <div className="h-16 w-16 bg-black text-white rounded-full flex items-center justify-center mb-4 shadow-2xl">
                    <Activity size={24} className="animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight">Inquiry received.</h3>
                  <p className="text-black/50 text-sm max-w-sm mt-4">We'll be in touch within 24 hours to ensure operational alignment before taking a consultation.</p>
                  <button onClick={closeDrawer} className="mt-8 text-[9px] font-bold uppercase tracking-[0.3em] bg-black text-white px-8 py-3 rounded-full hover:bg-black/80 transition-colors">
                    Close
                  </button>
                </div>
              ) : formStatus === 'error' ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-20 animate-in fade-in duration-300">
                  <h3 className="text-3xl font-medium tracking-tight text-red-600">Something went wrong.</h3>
                  <p className="text-black/50 text-sm max-w-sm mt-4">Please email us directly at contact@accarditech.com.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-[9px] font-bold uppercase tracking-[0.2em] border border-black/10 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors">Try Again</button>
                </div>
              ) : (
                <>
                  <div className="mb-12 animate-in fade-in duration-300">
                    <h2 className="text-3xl font-medium tracking-tight mb-4">Request Access</h2>
                    <p className="text-sm text-black/50 leading-relaxed">
                      Provide your details below. We typically review all incoming inquiries within 24 hours to ensure operational alignment before taking a consultation.
                    </p>
                  </div>
                  
                  <form className="space-y-8 animate-in fade-in duration-300" onSubmit={handleInquirySubmit} noValidate>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Full Name</label>
                    <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className={`w-full bg-transparent border-b ${formErrors.fullName ? 'border-red-500 text-red-600' : 'border-black/10 text-black'} py-3 text-sm focus:outline-none focus:border-black transition-colors`} placeholder="Jane Doe" />
                    {formErrors.fullName && <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Firm / Company Name</label>
                    <input type="text" value={formData.firmName} onChange={(e) => setFormData({...formData, firmName: e.target.value})} className={`w-full bg-transparent border-b ${formErrors.firmName ? 'border-red-500 text-red-600' : 'border-black/10 text-black'} py-3 text-sm focus:outline-none focus:border-black transition-colors`} placeholder="Accardi Law Group" />
                    {formErrors.firmName && <p className="text-xs text-red-500 mt-1">{formErrors.firmName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Email Address</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full bg-transparent border-b ${formErrors.email ? 'border-red-500 text-red-600' : 'border-black/10 text-black'} py-3 text-sm focus:outline-none focus:border-black transition-colors`} placeholder="jane@firm.com" />
                    {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Current Operational Challenge <span className="text-black/20 lowercase tracking-normal">(optional)</span></label>
                    <textarea 
                      value={formData.challenge} onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                      className="w-full bg-black/5 border border-transparent rounded-lg p-4 text-sm focus:outline-none focus:border-black/20 focus:bg-transparent transition-all min-h-[120px] resize-none" 
                      placeholder="Where is your firm experiencing the most friction? (e.g. Lead leakage, manual follow-ups, fragmented data)"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full text-white py-4 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] transition-all mt-8 flex justify-center items-center gap-3 ${formStatus === 'loading' ? 'bg-black/50 cursor-not-allowed' : 'bg-black hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98]'}`}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <div className="h-3 w-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        PROCESSING...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legal Overlay */}
      {activeLegal && (
        <div className="fixed inset-0 z-[110] bg-[#F9F9F7] overflow-y-auto">
          <div className="min-h-screen px-6 py-12 md:py-24 max-w-3xl mx-auto relative animate-in fade-in duration-300">
            <button 
              onClick={() => setActiveLegal(null)}
              className="absolute top-6 right-6 md:top-12 md:right-0 p-2 hover:bg-black/5 rounded-full transition-colors flex items-center justify-center"
            >
              <X size={20} />
            </button>
            
            <div className="text-black/70 font-light leading-relaxed">
              {activeLegal === 'privacy' && (
                <>
                  <h1 className="text-3xl font-medium tracking-tight text-black mb-2">Privacy Policy</h1>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-12">Last updated: April 5, 2026</p>
                  
                  <p className="mb-8 text-lg">Accardi Tech ("we," "us," "our") operates the website accarditech.com. This policy explains how we handle information collected through this site.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">What we collect</h2>
                  <p className="mb-8">When you submit an inquiry through our contact form, we collect your name, firm or company name, email address, and any information you provide in the message field. We also collect basic analytics data such as page views and referral sources through our analytics provider.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">How we use it</h2>
                  <p className="mb-8">We use the information you submit to respond to your inquiry, evaluate whether our services are a fit for your firm, and communicate with you about potential engagements. We use analytics data to understand how visitors interact with our site.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">What we don't do</h2>
                  <p className="mb-8">We do not sell, rent, or share your personal information with third parties. We do not send marketing emails unless you have explicitly requested them. We do not use your information for any purpose other than what is described above.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Where your data is stored</h2>
                  <p className="mb-8">Form submissions are stored securely using Supabase, a hosted database provider. Your data is protected using industry-standard encryption in transit and at rest.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Your rights</h2>
                  <p className="mb-8">You may request access to, correction of, or deletion of any personal information we hold about you at any time by contacting us at contact@accarditech.com.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Contact</h2>
                  <p className="mb-8">If you have questions about this policy, reach out to contact@accarditech.com.</p>
                </>
              )}
              
              {activeLegal === 'terms' && (
                <>
                  <h1 className="text-3xl font-medium tracking-tight text-black mb-2">Terms of Service</h1>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-12">Last updated: April 5, 2026</p>
                  
                  <p className="mb-8 text-lg">These terms govern your use of the Accardi Tech website at accarditech.com. By using this site, you agree to these terms.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">What this site is</h2>
                  <p className="mb-8">This website is an informational site for Accardi Tech, an operational software firm based in Washington, D.C. The site provides general information about our services and a way to contact us.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">What this site is not</h2>
                  <p className="mb-8">This site does not constitute an offer to provide services. Submitting an inquiry does not create a client relationship. Any engagement between Accardi Tech and a client will be governed by a separate agreement.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Intellectual property</h2>
                  <p className="mb-8">All content on this site, including text, design, code, and visual elements, is owned by Accardi Tech and may not be reproduced, distributed, or used without written permission.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Limitation of liability</h2>
                  <p className="mb-8">This site is provided as-is. Accardi Tech makes no warranties about the accuracy or completeness of the information on this site and is not liable for any damages arising from your use of it.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Third-party services</h2>
                  <p className="mb-8">This site uses third-party services including Supabase for data storage and Vercel for hosting. Your use of this site is also subject to those providers' terms and privacy policies.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Changes</h2>
                  <p className="mb-8">We may update these terms at any time. Continued use of the site after changes constitutes acceptance.</p>
                  
                  <h2 className="text-xl font-medium text-black mt-12 mb-4">Contact</h2>
                  <p className="mb-8">Questions about these terms can be directed to contact@accarditech.com.</p>
                </>
              )}
            </div>
            
            <div className="mt-20 pt-10 border-t border-black/10 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.5em] text-black/30">
              <span>Accardi Tech</span>
              <button onClick={() => setActiveLegal(null)} className="hover:text-black transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccardiTech;
