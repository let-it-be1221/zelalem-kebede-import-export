"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Plane, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const regions = [
  {
    name: "China",
    description: "Strategic partnerships with leading Chinese manufacturers for vehicles, machinery, and industrial equipment.",
    icon: "🇨🇳",
    highlights: ["Vehicle manufacturing", "Construction equipment", "Industrial chemicals"],
  },
  {
    name: "Korea",
    description: "Strong dealer relationships with Korean automotive and technology brands.",
    icon: "🇰🇷",
    highlights: ["Hyundai vehicles", "Automotive parts", "Technology solutions"],
  },
  {
    name: "Africa",
    description: "Extensive network across the African continent for trade and distribution.",
    icon: "🌍",
    highlights: ["Regional trade", "Agricultural exports", "Cross-border logistics"],
  },
  {
    name: "Europe",
    description: "Premium European vehicle and machinery brands serving the Ethiopian market.",
    icon: "🇪🇺",
    highlights: ["Mercedes-Benz", "BMW", "Iveco trucks"],
  },
  {
    name: "Middle Asia",
    description: "Growing partnerships in Middle Asia for diverse trade opportunities.",
    icon: "🌏",
    highlights: ["Commodity trading", "Industrial partnerships", "Market expansion"],
  },
];

export default function GlobalReachSection() {
  return (
    <section className="py-20 sm:py-28 bg-zk-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zk-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zk-gold/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-zk-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Global Reach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our International{" "}
            <span className="text-zk-gold">Dealer Network</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            Our strategic partnerships span five major regions worldwide,
            enabling us to deliver the best products and services to the
            Ethiopian market.
          </p>
          <div className="w-20 h-1 bg-zk-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Globe Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-zk-gold/30 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-zk-gold/20 flex items-center justify-center">
                <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-zk-gold" />
              </div>
            </div>
            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-zk-gold rounded-full" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zk-green rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Region Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-zk-gold/40 hover:bg-white/10 transition-all duration-500 group h-full backdrop-blur-sm">
                <CardContent className="p-5 space-y-3 text-center">
                  <div className="text-3xl mb-2">{region.icon}</div>
                  <h3 className="text-white font-bold text-lg group-hover:text-zk-gold transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {region.description}
                  </p>
                  <div className="space-y-1 pt-2">
                    {region.highlights.map((h) => (
                      <div
                        key={h}
                        className="text-zk-gold/70 text-xs flex items-center justify-center gap-1"
                      >
                        <div className="w-1 h-1 bg-zk-gold/50 rounded-full" />
                        {h}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "5+", label: "Global Regions" },
            { value: "11+", label: "Vehicle Brands" },
            { value: "4+", label: "Machinery Brands" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-zk-gold">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
