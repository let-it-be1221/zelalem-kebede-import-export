"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+251 92 9814459",
    secondary: "+251 93 2737833",
    color: "zk-green",
    iconBg: "bg-zk-green/10",
    iconColor: "text-zk-green",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@zelalemkebede.com",
    secondary: "trade@zelalemkebede.com",
    color: "zk-gold-dark",
    iconBg: "bg-zk-gold/10",
    iconColor: "text-zk-gold-dark",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Welosefer Medina Building, 1st Floor, Room 104",
    secondary: "Kirkos Sub City, Woreda 03, Addis Ababa, Ethiopia",
    color: "zk-green",
    iconBg: "bg-zk-green/10",
    iconColor: "text-zk-green",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
    secondary: "Sat: 8:00 AM - 12:00 PM",
    color: "zk-gold-dark",
    iconBg: "bg-zk-gold/10",
    iconColor: "text-zk-gold-dark",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for reaching out. We will get back to you shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
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
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-zk-green">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Ready to partner with us? Reach out and let&apos;s discuss how we
            can work together to achieve your business goals.
          </p>
          <div className="w-20 h-1 bg-zk-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300 border-border/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div
                      className={`w-10 h-10 rounded-lg ${info.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                      {info.secondary && (
                        <p className="text-muted-foreground/70 text-xs mt-0.5">
                          {info.secondary}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4"
            >
              <Card className="overflow-hidden border-border/50 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4!2d38.76!3d9.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWelosefer%2C+Addis+Ababa!5e0!3m2!1sen!2set!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zelalem Kebede Office Location - Welosefer, Addis Ababa, Ethiopia"
                  className="w-full rounded-lg"
                />
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Fill out the form below and we&apos;ll respond as soon as
                      possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+251 ..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full bg-zk-green hover:bg-zk-green-dark text-white font-semibold cursor-pointer"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
