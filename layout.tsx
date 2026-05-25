import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charan Subhash | Full Stack & AI Developer",
  description:
    "Portfolio of Charan Subhash — B.Tech CSE at IIIT Sri City. Full Stack Developer & AI Enthusiast building intelligent, scalable applications.",
  keywords: [
    "Charan Subhash",
    "Full Stack Developer",
    "AI Developer",
    "IIIT Sri City",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Charan Subhash" }],
  openGraph: {
    title: "Charan Subhash | Full Stack & AI Developer",
    description:
      "Building intelligent applications with React, Node.js, Python, and Machine Learning.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
