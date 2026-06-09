"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  { name: "XCMG", region: "China" },
  { name: "Sinotruk", region: "China" },
  { name: "Shantui", region: "China" },
  { name: "Mitsubishi", region: "Japan" },
  { name: "Toyota", region: "Japan" },
  { name: "Isuzu", region: "Japan" },
  { name: "Hyundai", region: "Korea" },
  { name: "BYD", region: "China" },
  { name: "Iveco", region: "Europe" },
];

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
                  <div className="w-36 sm:w-44 h-20 sm:h-24 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-zk-gold/40 hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center group">
                    <span className="text-white font-bold text-sm sm:text-base group-hover:text-zk-gold transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-white/40 text-xs mt-1">
                      {partner.region}
                    </span>
                  </div>
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
