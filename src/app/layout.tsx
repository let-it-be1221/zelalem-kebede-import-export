import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zelalemkebede.com"),
  title: "Zelalem Kebede General Import & Export | Global Trade & Manufacturing",
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
    "Fuel Distribution Ethiopia",
    "Construction Machinery Import",
    "XCMG Ethiopia",
    "Sinotruk Ethiopia",
    "Hyundai Ethiopia",
    "BYD Ethiopia",
  ],
  authors: [{ name: "Zelalem Kebede General Import and Export" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Zelalem Kebede General Import & Export | Global Trade & Manufacturing",
    description:
      "Your Trusted Partner in Global Trade & Manufacturing since 2009 E.C. Leading Ethiopian trading company with diverse operations in import, export, manufacturing, and fuel distribution.",
    type: "website",
    url: "https://zelalemkebede.com",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Zelalem Kebede General Import and Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelalem Kebede General Import & Export | Global Trade & Manufacturing",
    description:
      "Your Trusted Partner in Global Trade & Manufacturing since 2009 E.C.",
    images: ["/images/hero-banner.png"],
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
