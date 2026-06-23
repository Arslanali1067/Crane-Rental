"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    equipment: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        equipment: "General Inquiry",
        message: "",
      });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-bg-dark text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-3xl mb-16 space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-tight">
            Get In <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Touch With Us
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl font-sans">
            Have questions about load capacity, site surveys, or equipment availability? Fill out our form or call us directly. Our heavy lifting consultants are standing by.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dubai Office Card */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 flex gap-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  Office Location
                </h3>
                <p className="text-base text-white font-semibold leading-relaxed">
                  ST # 14B RAS AL KHOR INDUSTRIAL AREA 1 , DUBAI, UAE
                </p>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 flex gap-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  Email Correspondence
                </h3>
                <div className="flex flex-col gap-1">
                  <a 
                    href="mailto:Info@dhllifting.com" 
                    className="text-base text-white font-semibold hover:text-primary transition-colors block"
                  >
                    Info@dhllifting.com
                  </a>
                  <a 
                    href="mailto:Info@altaefstar.ae" 
                    className="text-base text-white font-semibold hover:text-primary transition-colors block"
                  >
                    Info@altaefstar.ae
                  </a>
                </div>
              </div>
            </div>

            {/* Phones Card */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 flex gap-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  Hotlines
                </h3>
                <div className="flex flex-col gap-1">
                  <a 
                    href="tel:+97143200389" 
                    className="text-base text-white font-semibold hover:text-primary transition-colors block"
                  >
                    +971 43200389
                  </a>
                  <a 
                    href="tel:+971556089117" 
                    className="text-base text-white font-semibold hover:text-primary transition-colors block"
                  >
                    +971 556089117
                  </a>
                  <a 
                    href="tel:+971522606764" 
                    className="text-base text-white font-semibold hover:text-primary transition-colors block"
                  >
                    +971 52 260 6764
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 flex gap-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  Working Hours
                </h3>
                <p className="text-base text-white font-semibold">
                  Monday – Saturday: 8:00 AM – 6:00 PM
                </p>
                <p className="text-xs text-text-muted">
                  Emergency supports are available 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-surface-card border border-surface-border rounded-3xl p-8 md:p-12 relative">
            <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-8">
              Send An Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-secondary block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-surface-border rounded-xl px-4 py-3.5 text-sm text-white placeholder-text-muted focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-text-secondary block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-surface-border rounded-xl px-4 py-3.5 text-sm text-white placeholder-text-muted focus:border-primary focus:outline-none transition-colors"
                    placeholder="+971 50 123 4567"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-secondary block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-surface-border rounded-xl px-4 py-3.5 text-sm text-white placeholder-text-muted focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="equipment" className="text-xs font-bold uppercase tracking-wider text-text-secondary block">
                    Machinery / Service Required
                  </label>
                  <select
                    id="equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    className="w-full bg-bg-dark border border-surface-border rounded-xl px-4 py-3.5 text-sm text-white focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Mobile Cranes">Mobile Cranes</option>
                    <option value="Hiab Cranes">Hiab Cranes</option>
                    <option value="Trucks">Trucks</option>
                    <option value="Manlifts">Manlifts</option>
                    <option value="Excavators">Excavators</option>
                    <option value="Site Survey">Site Survey Request</option>
                    <option value="Operator Rental">Operator Rental</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-secondary block">
                  Project Details / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-bg-dark border border-surface-border rounded-xl px-4 py-3.5 text-sm text-white placeholder-text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Specify weight loads, heights, terrain, or rental durations..."
                ></textarea>
              </div>

              {/* Status Alert Panels */}
              {submitStatus === "success" && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-xs font-medium">
                    Thank you! Your inquiry was submitted successfully. We will contact you shortly.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-primary/10 border border-primary/20 text-primary rounded-xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-xs font-medium">
                    Please fill out all required fields marked with an asterisk (*).
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-black font-bold uppercase tracking-widest text-xs py-4.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Send Inquiry"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
