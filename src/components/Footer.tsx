import Link from "next/link";
import { MapPin, Mail, Phone, Globe, Send, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-surface-border pt-24 pb-12 relative overflow-hidden">
      {/* Decorative backing glow */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <Link href="/" className="flex items-center gap-3 mb-12 group">
            <span className="w-2.5 h-9 bg-primary rounded-full block group-hover:scale-y-110 transition-transform"></span>
            <span className="text-3xl font-display font-extrabold tracking-tighter text-white">
              ALWAFI
            </span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {/* Dubai Office Card */}
            <div className="bg-surface-card hover:bg-surface-card-hover border border-surface-border rounded-2xl p-8 flex flex-col items-center group transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Dubai Office
              </h5>
              <p className="text-sm text-text-secondary leading-relaxed max-w-[280px]">
                Sheikha Mahra Al Ghurair Building, G floor, RAG Global Business Hub LLC, Al Qusais 2, Dubai, UAE
              </p>
            </div>

            {/* Email Support Card */}
            <div className="bg-surface-card hover:bg-surface-card-hover border border-surface-border rounded-2xl p-8 flex flex-col items-center group transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Mail Us
              </h5>
              <a
                href="mailto:info@alwafigcc.com"
                className="text-sm text-text-secondary hover:text-primary transition-colors mb-1"
              >
                info@alwafigcc.com
              </a>
              <a
                href="mailto:support@alwafigcc.com"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                support@alwafigcc.com
              </a>
            </div>

            {/* Hotline Card */}
            <div className="bg-surface-card hover:bg-surface-card-hover border border-surface-border rounded-2xl p-8 flex flex-col items-center group transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Hotlines
              </h5>
              <a
                href="tel:0506786553"
                className="text-base font-bold text-white hover:text-primary transition-colors mb-1"
              >
                050 678 6553
              </a>
              <a
                href="tel:0589595365"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                058 959 5365
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-surface-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-text-muted text-center md:text-left">
            Copyright © {new Date().getFullYear()}.{" "}
            <span className="text-white font-medium">
              AlWafi Construction Equipment L.L.C.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-card hover:bg-primary hover:text-black border border-surface-border hover:border-transparent flex items-center justify-center text-text-secondary transition-all duration-300"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-card hover:bg-primary hover:text-black border border-surface-border hover:border-transparent flex items-center justify-center text-text-secondary transition-all duration-300"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-card hover:bg-primary hover:text-black border border-surface-border hover:border-transparent flex items-center justify-center text-text-secondary transition-all duration-300"
              aria-label="Instagram"
            >
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
