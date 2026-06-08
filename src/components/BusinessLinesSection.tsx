"use client";

import { motion } from "framer-motion";
import {
  Ship,
  Truck,
  Factory,
  Fuel,
  Leaf,
  Car,
  Wrench,
  Cog,
  Droplets,
  Flame,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const businessLines = [
  {
    id: "export",
    label: "Export",
    icon: Ship,
    title: "Export Business",
    subtitle: "Premium Ethiopian Agricultural Products",
    image: "/images/export-business.png",
    description:
      "We export high-quality Ethiopian agricultural products to international markets, connecting local farmers with global demand and ensuring premium quality standards.",
    categories: [
      {
        name: "Oilseeds & Cereals",
        items: ["Sesame seeds", "Niger seeds", "Sunflower seeds", "Wheat", "Barley", "Teff"],
      },
      {
        name: "Spices & Pepper",
        items: ["Black pepper", "Coriander", "Turmeric", "Cardamom", "Cumin", "Ginger"],
      },
      {
        name: "Pulses",
        items: ["Chickpeas", "Lentils", "Fava beans", "Soybeans", "Mung beans"],
      },
      {
        name: "Coffee, Tea & Chat",
        items: ["Green coffee beans", "Roasted coffee", "Tea leaves", "Chat (Khat)"],
      },
    ],
  },
  {
    id: "import",
    label: "Import",
    icon: Truck,
    title: "Import Business",
    subtitle: "World-Class Vehicles, Machinery & Chemicals",
    image: "/images/import-business.png",
    description:
      "We import top-tier vehicles, construction machinery, and industrial chemicals from leading global manufacturers, providing Ethiopian businesses with reliable equipment.",
    categories: [
      {
        name: "Vehicles",
        items: [
          "Mitsubishi",
          "Toyota",
          "Isuzu",
          "Sino Trucks",
          "Iveco",
          "Euro Trucks",
          "Hyundai",
          "Mercedes",
          "Nissan",
          "BMW",
          "BYD",
        ],
      },
      {
        name: "Construction Machinery",
        items: ["XCMG", "Sinotruk", "XCG", "Shantui"],
      },
      {
        name: "Chemicals & Equipment",
        items: [
          "Dioctyl orthophosphate (DOP)",
          "Vehicle spare parts",
          "Regulatory equipment",
        ],
      },
      {
        name: "Scrap Materials",
        items: ["Metal scraps", "Nonmetal scraps"],
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    title: "Manufacturing & Production",
    subtitle: "State-of-the-Art Industrial Facilities",
    image: "/images/manufacturing.png",
    description:
      "We are developing world-class manufacturing facilities across Ethiopia, creating jobs and producing high-quality food products for domestic and international markets.",
    categories: [
      {
        name: "Pasta, Macaroni & Biscuit Plant",
        items: [
          "Located at Bure Industry Park",
          "State-of-the-art production lines",
          "Currently in development phase",
        ],
      },
      {
        name: "Corn & Soya Blending Line",
        items: [
          "5tph capacity",
          "Currently in development",
          "Nutritional food processing",
        ],
      },
      {
        name: "Sesame Seed Cleaning Plant",
        items: [
          "Gendawuha Industry Village",
          "10,000 m² facility",
          "Export-grade cleaning & processing",
        ],
      },
    ],
  },
  {
    id: "fuel",
    label: "Fuel",
    icon: Fuel,
    title: "Fuel Distribution & Services",
    subtitle: "Reliable Energy Solutions & Transportation",
    image: "/images/fuel-station.png",
    description:
      "Operating modern fuel stations and transportation services to ensure reliable energy distribution across Ethiopia's growing infrastructure needs.",
    categories: [
      {
        name: "Fuel Station Products",
        items: [
          "Regular gasoil",
          "Gas oil inland",
          "Kerosene",
          "Lubricant",
          "LPG (Liquefied Petroleum Gas)",
        ],
      },
      {
        name: "Services",
        items: [
          "Fuel transportation",
          "Labiajo Service",
          "Fuel station in Gojam Dejen City",
        ],
      },
    ],
  },
];

export default function BusinessLinesSection() {
  return (
    <section id="business-lines" className="py-20 sm:py-28 bg-background">
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
            Business Lines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Business <span className="text-zk-green">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Explore our diverse business operations spanning international
            trade, manufacturing, and energy distribution.
          </p>
          <div className="w-20 h-1 bg-zk-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="export" className="w-full">
            {/* Tab Triggers */}
            <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-muted/50 p-2 rounded-xl mb-8">
              {businessLines.map((line) => (
                <TabsTrigger
                  key={line.id}
                  value={line.id}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-sm font-medium data-[state=active]:bg-zk-green data-[state=active]:text-white transition-all duration-300"
                >
                  <line.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{line.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {businessLines.map((line) => (
              <TabsContent key={line.id} value={line.id}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Image & Description */}
                  <div className="space-y-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={line.image}
                        alt={line.title}
                        width={600}
                        height={400}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zk-dark/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {line.title}
                        </h3>
                        <p className="text-zk-gold text-sm font-medium">
                          {line.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {line.description}
                    </p>
                  </div>

                  {/* Category Details */}
                  <div className="space-y-5">
                    {line.categories.map((category, i) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="bg-zk-cream rounded-xl p-5 border border-zk-green/10 hover:border-zk-gold/30 transition-colors duration-300"
                      >
                        <h4 className="font-bold text-zk-green mb-3 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-zk-gold" />
                          {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item) => (
                            <Badge
                              key={item}
                              variant="secondary"
                              className="bg-white text-foreground hover:bg-zk-green/10 transition-colors cursor-default text-xs"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
