import {
  facebook,
  linkedln,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home", current: true },
  { href: "#about-us", label: "About Us", current: false },
  { href: "#products", label: "Products", current: false },
  { href: "#contact-us", label: "Contact Us", current: false },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: truckFast,
    label: "Automated Retail Management system",
    subtext:
      "Manufacturers and producers can use our software to learn in real time how their products are performing in different market segments, while as a retailer you can relieve yourself of stress and focus on customer experience and growth.",
  },

  {
    imgURL: support,
    label: "Project Tracking Escrow.",
    subtext:
      "Software developers and their clients can now engage each other harmoniously. A developer? Don't waste your time, receive your pay instantly upon completion of work; A client? Don't lose your money, own the code upon payment.",
  },
  {
    imgURL: shieldTick,
    label: "Supermarket Self-Checkout",
    subtext:
      "Avoid wasting time in the queue. Simply walk in, pick item from the shelf, scan barcode, pay and walk out.",
  },
  {
    imgURL: support,
    label: "Advanced Fare Payment",
    subtext:
      "Get to know exactly where to board the bus & where to alight, and how much fare to pay. We also cushion you from loss of luggage and theft.",
  },
  {
    imgURL: truckFast,
    label: "Restaurant Optimization",
    subtext:
      "Improve your restaurant's productivity and save time for both your staff and customers by using our RMS software.",
  },
  {
    imgURL: truckFast,
    label: "Remote Token Buying",
    subtext:
      "Embrace convenience and load your token in the meter automatically even when you're away from home. Don't worry if the caretaker locked the meter box.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Payment Aggregation",
    subtext:
      "Our end-to-end aggregation services ensure your business doesn't lose out on sales due to limited payment options for the customer.",
  },
  {
    imgURL: shieldTick,
    label: "Wallets",
    subtext:
      "The human touch of HimaPay's wallets makes you feel alive when doing peer-to-peer & cross-platform transactions.",
  },
  {
    imgURL: support,
    label: "Value Added  Solutions",
    subtext:
      "Leverage HimaPay's expertise to discover new digital business frontiers to spur the growth of your business.",
  },
  {
    imgURL: support,
    label: "API Services",
    subtext:
      "Tap into HimaPay's unique product offerings through our MIZIZI API portal and share with your customers the HimaPay experience.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Documentation",
    links: [
      { name: "Developer API", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "Terms of Use", link: "/" },
      { name: "FAQs", link: "/" },
    ],
  },
  {
    title: "Our Products",
    links: [
      { name: "Automated Sales Management System", link: "/" },
      { name: "Supermarket Self-Checkout", link: "/" },
      { name: "Advanced Fare Payment", link: "/" },
      { name: "Project Tracker", link: "/" },
      { name: "Restaurant Optimization", link: "/" },
      { name: "Remote Token Buying", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "Email: pay@himapay.co.ke", link: "mailto:pay@himapay.co.ke" },
      { name: "Phone: +254707595799", link: "tel:0707595799" },
      { name: "About us", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", link: "/" },
  {
    src: linkedln,
    alt: "linkedln logo",
    link: "https://www.linkedin.com/company/himapay-limited",
  },
  {
    src: twitter,
    alt: "twitter logo",
    link: "https://twitter.com/HimaPay?t=eUZA6IG70xgUasrzNj5YXQ&s=09",
  },
];
