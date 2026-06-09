"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Business Lines", href: "#business-lines" },
  { label: "Contact", href: "#contact" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zk-dark/95 backdrop-blur-md shadow-lg border-b border-zk-gold/20 dark:bg-zk-dark/95"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 border-zk-gold/60 group-hover:border-zk-gold transition-colors">
              <Image
                src="/favicon.png"
                alt="ZK Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight group-hover:text-zk-gold transition-colors">
                Zelalem Kebede
              </p>
              <p className="text-zk-gold/80 text-xs leading-tight">
                General Import & Export
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2 text-white hover:bg-white/10 cursor-pointer"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-zk-gold" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            )}

            <Button
              onClick={() => handleNavClick("#contact")}
              className="ml-4 bg-zk-gold hover:bg-zk-gold-dark text-zk-dark font-semibold cursor-pointer"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-1" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-white hover:bg-white/10 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-zk-gold" />
                ) : (
                  <Moon className="w-5 h-5 text-white" />
                )}
              </Button>
            )}

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 cursor-pointer"
                >
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-zk-dark border-zk-gold/20 w-[280px]"
              >
                <SheetHeader>
                  <SheetTitle className="text-white flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zk-gold/60">
                      <Image
                        src="/favicon.png"
                        alt="ZK Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm">Zelalem Kebede</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6 px-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-white/80 hover:text-zk-gold hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => handleNavClick("#contact")}
                      className="w-full bg-zk-gold hover:bg-zk-gold-dark text-zk-dark font-semibold cursor-pointer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
