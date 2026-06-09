"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BusinessLinesSection from "@/components/BusinessLinesSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import PartnersSection from "@/components/PartnersSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BusinessLinesSection />
        <GlobalReachSection />
        <PartnersSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
