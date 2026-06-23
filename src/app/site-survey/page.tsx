"use client";

import Link from "next/link";
import { Ruler, Scale, Navigation, ArrowRight, ShieldCheck, Phone, ClipboardCheck } from "lucide-react";

export default function SiteSurvey() {
  const surveySteps = [
    {
      icon: <Ruler className="w-6 h-6 text-primary" />,
      title: "Working Height & Radius",
      description: "We determine the precise vertical elevation and horizontal reach required to position your loads safely without obstruction.",
    },
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Lifting Load Calculations",
      description: "Our experts compute exact weight limits, rigging configuration, and structural capacities with complete safety margins.",
    },
    {
      icon: <Navigation className="w-6 h-6 text-primary" />,
      title: "Transport Distance & Access",
      description: "We analyze site entry widths, route clearances, transport distances, and ground bearing pressure for all heavy machinery.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      title: "Ramp Angle & Terrain Analysis",
      description: "We measure ground slopes, check ramp angles for low-bed trailers, and assess ground conditions to guarantee maximum stability.",
    },
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Site Survey</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-tight">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Site Survey
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-sans">
              Our field experts can survey your site at a moment's notice and make professional judgments about what equipment you need. Our Surveyor can determine working height, lifting load, transport distance, ramp angle, and overall ground safety.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient gold/red background circle */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-[80px] animate-pulse-glow"></div>
            
            {/* Main Hero Image with Premium border-glow container */}
            <div className="relative border border-surface-border bg-gradient-to-b from-surface-card to-bg-dark rounded-3xl p-4 shadow-2xl w-full group overflow-hidden flex items-center justify-center aspect-square max-w-md">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
              <img
                src="/site-survey-hero.png"
                alt="Al Taef Site Survey"
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-[1.03] transition-transform duration-700 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* Key Metrics / Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {surveySteps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 group flex items-start gap-6 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-b from-surface-card to-bg-dark border border-surface-border rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Ambient overlay glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center text-primary mb-2">
              <ShieldCheck className="w-7 h-7" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Get A Free Expert Advice <br />For Your Job
            </h2>
            
            <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
              Ready to execute your lifting operations with 100% compliance? Request advice from our field surveyors or book a certified machine operator today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:Info@dhllifting.com?subject=Site Survey Request"
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2.5 shadow-lg shadow-primary/20"
              >
                Book Free Survey
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/operator-rental"
                className="border border-surface-border hover:border-primary/40 bg-surface-card hover:bg-surface-card-hover text-white px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2.5"
              >
                Book an Operator!!!
              </Link>

              <a
                href="tel:+97143200389"
                className="border border-surface-border hover:border-primary/40 bg-surface-card hover:bg-surface-card-hover text-white px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Hotline
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
