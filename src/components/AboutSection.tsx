"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  TrendingUp,
  Calendar,
  Award,
  Target,
  Eye,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Calendar,
      value: 2009,
      suffix: " E.C.",
      label: "Year Established",
    },
    {
      icon: Users,
      value: 300,
      suffix: "+",
      label: "Employees",
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: "B+ ETB",
      label: "Total Assets",
    },
    {
      icon: Building2,
      value: 4,
      suffix: "+",
      label: "Branch Offices",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-background"
    >
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
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Legacy of{" "}
            <span className="text-zk-green">Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-zk-gold mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.png"
                alt="Zelalem Kebede team and operations"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zk-dark/40 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-zk-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-zk-green/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Building Bridges in{" "}
              <span className="text-zk-green">Global Trade</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Established in 2009 E.C. under Ethiopian Commercial Law as a Sole
              Proprietorship, <strong className="text-foreground">Zelalem Kebede General Import and Export</strong> has
              grown into one of Ethiopia&apos;s most trusted trading companies.
              Led by <strong className="text-foreground">Mr. Zelalem Kebede</strong>, our organization has
              expanded across multiple business verticals with a workforce of
              over 300 permanent and contract employees.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With total assets exceeding <strong className="text-zk-gold font-semibold">5 Billion ETB</strong>,
              we operate from our head office in Addis Ababa with branch offices
              and warehouses in Metema, Gonder, Bure, and Bahirdar. Our dealer
              network spans across China, Korea, Africa, Europe, and Middle Asia.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Card className="bg-zk-green/5 border-zk-green/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-5 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-zk-green/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-zk-green" />
                  </div>
                  <h4 className="font-bold text-zk-green">Our Mission</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become a leading organization in Ethiopia and beyond in
                    providing and obtaining high market share by distributing
                    high quality, reliable, price effective and world class
                    products and services.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zk-gold/5 border-zk-gold/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-5 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-zk-gold/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-zk-gold-dark" />
                  </div>
                  <h4 className="font-bold text-zk-gold-dark">Our Vision</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Being a leading and reliable international trading company by
                    delivering best in class manufacturing, sales, services, and
                    client management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="text-center bg-zk-dark border-zk-green/30 hover:border-zk-gold/40 transition-colors duration-300 group">
                <CardContent className="p-6 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-zk-gold/10 flex items-center justify-center mx-auto group-hover:bg-zk-gold/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-zk-gold" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
