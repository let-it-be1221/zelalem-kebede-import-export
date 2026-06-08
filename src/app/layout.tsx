import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelalem Kebede General Import and Export | Global Trade & Manufacturing",
  description:
    "Established in 2009 E.C., Zelalem Kebede General Import and Export is a leading Ethiopian trading company specializing in import, export, manufacturing, and fuel distribution with over 5 Billion ETB in assets.",
  keywords: [
    "Zelalem Kebede",
    "Import Export Ethiopia",
    "Ethiopian Trading Company",
    "Global Trade",
    "Manufacturing Ethiopia",
    "Vehicle Import",
    "Coffee Export",
    "Oilseeds Export",
  ],
  authors: [{ name: "Zelalem Kebede General Import and Export" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Zelalem Kebede General Import and Export",
    description:
      "Your Trusted Partner in Global Trade & Manufacturing since 2009 E.C.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
