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
      name: "Access Platforms",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFVITdlrAOM6t3GMRRgVxz7IsXu4Uchd4PYvdS8G34QZ6JL8TuJ44TVEU8ZvDiLCCXI8g9DX9mbg4cT3UQu8bqMgIXFsUsjNTa-0PtwvreYamJbxtIIgudY23DWd4CM8zW7ErtIdHhpAyOBOwSBlI0paC9TEiOOIBHGZtQy7Cro3NCTNKyy-FukAxw9uSO_LdUli2TD8ZZ6dYo5UkB2M0Cd4hG9Lb3pEVql5FGAOPdWDK3n-I22wP9xbUXzu_GgpmN3aSRRN4wKgao",
      href: "/equipment",
    },
    {
      name: "Mini Cranes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3Ttmqc5te9bpxAE8ZVmBbe5LQVnrtJ5fUhy-kwdyjY0DqDQwwMXSVU40hf1GyZdoVL87kK1BluDHpHNaRzAcXVCPfOzEWTAb9A-9EOfR3z1m9HegGg1RE1h9qG438anwxUhPHe4i9UkDgW6aY6Cx3YkcgC9l-Om0QiiXu4-nhEOptwkCfiRinz8WswPCtDmgIsFIlVJCUZWoZhoEmab33lL6yyl5nblMEHYcCM3VczhknRd3QmT9LbvQiEguiPLvszvRoCUV44yf",
      href: "/equipment",
    },
    {
      name: "Mobile Crane",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA17-FCXAPYeTpScYGKLMfBTPOzeCl5RF76G6APbCgezgD5_VkiWpQmeQksWnB4R1aP4JZHojdR79zIpxm6wZxXjkeZ3ET2RCoTwSvuvuCm27xbfyBbh4HnK0tix9SXc1QHiwfeNoT9RBk13EsbbsJWiSm2vkEAY2kRyYuepssz5-bCWdNdt5rx1gAYIlse9LAsuXG8nm0ywlllLV_PWezeR29kqj03knoGk1tYiiMpc8PfUa-weL9Uv4tVEdbWBX-lN9XKSF8z26zd",
      href: "/equipment",
    },
    {
      name: "Forklift",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC3j5X6tpaRna8G8eTBc-WxTD6oVxNBewrQ5Dp6R269Cc0dWxaFhBrnZmPvdhaEuyLDdHfT4EnMB6-9Ile4d0kbyjgJeqkj4xiKgLZ2NqA6s3IpU4iJY-unR1KvcpgRqJZuUmcjqBaNxp2oHWjZLSHA8a6QTr8ccfYgt1rRLPoNkWjldeujAgCWt3Z1rx3SeW4l8JTUVr4xh_AKkqTmLDPnBOGEnjFYq0PK6OXvpuZMJtvInSWj25VebAWzDXRyZ-d13FdjVfVFcXV",
      href: "/equipment",
    },
    {
      name: "Boomloader",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5ltnWyjUZYbUmLPEQ6J3O1tJ8pmIy-AMFomQ1j6ZQeR43zydg2KsJ0SfC9Eem_ZC04T8ZZjpzV3O4PNs-PXpgrfGaQaHwkxKq6gO2_RdmfcN1lOZw9HmRNXBLWy6-BnuZejVw6bu7kUVmpPqzy6LBIkURGGSXvuml73vWUe7CwwV40daPuvOaifcD9HQ0_wxjumKcvcGDGJxhNjG03lt1hGbvc0f2BrdsUsoqeyXsDrIDEgYQ5pROBcWRaw9p_zoyj7Uz6ne8_RW6",
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
                Alwafi is the ultimate destination for certified heavy machinery and specialized lifting access. Supporting infrastructure and civil engineering projects across the UAE since 2022.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-surface-card border border-surface-border rounded-xl p-3.5 hover:border-primary/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                    Sales Hotline
                  </p>
                  <a href="tel:0589595365" className="text-sm font-extrabold text-white hover:text-primary transition-colors">
                    058 959 5365
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card border border-surface-border rounded-xl p-3.5 hover:border-primary/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                    General Support
                  </p>
                  <a href="tel:0506786553" className="text-sm font-extrabold text-white hover:text-primary transition-colors">
                    050 678 6553
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
                alt="Alwafi Heavy Crane Fleet"
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
                className="bg-surface-card hover:bg-surface-card-hover border border-surface-border rounded-2xl p-8 flex flex-col items-center group transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 shadow-xl"
              >
                <div className="w-full h-44 flex items-center justify-center mb-6 relative overflow-hidden">
                  {/* Subtle hover zoom */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full flex justify-between items-center border-t border-surface-border pt-6">
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
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40">
            {["IBM MEDIA", "GREEN HOST", "YODGY", "ATOMIC SEO", "BOOSTERIO", "SEO MIND"].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-xs font-extrabold tracking-widest text-white">
                  {partner}
                </span>
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
              href="#inquiry"
              className="bg-primary text-black hover:bg-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-primary/15 hover:shadow-white/5 whitespace-nowrap flex items-center gap-3 group active:scale-95"
            >
              Schedule Survey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-28 relative z-10" id="inquiry">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">
              CONTACT & ENQUIRIES
            </span>
            <h2 className="text-4xl font-display font-black text-white uppercase tracking-tight">
              Get an Instant Quote
            </h2>
            <p className="text-sm text-text-secondary max-w-md mx-auto">
              Fill out the form below with your requirements, and our sales team will contact you with a customized estimate within 2 hours.
            </p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your enquiry has been received. Our sales engineer will call you shortly.");
            }}
            className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 50 678 6553"
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. info@company.com"
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white block">
                  Equipment Category
                </label>
                <select
                  className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-sm text-text-secondary focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="mobile-crane">Mobile Crane (25T - 500T)</option>
                  <option value="access-platform">Access Platform / Man-Lift</option>
                  <option value="mini-crane">Mini Spider Crane</option>
                  <option value="forklift">Industrial Forklift</option>
                  <option value="boomloader">JCB Boomloader</option>
                  <option value="excavator">Mini Excavator</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white block">
                Project Details / Special Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Mention lifting capacity, heights, site location (Dubai, Abu Dhabi, etc.), or duration..."
                className="w-full bg-surface-dark border border-surface-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-black hover:bg-white font-bold py-4 rounded-lg text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/10 active:scale-[0.98]"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* WhatsApp Float */}
        <a
          href="https://wa.me/971506786553"
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
