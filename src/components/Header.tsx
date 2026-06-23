"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarRange } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Equipment List", href: "/equipment" },
    { name: "Site Survey", href: "/site-survey" },
    { name: "Operator Rental", href: "/operator-rental" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-bg-dark/95 border-surface-border backdrop-blur-md py-4 shadow-2xl"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Al Taef Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-text-secondary hover:text-white"
                  } group`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-6">
            {/* Phone Support */}
            <div className="hidden lg:flex flex-col items-end border-r border-surface-border pr-6">
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-[0.2em]">
                Live Support
              </span>
              <a
                href="tel:+97143200389"
                className="text-sm font-extrabold text-white hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                +971 43200389
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:Info@dhllifting.com"
              className="border border-primary/40 hover:border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <CalendarRange className="w-4 h-4" />
              Instant Quote
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-text-secondary hover:text-white p-1 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-lg transform transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-12 space-y-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display font-semibold uppercase tracking-wider ${
                    isActive ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="border-t border-surface-border pt-8 flex flex-col gap-4">
            <span className="text-xs text-text-muted uppercase tracking-widest font-bold">
              Emergency Hotlines
            </span>
            <a href="tel:+97143200389" className="text-xl font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              +971 43200389
            </a>
            <a href="tel:+971556089117" className="text-xl font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              +971 556089117
            </a>
            <a href="tel:+971522606764" className="text-xl font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              +971 52 260 6764
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
