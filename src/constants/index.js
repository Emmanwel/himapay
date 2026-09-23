import {
  BusFront,
  ChartNoAxesCombined,
  CodeXml,
  Handshake,
  Layers,
  MousePointerClick,
  PiggyBank,
  ScanBarcode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Split,
  Store,
  UtensilsCrossed,
  Wallet,
  Zap,
} from "lucide-react";
import { LinkedInIcon, XIcon } from "../components/SocialIcons";

export const contact = {
  email: "pay@himapay.co.ke",
  phone: "+254707595799",
  phoneDisplay: "+254 707 595 799",
};

// External destinations. Leave a value empty until the real URL exists:
// the merchant CTA falls back to the contact page and the store badges
// show "Coming soon" instead of linking nowhere.
export const links = {
  merchantDashboard: "",
  playStore: "",
  appStore: "",
};

export const merchantCta = links.merchantDashboard
  ? { href: links.merchantDashboard, label: "Merchant Dashboard" }
  : { href: "/contact/?topic=merchant", label: "Register your business" };

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/himapay-limited",
    icon: LinkedInIcon,
  },
  { name: "X (Twitter)", href: "https://x.com/HimaPay", icon: XIcon },
];

export const navLinks = [
  { href: "/merchants/", label: "Merchants" },
  { href: "/products/", label: "Products" },
  { href: "/developers/", label: "Developers" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const pillars = [
  {
    icon: MousePointerClick,
    label: "Simple",
    text: "Get our products and services with the click of a button.",
  },
  {
    icon: Smartphone,
    label: "Convenient",
    text: "Manage your money from the counter, the office or your phone.",
  },
  {
    icon: ShieldCheck,
    label: "Secure",
    text: "Your finances handled securely, efficiently and on time.",
  },
];

export const steps = [
  {
    icon: Store,
    title: "Your customer pays",
    text: "Sell exactly as you do today. Payments come in at your point of sale.",
  },
  {
    icon: Split,
    title: "HimaPay separates the funds",
    text: "Every sale is split right at the point of sale into restocking, loan repayment and profit.",
  },
  {
    icon: PiggyBank,
    title: "You grow with clarity",
    text: "Know what's ready for restocking, what's set aside for your loan and what you actually earned.",
  },
];

export const services = [
  {
    icon: Layers,
    label: "Payment Aggregation",
    subtext:
      "Our end-to-end aggregation services ensure your business doesn't lose out on sales due to limited payment options for the customer.",
  },
  {
    icon: Wallet,
    label: "Wallets",
    subtext:
      "The human touch of HimaPay's wallets makes you feel alive when doing peer-to-peer and cross-platform transactions.",
  },
  {
    icon: Sparkles,
    label: "Value Added Solutions",
    subtext:
      "Leverage HimaPay's expertise to discover new digital business frontiers to spur the growth of your business.",
  },
  {
    icon: CodeXml,
    label: "API Services",
    subtext:
      "Tap into HimaPay's unique product offerings through our MIZIZI API portal and share the HimaPay experience with your customers.",
  },
];

export const products = [
  {
    slug: "retail-management",
    icon: ChartNoAxesCombined,
    label: "Automated Retail Management System",
    tagline: "See how every product performs, as it happens.",
    subtext:
      "Manufacturers and producers learn in real time how their products are performing in different market segments, while retailers are relieved of stress and can focus on customer experience and growth.",
    audience: ["Manufacturers", "Producers", "Retailers"],
    benefits: [
      "Real-time performance across market segments",
      "Less admin stress for retailers",
      "More time for customers and growth",
    ],
  },
  {
    slug: "project-escrow",
    icon: Handshake,
    label: "Project Tracking Escrow",
    tagline: "Fair pay for developers. Full ownership for clients.",
    subtext:
      "Software developers and their clients can now engage each other harmoniously. A developer? Get paid instantly upon completion of work. A client? Don't lose your money: own the code upon payment.",
    audience: ["Software developers", "Clients"],
    benefits: [
      "Developers are paid instantly on completion",
      "Clients own the code upon payment",
      "Progress both sides can track",
    ],
  },
  {
    slug: "self-checkout",
    icon: ScanBarcode,
    label: "Supermarket Self-Checkout",
    tagline: "Skip the queue. Scan, pay and walk out.",
    subtext:
      "Avoid wasting time in the queue. Simply walk in, pick an item from the shelf, scan the barcode, pay and walk out.",
    audience: ["Shoppers", "Supermarkets"],
    benefits: [
      "No more waiting in line",
      "Scan barcodes straight from the shelf",
      "Pay on the spot and walk out",
    ],
  },
  {
    slug: "fare-payment",
    icon: BusFront,
    label: "Advanced Fare Payment",
    tagline: "Know your stage, your stop and your fare.",
    subtext:
      "Know exactly where to board the bus, where to alight and how much fare to pay. We also cushion you from loss of luggage and theft.",
    audience: ["Commuters", "Transport operators"],
    benefits: [
      "Know where to board and where to alight",
      "Know the exact fare before you travel",
      "Cushioned against lost luggage and theft",
    ],
  },
  {
    slug: "restaurant-optimization",
    icon: UtensilsCrossed,
    label: "Restaurant Optimization",
    tagline: "Faster service from the kitchen to the table.",
    subtext:
      "Improve your restaurant's productivity and save time for both your staff and customers with our restaurant management software.",
    audience: ["Restaurants", "Staff", "Diners"],
    benefits: [
      "Higher productivity across the floor",
      "Time saved for your staff",
      "Shorter waits for your customers",
    ],
  },
  {
    slug: "token-buying",
    icon: Zap,
    label: "Remote Token Buying",
    tagline: "Top up your meter from anywhere.",
    subtext:
      "Load tokens into your meter automatically, even when you're away from home. No worries if the caretaker has locked the meter box.",
    audience: ["Tenants", "Homeowners"],
    benefits: [
      "Buy tokens from wherever you are",
      "Tokens load into the meter automatically",
      "No need to reach a locked meter box",
    ],
  },
];

export const contactTopics = [
  { value: "merchant", label: "Register my business" },
  { value: "products", label: "A HimaPay product" },
  { value: "api", label: "MIZIZI API access" },
  { value: "partnership", label: "Partnerships" },
  { value: "support", label: "Support" },
  { value: "other", label: "Something else" },
];

export const faqs = [
  {
    question: "What is HimaPay?",
    answer:
      "HimaPay is a payments company that helps retail merchants manage their sales revenue by separating funds for restocking, loan repayment and profit right at the point of sale.",
  },
  {
    question: "How does separating funds at the point of sale work?",
    answer:
      "When a customer pays, HimaPay splits that payment into separate pots for restocking, loan repayment and profit, so money meant for one purpose isn't spent on another.",
  },
  {
    question: "Who can use HimaPay?",
    answer:
      "Businesses register through the merchant dashboard and individuals use the HimaPay app. Our products also serve supermarkets, restaurants, commuters, households, and software developers and their clients.",
  },
  {
    question: "How do I register my business?",
    answer: `Send us a message on the contact page or call ${contact.phoneDisplay} and our team will get you set up.`,
  },
  {
    question: "Do you offer an API?",
    answer:
      "Yes. The MIZIZI API portal lets you tap into HimaPay's product offerings and share the HimaPay experience with your customers. Request access through the contact form.",
  },
  {
    question: "Is my money secure?",
    answer:
      "Security is one of the three principles behind everything we build: simple, convenient, secure. Talk to our team for details on how we protect your funds and data.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: products.map((product) => ({
      label: product.label,
      href: `/products/#${product.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "For merchants", href: "/merchants/" },
      { label: "Developers", href: "/developers/" },
      { label: "About us", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "FAQs", href: "/contact/#faqs" },
    ],
  },
];
