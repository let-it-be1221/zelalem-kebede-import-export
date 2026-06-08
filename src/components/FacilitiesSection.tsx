"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Warehouse,
  MapPin,
  LandPlot,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: Building2,
    title: "Head Office",
    location: "Addis Ababa, Medina Building",
    detail: "Welosefer Medina Building, 1st Floor, Room 104",
    subCity: "Kirkos Sub City, Woreda 03",
    color: "zk-green",
    iconBg: "bg-zk-green/10",
    iconColor: "text-zk-green",
  },
  {
    icon: Warehouse,
    title: "Branch Offices & Warehouses",
    location: "4 Major Cities",
    detail: "Metema, Gonder, Bure, Bahirdar",
    subCity: "Strategic trade route locations",
    color: "zk-gold-dark",
    iconBg: "bg-zk-gold/10",
    iconColor: "text-zk-gold-dark",
  },
  {
    icon: LandPlot,
    title: "Bure Industry Park Land",
    location: "42,000 m² Total Area",
    detail: "17,000 m² + 25,000 m² plots",
    subCity: "Amhara Region",
    color: "zk-green",
    iconBg: "bg-zk-green/10",
    iconColor: "text-zk-green",
  },
  {
    icon: Warehouse,
    title: "Warehouse Facility",
    location: "2,500 m² Built",
    detail: "Modern storage & logistics",
    subCity: "Distribution ready",
    color: "zk-gold-dark",
    iconBg: "bg-zk-gold/10",
    iconColor: "text-zk-gold-dark",
  },
];

const keyStats = [
  { value: "42,000 m²", label: "Total Land at Bure", icon: LandPlot },
  { value: "2,500 m²", label: "Built Warehouse", icon: Warehouse },
  { value: "5", label: "Office Locations", icon: Building2 },
  { value: "5B+ ETB", label: "Total Assets", icon: ArrowRight },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 sm:py-28 bg-zk-cream">
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
            Our Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Infrastructure &{" "}
            <span className="text-zk-green">Assets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Strategically located offices, warehouses, and industrial land
            supporting our operations across Ethiopia.
          </p>
          <div className="w-20 h-1 bg-zk-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Facility Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-zk-green/20">
                <CardContent className="p-6 flex gap-5">
                  <div
                    className={`w-14 h-14 rounded-xl ${facility.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <facility.icon
                      className={`w-7 h-7 ${facility.iconColor}`}
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg text-foreground">
                      {facility.title}
                    </h3>
                    <p className={`font-semibold text-sm ${facility.iconColor}`}>
                      {facility.location}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {facility.detail}
                    </p>
                    <p className="text-muted-foreground/70 text-xs">
                      {facility.subCity}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {keyStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="bg-zk-green border-zk-green/80 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-5 space-y-2">
                  <stat.icon className="w-6 h-6 text-zk-gold mx-auto" />
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
