"use client";

import Link from "next/link";
import { ShieldAlert, Award, Shield, CheckCircle, ArrowRight, Phone, Calendar } from "lucide-react";

export default function OperatorRental() {
  const operatorFeatures = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "IPAF Approved Operators",
      description: "Every operator in our pool holds active IPAF credentials, ensuring safe operation of manlifts, boomlifts, and scissor lifts.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Dubai Municipality Certified",
      description: "Our operators hold official certifications compliant with local regulatory authorities and general site safety guidelines in the UAE.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Full Equipment Proficiency",
      description: "Experienced in handling heavy mobile cranes, hiabs, telehandlers, manlifts, and standard commercial utility trucks.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      title: "Zero-Incident Safety Record",
      description: "We enforce strict safety protocols and refresher courses to maintain safe working records on all project sites.",
    },
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Operator Rental</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-tight">
              Certified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Operator Rental
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-sans">
              Need an operator with full safety certification? We provide IPAF approved machine operators at reasonable rates! Secure a skilled, licensed operator for your lifting, haulage, or access machinery.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient gold/red background circle */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-[80px] animate-pulse-glow"></div>
            
            {/* Main Hero Image with Premium border-glow container */}
            <div className="relative border border-surface-border bg-gradient-to-b from-surface-card to-bg-dark rounded-3xl p-4 shadow-2xl w-full group overflow-hidden flex items-center justify-center aspect-square max-w-md">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
              <img
                src="/operator-rental-hero.png"
                alt="Al Taef Certified Operator"
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-[1.03] transition-transform duration-700 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {operatorFeatures.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 group flex items-start gap-6 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                {feat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-white">
                  {feat.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feat.description}
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
              <Award className="w-7 h-7" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Get A Free Expert Advice <br />For Your Job
            </h2>
            
            <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
              Ensure safety compliance on your worksite today. Contact us to hire an operator or schedule a detailed machinery walk-through.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:Info@dhllifting.com?subject=Operator Rental Inquiry"
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2.5 shadow-lg shadow-primary/20 animate-pulse-glow"
              >
                Book an Operator!!!
                <Calendar className="w-4 h-4" />
              </a>

              <a
                href="mailto:Info@dhllifting.com?subject=Expert Job Advice Request"
                className="border border-surface-border hover:border-primary/40 bg-surface-card hover:bg-surface-card-hover text-white px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2.5"
              >
                Get Free Advice
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+97143200389"
                className="border border-surface-border hover:border-primary/40 bg-surface-card hover:bg-surface-card-hover text-white px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-primary" />
                +971 43200389
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
