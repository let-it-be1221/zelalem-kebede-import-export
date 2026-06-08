"use client";

import { motion } from "framer-motion";
import {
  Ship,
  Truck,
  Factory,
  Fuel,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    icon: Ship,
    title: "Export Business",
    description:
      "Exporting premium Ethiopian agricultural products including oilseeds, cereals, pepper, spices, pulses, coffee, tea, and chat to international markets.",
    image: "/images/export-business.png",
    color: "zk-green",
    bgColor: "bg-zk-green/5",
    borderColor: "border-zk-green/20",
    iconBg: "bg-zk-green/10",
    iconColor: "text-zk-green",
  },
  {
    icon: Truck,
    title: "Import Business",
    description:
      "Importing world-class vehicles, construction machinery, chemicals, spare parts, and metal/nonmetal scraps from global manufacturers.",
    image: "/images/import-business.png",
    color: "zk-gold-dark",
    bgColor: "bg-zk-gold/5",
    borderColor: "border-zk-gold/20",
    iconBg: "bg-zk-gold/10",
    iconColor: "text-zk-gold-dark",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Developing state-of-the-art manufacturing facilities including pasta & biscuit plant, corn & soya blending line, and sesame seed cleaning plant.",
    image: "/images/manufacturing.png",
    color: "zk-green",
    bgColor: "bg-zk-green/5",
    borderColor: "border-zk-green/20",
    iconBg: "bg-zk-green/10",
    iconColor: "text-zk-green",
  },
  {
    icon: Fuel,
    title: "Fuel Distribution",
    description:
      "Operating fuel stations and transportation services with regular gasoil, kerosene, lubricant, LPG, and comprehensive fuel logistics.",
    image: "/images/fuel-station.png",
    color: "zk-gold-dark",
    bgColor: "bg-zk-gold/5",
    borderColor: "border-zk-gold/20",
    iconBg: "bg-zk-gold/10",
    iconColor: "text-zk-gold-dark",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-zk-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-zk-gold font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Core <span className="text-zk-green">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            From international trade to local manufacturing, we deliver
            excellence across four major business verticals.
          </p>
          <div className="w-20 h-1 bg-zk-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card
                className={`group overflow-hidden ${service.borderColor} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Icon overlay */}
                  <div
                    className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${service.iconBg} backdrop-blur-sm flex items-center justify-center`}
                  >
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                </div>

                <CardContent className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-zk-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#business-lines");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`inline-flex items-center gap-1 text-sm font-medium ${service.iconColor} hover:gap-2 transition-all duration-300 cursor-pointer`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
