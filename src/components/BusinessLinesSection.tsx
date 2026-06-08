"use client";

import { motion } from "framer-motion";
import {
  Ship,
  Truck,
  Factory,
  Fuel,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";

interface SubItem {
  name: string;
  highlight?: boolean;
}

interface Category {
  name: string;
  image: string;
  description: string;
  items: SubItem[];
}

interface BusinessLine {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  categories: Category[];
}

const businessLines: BusinessLine[] = [
  {
    id: "export",
    label: "Export",
    icon: Ship,
    title: "Export Business",
    subtitle: "Premium Ethiopian Agricultural Products",
    heroImage: "/images/export-business.png",
    description:
      "We export high-quality Ethiopian agricultural products to international markets across Europe, Middle East, Far East, and North America. Our export business has been growing significantly, building strong customer bases and international buyer relationships.",
    categories: [
      {
        name: "Oilseeds & Cereals",
        image: "/images/categories/oilseeds-cereals.png",
        description: "Premium quality Ethiopian oilseeds and cereal grains for global markets",
        items: [
          { name: "Sesame Seeds", highlight: true },
          { name: "Niger Seeds", highlight: true },
          { name: "Sunflower Seeds" },
          { name: "Wheat" },
          { name: "Barley" },
          { name: "Teff" },
        ],
      },
      {
        name: "Spices & Pepper",
        image: "/images/categories/spices-pepper.png",
        description: "Aromatic Ethiopian spices and pepper varieties sought worldwide",
        items: [
          { name: "Black Pepper", highlight: true },
          { name: "Coriander" },
          { name: "Turmeric" },
          { name: "Cardamom" },
          { name: "Cumin" },
          { name: "Ginger" },
        ],
      },
      {
        name: "Pulses",
        image: "/images/categories/pulses.png",
        description: "High-protein pulses and legumes for food and feed industries",
        items: [
          { name: "Chickpeas", highlight: true },
          { name: "Lentils", highlight: true },
          { name: "Fava Beans" },
          { name: "Soybeans" },
          { name: "Mung Beans" },
        ],
      },
      {
        name: "Coffee, Tea & Chat",
        image: "/images/categories/coffee-tea-chat.png",
        description: "Ethiopia's finest coffee, tea leaves, and chat for international trade",
        items: [
          { name: "Green Coffee Beans", highlight: true },
          { name: "Roasted Coffee", highlight: true },
          { name: "Tea Leaves" },
          { name: "Chat (Khat)" },
        ],
      },
    ],
  },
  {
    id: "import",
    label: "Import",
    icon: Truck,
    title: "Import Business",
    subtitle: "World-Class Vehicles, Machinery & Chemicals",
    heroImage: "/images/import-business.png",
    description:
      "We specialize in importing the cleanest, highest quality vehicles, construction machinery, and industrial chemicals from Europe and Asia. As an exclusive agent for major Chinese manufacturers, we distribute brand-new vehicles and construction equipment with original spare parts.",
    categories: [
      {
        name: "Vehicles",
        image: "/images/categories/vehicles.png",
        description: "Brand-new vehicles imported directly from Europe and Asia",
        items: [
          { name: "Toyota", highlight: true },
          { name: "Mitsubishi", highlight: true },
          { name: "Hyundai" },
          { name: "Mercedes" },
          { name: "BMW" },
          { name: "BYD" },
          { name: "Isuzu Trucks" },
          { name: "Sino Trucks" },
          { name: "Iveco Trucks" },
          { name: "Euro Trucks" },
          { name: "Nissan" },
        ],
      },
      {
        name: "Construction Machinery",
        image: "/images/categories/construction-machinery.png",
        description: "Heavy-duty construction and road maintenance equipment from top Chinese brands",
        items: [
          { name: "XCMG", highlight: true },
          { name: "Sinotruk", highlight: true },
          { name: "XCG" },
          { name: "Shantui" },
        ],
      },
      {
        name: "Chemicals & Raw Materials",
        image: "/images/categories/chemicals.png",
        description: "Industrial chemicals and raw materials for manufacturing companies",
        items: [
          { name: "Dioctyl Orthophosphate (DOP)", highlight: true },
          { name: "Industrial Chemicals" },
          { name: "Manufacturing Raw Materials" },
        ],
      },
      {
        name: "Spare Parts & Metal Scraps",
        image: "/images/categories/spare-parts.png",
        description: "Vehicle spare parts, regulatory equipment, and metal/nonmetal scraps",
        items: [
          { name: "Vehicle Spare Parts" },
          { name: "Regulatory Equipment" },
          { name: "Jewelry & Decor Supplies" },
          { name: "Metal Scraps" },
          { name: "Nonmetal Scraps" },
        ],
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    title: "Manufacturing & Production",
    subtitle: "State-of-the-Art Industrial Facilities",
    heroImage: "/images/manufacturing.png",
    description:
      "We are developing world-class manufacturing facilities across Ethiopia, creating jobs and producing high-quality food products for domestic and international markets. Our facilities are located at Bure Industry Park and Gendawuha Industry Village in the Amhara Region.",
    categories: [
      {
        name: "Pasta, Macaroni & Biscuit Plant",
        image: "/images/categories/pasta-biscuit.png",
        description: "Modern pasta and biscuit production facility at Bure Industry Park",
        items: [
          { name: "Pasta Production", highlight: true },
          { name: "Macaroni Manufacturing" },
          { name: "Biscuit Production Line" },
          { name: "Located at Bure Industry Park" },
          { name: "Warehouse: 2,500 m\u00B2" },
        ],
      },
      {
        name: "Corn & Soya Blending Line",
        image: "/images/categories/corn-soya-blending.png",
        description: "5tph capacity nutritional food processing and blending facility",
        items: [
          { name: "5tph Corn Blending", highlight: true },
          { name: "Soya Processing Line" },
          { name: "Nutritional Food Production" },
          { name: "Located at Bure Industry Park" },
        ],
      },
      {
        name: "Sesame Seed Cleaning Plant",
        image: "/images/categories/sesame-cleaning.png",
        description: "Export-grade sesame seed cleaning and colour sorting facility",
        items: [
          { name: "Seed Cleaning", highlight: true },
          { name: "Colour Sorting" },
          { name: "Export-Grade Processing" },
          { name: "Gendawuha Industry Village" },
          { name: "10,000 m\u00B2 Facility" },
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
    heroImage: "/images/fuel-station.png",
    description:
      "Operating modern fuel stations and transportation services across Ethiopia. Our fuel station in Gojam Dejen City provides reliable energy distribution, while our transportation fleet ensures timely fuel delivery to industry zones and retail customers nationwide.",
    categories: [
      {
        name: "Regular Gasoil & Diesel",
        image: "/images/categories/gasoil.png",
        description: "Premium quality regular gasoil and inland gas oil for vehicles and industry",
        items: [
          { name: "Regular Gasoil", highlight: true },
          { name: "Gas Oil Inland" },
          { name: "Diesel Fuel" },
        ],
      },
      {
        name: "Kerosene & Lubricant",
        image: "/images/categories/kerosene-lubricant.png",
        description: "High-quality kerosene and automotive lubricants for all vehicle types",
        items: [
          { name: "Kerosene" },
          { name: "Automotive Lubricant", highlight: true },
          { name: "Industrial Lubricant" },
        ],
      },
      {
        name: "LPG Gas",
        image: "/images/categories/lpg-gas.png",
        description: "Liquefied petroleum gas for domestic and commercial use",
        items: [
          { name: "LPG Cylinders", highlight: true },
          { name: "Bulk LPG Supply" },
          { name: "Commercial Gas Solutions" },
        ],
      },
      {
        name: "Fuel Transportation",
        image: "/images/categories/fuel-transport.png",
        description: "Nationwide fuel transportation with own trucks and commissioned fleet",
        items: [
          { name: "Own Tanker Fleet", highlight: true },
          { name: "Commissioned Transport" },
          { name: "Industry Zone Delivery" },
          { name: "Labiajo Service" },
        ],
      },
    ],
  },
];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Category Name on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h4 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-lg">
            {category.name}
          </h4>
          <p className="text-gray-200 text-xs sm:text-sm leading-snug line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Hover Overlay with Items */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-zk-green/85 backdrop-blur-sm flex flex-col justify-center items-center p-5 sm:p-6"
        >
          <h4 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
            {category.name}
          </h4>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {category.items.map((item) => (
              <span
                key={item.name}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  item.highlight
                    ? "bg-zk-gold text-zk-dark shadow-md"
                    : "bg-white/20 text-white backdrop-blur-sm border border-white/30"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Items Bar - visible when not hovered */}
      <div className="bg-white p-3 sm:p-4 transition-opacity duration-300">
        <div className="flex flex-wrap gap-1.5">
          {category.items.slice(0, 4).map((item) => (
            <Badge
              key={item.name}
              variant="secondary"
              className={`text-[10px] sm:text-xs ${
                item.highlight
                  ? "bg-zk-gold/20 text-zk-dark font-semibold border border-zk-gold/40"
                  : "bg-zk-green/10 text-zk-green"
              }`}
            >
              {item.name}
            </Badge>
          ))}
          {category.items.length > 4 && (
            <Badge
              variant="secondary"
              className="bg-zk-green/5 text-muted-foreground text-[10px] sm:text-xs"
            >
              +{category.items.length - 4} more
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
            <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-muted/50 p-2 rounded-xl mb-10">
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
                {/* Hero Banner for this Business Line */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden mb-10 shadow-xl"
                >
                  <div className="relative h-48 sm:h-64 lg:h-72">
                    <Image
                      src={line.heroImage}
                      alt={line.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zk-dark/80 via-zk-dark/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center p-6 sm:p-10 lg:p-14">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zk-gold flex items-center justify-center">
                            <line.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zk-dark" />
                          </div>
                          <span className="text-zk-gold font-semibold text-sm tracking-wider uppercase">
                            {line.label} Division
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                          {line.title}
                        </h3>
                        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                          {line.description}
                        </p>
                        <div className="flex items-center gap-2 text-zk-gold text-sm font-medium">
                          <span>{line.categories.length} Categories</span>
                          <ChevronRight className="w-4 h-4" />
                          <span>
                            {line.categories.reduce((sum, cat) => sum + cat.items.length, 0)} Products & Services
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Category Image Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                  {line.categories.map((category, i) => (
                    <CategoryCard key={category.name} category={category} index={i} />
                  ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-10 text-center"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zk-green text-white rounded-full font-medium hover:bg-zk-green/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Inquire About {line.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
