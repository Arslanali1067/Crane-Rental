"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  ArrowRight, 
  Star, 
  Quote, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  ArrowUp,
  MessageSquare,
  Building,
  HelpCircle
} from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      name: "Trucks",
      image: "/trucks.png",
      href: "/equipment",
    },
    {
      name: "Hiab Cranes",
      image: "/hiab.png",
      href: "/equipment",
    },
    {
      name: "Mobile Crane",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA17-FCXAPYeTpScYGKLMfBTPOzeCl5RF76G6APbCgezgD5_VkiWpQmeQksWnB4R1aP4JZHojdR79zIpxm6wZxXjkeZ3ET2RCoTwSvuvuCm27xbfyBbh4HnK0tix9SXc1QHiwfeNoT9RBk13EsbbsJWiSm2vkEAY2kRyYuepssz5-bCWdNdt5rx1gAYIlse9LAsuXG8nm0ywlllLV_PWezeR29kqj03knoGk1tYiiMpc8PfUa-weL9Uv4tVEdbWBX-lN9XKSF8z26zd",
      href: "/equipment",
    },
    {
      name: "Manlift",
      image: "/manlift.png",
      href: "/equipment",
    },
    {
      name: "Mini Excavator",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1jO6uZR0v_fqw92gyH9njbY1el1Bi8PmlwORC0VoYne88qx5PJtrThqWMCUmWu26VTGLlvrFxJ36UbQK5FIeahQZJtS-b9kAPTuGQ_zG7mAJyYRNwYF5KuVo-VXnJEXnumLbETe9-_uxdHitgw3nhUo0xUasQRHligxoFye9DBH6P93fv-sZHGZkT_k8lh4AY3rszD6Hh6memNEDJ1pyd5W9WnkXoSCsZd8p1huhoPiSE_-x8Wrc1hbHvCvDn4VTW13fgnv_KjqOa",
      href: "/equipment",
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "100% Certified Fleet",
      desc: "All equipment undergoes rigorous multi-point safety testing and carries third-party certifications.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "24/7 Technical Support",
      desc: "On-site engineers and mobile mechanics ready round the clock to ensure maximum uptime.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Flexible Rental Plans",
      desc: "Daily, weekly, or monthly customized access solutions designed to fit your project scope.",
    },
  ];

  const reviews = [
    {
      name: "Waseem Raza",
      time: "7 months ago",
      text: "One of the best equipment rental companies I have ever worked with, especially Mr. Farhan and Mr. Nabeel. Very cooperative, extremely professional. Highly recommended in the UAE.",
      rating: 5,
    },
    {
      name: "Henry Fernandes",
      time: "A year ago",
      text: "Excellent service and great team. I regularly rent scissor lifts from them. Their response time is exceptional; you can call them any time of the day and they get it sorted.",
      rating: 5,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 industrial-grid opacity-[0.15] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-12 pb-24 overflow-hidden bg-bg-dark">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlays to maintain content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40 z-10"></div>
        <div className="absolute inset-0 bg-bg-dark/30 backdrop-blur-[2px] z-10"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-surface-card/60 to-bg-dark/30 border border-surface-border rounded-3xl p-8 md:p-10 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-primary/5 border border-primary/20 px-4.5 py-2 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[11px] text-primary font-bold uppercase tracking-[0.25em]">
                  PREMIER RENTAL NETWORK UAE
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-[0.95]">
                Heavy Duty <br />
                <span className="text-primary drop-shadow-[0_0_20px_rgba(245,166,35,0.35)]">
                  Rental Fleet
                </span>
              </h1>

              <p className="text-sm text-text-secondary leading-relaxed">
                Al Taef is the ultimate destination for certified heavy machinery and specialized lifting access. Supporting infrastructure and civil engineering projects across the UAE since 2022.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-surface-card border border-surface-border rounded-xl p-3.5 hover:border-primary/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                    Sales Hotline
                  </p>
                  <a href="tel:+971556089117" className="text-sm font-extrabold text-white hover:text-primary transition-colors whitespace-nowrap">
                    +971 556089117
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card border border-surface-border rounded-xl p-3.5 hover:border-primary/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                    Support Hotline
                  </p>
                  <a href="tel:+971522606764" className="text-sm font-extrabold text-white hover:text-primary transition-colors whitespace-nowrap">
                    +971 522606764
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex w-full">
            {/* Ambient gold background circle */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-[80px] animate-pulse-glow"></div>
            
            {/* Main Hero Image with Premium border-glow container */}
            <div className="relative border border-surface-border bg-gradient-to-b from-surface-card to-bg-dark rounded-3xl p-4 shadow-2xl max-w-3xl w-full group overflow-hidden flex items-center justify-center h-full">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
              <img
                src="/hero-machinery.png"
                alt="Al Taef Heavy Crane Fleet"
                className="w-full h-auto max-h-[420px] object-contain transform group-hover:scale-[1.03] transition-transform duration-700 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="border-y border-surface-border bg-surface-dark/50 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feat, index) => (
              <div key={index} className="flex gap-4.5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center shadow-lg">
                  {feat.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Fleet (Categories) */}
      <section className="py-28 relative z-10" id="fleet">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs block mb-3">
                // CRANE & HEAVY VEHICLES
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
                Our Fleet Solutions
              </h2>
            </div>
            <Link
              href="/equipment"
              className="text-xs font-bold text-white hover:text-primary uppercase tracking-widest flex items-center gap-2 transition-colors group"
            >
              View Full Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="bg-surface-card hover:bg-surface-card-hover border border-surface-border rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 shadow-xl flex flex-col"
              >
                <div className="w-full h-56 bg-bg-dark relative overflow-hidden flex items-center justify-center border-b border-surface-border/50">
                  {/* Full box hover zoom */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 w-full flex justify-between items-center bg-surface-card">
                  <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                    {cat.name}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-dark border border-surface-border flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Partners */}
      <section className="bg-surface-dark/40 border-y border-surface-border py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold uppercase text-text-muted tracking-[0.25em] mb-10">
            Trusted by contracting and logistics companies in GCC
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {[
              { src: "/partner-1.png", alt: "Partner Logo 1" },
              { src: "/partner-2.png", alt: "Byrne Equipment Rental" },
              { src: "/partner-3.png", alt: "Al Laith" },
              { src: "/partner-4.png", alt: "Wallenius Wilhelmsen Solutions" },
              { src: "/partner-5.png", alt: "Hills & Fort" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="h-16 w-36 md:h-20 md:w-44 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-28 relative z-10" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
              What Clients Say
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Decorative quote icon */}
                <div className="absolute top-0 right-0 p-6 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <Quote className="w-24 h-24" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{rev.name}</h4>
                      <span className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">
                        {rev.time}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-text-secondary italic leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="flex gap-1 text-primary mt-8 relative z-10">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Survey CTA */}
      <section className="py-24 relative z-10 overflow-hidden" id="survey">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/0 border border-surface-border rounded-3xl -z-10"></div>
          {/* Decorative striped edge */}
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-primary rounded-l-3xl"></div>

          <div className="p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight leading-tight">
                Need a professional site assessment?
              </h2>
              <p className="text-sm md:text-base text-text-secondary max-w-lg">
                Book a complimentary site survey with our engineers to identify the exact crane, load limitations, and ground conditions for your lifting project.
              </p>
            </div>
            <a
              href="mailto:Info@dhllifting.com"
              className="border border-primary/40 hover:border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap flex items-center gap-3 group active:scale-95"
            >
              Schedule Survey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>



      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* WhatsApp Float */}
        <a
          href="https://wa.me/971556089117"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
          aria-label="WhatsApp live chat"
        >
          <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="absolute right-16 bg-white text-black text-[10px] font-bold py-1.5 px-3 rounded-md shadow-lg border border-surface-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Scroll To Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`w-14 h-14 bg-surface-card hover:bg-primary hover:text-black text-white border border-surface-border hover:border-transparent rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
