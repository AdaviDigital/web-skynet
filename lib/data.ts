import {
  Smartphone,
  Wifi,
  Zap,
  Tv,
  GraduationCap,
  Globe,
  Dices,
  Landmark,
  Gift,
  MessageSquare,
  Printer,
  LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  providers?: string[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: "airtime",
    name: "Airtime VTU",
    shortName: "Airtime",
    icon: Smartphone,
    tagline: "Instant airtime top-up on any network",
    description:
      "Recharge any Nigerian line in seconds, for yourself or someone else, with instant delivery confirmed by SMS and in-app receipt.",
    providers: ["MTN", "Airtel", "Glo", "9mobile"],
    features: ["Instant delivery", "Cashback on every recharge", "API integration for developers", "Scheduled recurring top-up"],
  },
  {
    slug: "data",
    name: "Cheap Data Subscription",
    shortName: "Data",
    icon: Wifi,
    tagline: "Affordable data plans, activated instantly",
    description:
      "SME, Corporate, Gifting (CG) and Direct data bundles across every major network, priced for daily users and resellers alike.",
    providers: ["MTN", "Airtel", "Glo", "9mobile"],
    features: ["SME & Corporate Gifting (CG) plans", "Direct & bulk purchase", "Instant activation", "Reseller wholesale pricing"],
  },
  {
    slug: "electricity",
    name: "Electricity Bills",
    shortName: "Electricity",
    icon: Zap,
    tagline: "Pay your prepaid or postpaid bill, get your token instantly",
    description:
      "Settle electricity bills for every major distribution company in Nigeria and receive your token or receipt immediately.",
    providers: ["IKEDC", "EKEDC", "IBEDC", "AEDC", "EEDC", "KEDCO", "PHED", "BEDC", "JED", "KAEDCO", "YEDC"],
    features: ["Instant token delivery", "Downloadable receipt", "Full payment history", "Meter validation before payment"],
  },
  {
    slug: "cable-tv",
    name: "Cable TV Subscription",
    shortName: "Cable TV",
    icon: Tv,
    tagline: "Renew your TV and streaming subscriptions in one place",
    description:
      "Subscribe or renew DStv, GOtv, Startimes and Showmax, or top up Netflix and Amazon Prime gift cards.",
    providers: ["DStv", "GOtv", "Startimes", "Showmax", "Netflix Gift Cards", "Amazon Prime"],
    features: ["Smart card validation", "Instant activation", "Auto-renewal reminders", "Digital receipt"],
  },
  {
    slug: "education",
    name: "Education Payments",
    shortName: "Education",
    icon: GraduationCap,
    tagline: "WAEC, NECO, JAMB and school fee payments made simple",
    description:
      "Buy result-checker PINs and scratch cards, pay JAMB and university acceptance fees, and settle school fees securely.",
    providers: ["WAEC", "NECO", "NABTEB", "JAMB", "University Acceptance", "School Fees"],
    features: ["Instant PIN generation", "Scratch card delivery", "Payment confirmation slip", "Bulk purchase for schools"],
  },
  {
    slug: "internet",
    name: "Internet Services",
    shortName: "Internet",
    icon: Globe,
    tagline: "Broadband subscriptions from Nigeria's top ISPs",
    description: "Subscribe to home and portable internet plans from leading Nigerian internet service providers.",
    providers: ["Smile", "Spectranet", "IPNX", "FiberOne", "Swift"],
    features: ["Plan comparison", "Instant activation", "Renewal reminders", "Usage-based plan suggestions"],
  },
  {
    slug: "betting",
    name: "Betting Wallet Funding",
    shortName: "Betting",
    icon: Dices,
    tagline: "Fund your betting wallet instantly, on any platform",
    description: "Top up your betting account balance across Nigeria's most popular betting platforms in seconds.",
    providers: ["Bet9ja", "SportyBet", "1xBet", "BetKing", "MSport", "BangBet", "MerryBet", "22Bet"],
    features: ["Instant wallet credit", "Account ID validation", "Transaction history", "Low service fees"],
  },
  {
    slug: "government",
    name: "Government Payments",
    shortName: "Government",
    icon: Landmark,
    tagline: "Taxes, levies and official fees, paid without the queue",
    description:
      "Pay government taxes, levies, licenses, visa fees, passport fees, driver's licence and vehicle registration fees online.",
    features: ["Taxes & levies", "Visa & passport fees", "Driver's licence renewal", "Vehicle registration"],
  },
  {
    slug: "gift-cards",
    name: "Gift Cards",
    shortName: "Gift Cards",
    icon: Gift,
    tagline: "Buy and redeem gift cards for the world's biggest platforms",
    description: "Purchase gift cards for gaming, shopping and entertainment platforms, delivered instantly by code.",
    providers: ["Steam", "Apple", "Google Play", "Amazon", "Xbox", "PlayStation"],
    features: ["Instant code delivery", "Multiple denominations", "Secure code storage in-app", "Gifting to another user"],
  },
  {
    slug: "bulk-sms",
    name: "Bulk SMS",
    shortName: "Bulk SMS",
    icon: MessageSquare,
    tagline: "Reach thousands of customers with one campaign",
    description: "Send transactional, OTP and marketing SMS campaigns from a simple dashboard or API.",
    features: ["SMS campaigns", "OTP delivery", "Marketing broadcast lists", "Delivery reports"],
  },
  {
    slug: "recharge-card-printing",
    name: "Recharge Card Printing",
    shortName: "Recharge Cards",
    icon: Printer,
    tagline: "Generate and print recharge PINs in bulk",
    description: "Generate recharge card PINs across networks and print them in bulk for resale or distribution.",
    features: ["Bulk PIN generation", "Custom card design", "Batch printing", "Denomination mixing"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const heroStats = [
  { label: "Happy customers", value: 250000, suffix: "+" },
  { label: "Daily transactions", value: 40000, suffix: "+" },
  { label: "Active resellers", value: 3200, suffix: "+" },
  { label: "Affiliates earning", value: 1800, suffix: "+" },
];

export const testimonials = [
  {
    name: "Ifeoma A.",
    role: "Reseller, Lagos",
    quote: "SkyNet's wholesale pricing and instant delivery let me run my VTU business straight from my phone.",
    rating: 5,
  },
  {
    name: "Chinedu O.",
    role: "Everyday user, Abuja",
    quote: "I pay my electricity bill and renew my DStv in under a minute, no more standing in line.",
    rating: 5,
  },
  {
    name: "Blessing E.",
    role: "Affiliate partner, Port Harcourt",
    quote: "The affiliate dashboard makes it easy to track referrals and know exactly when I get paid.",
    rating: 4,
  },
];

export const faqs = [
  {
    question: "How fast is airtime and data delivery?",
    answer: "Most airtime and data purchases are delivered instantly, typically within a few seconds of payment confirmation.",
  },
  {
    question: "Can I become a reseller or affiliate?",
    answer:
      "Yes. Create an account, then apply for reseller access for wholesale pricing and API tools, or join the affiliate program to earn commission on referrals.",
  },
  {
    question: "Which payment methods can I use to fund my wallet?",
    answer: "You can fund your wallet by bank transfer, dedicated virtual account, debit card, USSD, or QR payment.",
  },
  {
    question: "Is my money and personal data safe with SkyNet?",
    answer:
      "SkyNet uses bank-level encryption, mandatory transaction PINs and OTP verification, and continuous fraud monitoring to keep your wallet and data secure.",
  },
  {
    question: "What happens if a transaction fails?",
    answer:
      "Failed transactions are automatically reversed to your wallet. If a reversal doesn't reflect within a few minutes, our support team can look into it immediately.",
  },
  {
    question: "Do you have an API for developers?",
    answer: "Yes. The SkyNet API platform gives developers and businesses programmatic access to airtime, data, bills and wallet services.",
  },
];

export const blogPosts = [
  {
    slug: "cheapest-data-plans-nigeria-2026",
    title: "The cheapest data plans in Nigeria right now",
    category: "Money-saving tips",
    excerpt: "A network-by-network breakdown of SME, Corporate Gifting and direct data plans, and how to pick the right one.",
    date: "2026-06-12",
  },
  {
    slug: "how-vtu-resellers-earn",
    title: "How VTU resellers actually earn money",
    category: "Business",
    excerpt: "A look at wholesale pricing, margins and the tools resellers use to run a profitable VTU business.",
    date: "2026-05-28",
  },
  {
    slug: "affiliate-marketing-fintech-nigeria",
    title: "Affiliate marketing in Nigerian fintech: a practical guide",
    category: "Affiliate marketing",
    excerpt: "What it takes to build a sustainable income stream referring people to digital payment platforms.",
    date: "2026-05-02",
  },
  {
    slug: "understanding-bvn-nin-verification",
    title: "Why BVN and NIN verification protects your wallet",
    category: "Fintech",
    excerpt: "A plain-language explanation of KYC, why regulators require it, and how it protects your funds.",
    date: "2026-04-18",
  },
];

export const pricingTiers = [
  {
    name: "Retail",
    description: "For everyday personal use",
    price: "Standard rates",
    features: ["Standard airtime & data pricing", "All bill payment categories", "Wallet & transaction history", "Email & chat support"],
    cta: "Create free account",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Reseller",
    description: "For businesses reselling airtime, data & bills",
    price: "Wholesale rates",
    features: ["Wholesale pricing on all services", "API access & webhooks", "Team management", "Commission tracking & reports", "Priority support"],
    cta: "Apply for reseller access",
    href: "/reseller",
    highlighted: true,
  },
  {
    name: "Affiliate",
    description: "Earn commission by referring new users",
    price: "Commission-based",
    features: ["Unique referral links", "Real-time referral analytics", "Marketing materials provided", "Fast withdrawal requests"],
    cta: "Join affiliate program",
    href: "/affiliate",
    highlighted: false,
  },
];
