"use client";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Ship,
  Truck,
  Factory,
  Fuel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Business Lines", href: "#business-lines" },
  { label: "Contact", href: "#contact" },
];

const businessLinks = [
  { label: "Export Business", href: "#business-lines", icon: Ship },
  { label: "Import Business", href: "#business-lines", icon: Truck },
  { label: "Manufacturing", href: "#business-lines", icon: Factory },
  { label: "Fuel Distribution", href: "#business-lines", icon: Fuel },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zk-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-zk-gold/40">
                <Image
                  src="/favicon.png"
                  alt="ZK Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Zelalem Kebede</p>
                <p className="text-zk-gold/70 text-xs">
                  General Import & Export
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Established in 2009 E.C., we are one of Ethiopia&apos;s leading
              trading companies with diverse business operations in import,
              export, manufacturing, and fuel distribution.
            </p>
            <div className="flex items-start gap-3 text-white/50 text-xs">
              <MapPin className="w-4 h-4 text-zk-gold shrink-0 mt-0.5" />
              <span>
                Welosefer Medina Building, 1st Floor, Room 104, Addis Ababa,
                Ethiopia
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-zk-gold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="space-y-2" aria-label="Footer quick links">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScroll(link.href)}
                  className="block text-white/60 hover:text-zk-gold text-sm transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Business Lines */}
          <div className="space-y-4">
            <h4 className="font-bold text-zk-gold text-sm uppercase tracking-wider">
              Business Lines
            </h4>
            <div className="space-y-2">
              {businessLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScroll(link.href)}
                  className="flex items-center gap-2 text-white/60 hover:text-zk-gold text-sm transition-colors duration-200 cursor-pointer"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-zk-gold text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-zk-gold shrink-0" />
                <span>+251 92 9814459</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-zk-gold shrink-0" />
                <span>+251 93 2737833</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-zk-gold shrink-0" />
                <span>info@zelalemkebede.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
            &copy; 2024 Zelalem Kebede General Import and Export. All Rights
            Reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleScroll("#home")}
            className="text-white/40 hover:text-zk-gold hover:bg-white/5 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
