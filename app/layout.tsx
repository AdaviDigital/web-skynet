import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skynetng.com"),
  title: {
    default: "SkyNet — Fast, Secure & Affordable Digital Payments in Nigeria",
    template: "%s | SkyNet",
  },
  description:
    "SkyNet is Nigeria's trusted digital payment and VTU platform — recharge airtime, buy cheap data, pay electricity and TV bills, fund betting wallets, make education payments, and earn through reseller and affiliate programs.",
  keywords: [
    "airtime recharge Nigeria",
    "cheap data plans",
    "VTU platform",
    "pay electricity bill online",
    "cable TV subscription",
    "betting wallet funding",
    "reseller VTU",
  ],
  openGraph: {
    title: "SkyNet — Your Trusted Digital Payment & VTU Platform",
    description:
      "Recharge airtime, buy cheap data, pay bills, subscribe to TV, fund betting wallets, make education payments, and earn through reseller and affiliate programs.",
    url: "https://skynetng.com",
    siteName: "SkyNet",
    locale: "en_NG",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${poppins.variable}`}>
      <body className="bg-canvas text-ink font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
