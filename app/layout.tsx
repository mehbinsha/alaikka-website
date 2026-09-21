import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alaikka Travel Mate | Go Further",
  description:
    "Tourist buses, tour packages, and custom journeys from Malappuram and Tirur, Kerala.",
  openGraph: {
    title: "Alaikka Travel Mate | Go Further",
    description:
      "Tourist buses, tour packages, and custom journeys from Malappuram and Tirur, Kerala.",
    siteName: "Alaikka Travel Mate",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
