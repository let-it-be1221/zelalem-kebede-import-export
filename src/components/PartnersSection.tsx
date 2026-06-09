"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  { name: "XCMG", domain: "xcmg.com" },
  { name: "Sinotruk", domain: "sinotruk.com" },
  { name: "Shantui", domain: "shantui.com" },
  { name: "Mitsubishi", domain: "mitsubishi.com" },
  { name: "Toyota", domain: "toyota.com" },
  { name: "Isuzu", domain: "isuzu.co.jp" },
  { name: "Hyundai", domain: "hyundai.com" },
  { name: "BYD", domain: "byd.com" },
  { name: "Iveco", domain: "iveco.com" },
];

function PartnerCard({ partner }: { partner: (typeof partners)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-36 sm:w-44 h-28 sm:h-32 rounded-xl bg-white/95 backdrop-blur-sm border border-gray-200 hover:border-zk-gold hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 p-3">
      {!imgError ? (
        <Image
          src={`https://logo.clearbit.com/${partner.domain}`}
          alt={`${partner.name} logo`}
          width={120}
          height={80}
          unoptimized
          className="object-contain max-h-[60px] w-auto h-auto"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-zk-green font-bold text-base">
          {partner.name}
        </span>
      )}
      <span className="text-gray-500 text-xs mt-2 font-medium">
        {partner.name}
      </span>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-zk-green relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-zk-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-zk-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted Global{" "}
            <span className="text-zk-gold">Brands</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base">
            We partner with world-renowned manufacturers and brands to deliver
            quality products to the Ethiopian market.
          </p>
          <div className="w-20 h-1 bg-zk-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-zk-green to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-zk-green to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 mx-3 sm:mx-4"
                >
                  <PartnerCard partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          <div className="flex items-center gap-2 text-white/70">
            <Handshake className="w-5 h-5 text-zk-gold" />
            <span className="text-sm">9+ Global Partners</span>
          </div>
          <div className="w-1 h-1 bg-zk-gold/50 rounded-full" />
          <div className="text-white/70 text-sm">
            Vehicle &amp; Machinery Leaders
          </div>
          <div className="w-1 h-1 bg-zk-gold/50 rounded-full" />
          <div className="text-white/70 text-sm">
            5+ Countries Represented
          </div>
        </motion.div>
      </div>
    </section>
  );
}
