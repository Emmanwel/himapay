import {
  facebook,
  instagram,
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
  shoe4,
  shoe5,
  shoe6,
  shoe7,
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
    label: "Automated Sales Management System",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Supermarket Self-Checkout",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Advanced Fare Payment",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
  {
    imgURL: support,
    label: "Project Tracker",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
  {
    imgURL: truckFast,
    label: "Restaurant Optimization",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: truckFast,
    label: "Remote Token Buying",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Payment Aggregation",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Wallets",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Value Added  Solutions",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
  {
    imgURL: support,
    label: "API Services",
    subtext: "Our dedicated team is here to assist you every step of the way.",
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
      { name: "Email: info@himapay.co.ke", link: "mailto:info@himapay.co.ke" },
      { name: "Phone: +2542222222222222", link: "tel:+25422449354" },
      { name: "About us", link: "/" },
    ],
  },
  //   {
  //     title: "Get in touch",
  //     links: [
  //       { name: "customer@nike.com", link: "mailto:customer@nike.com" },
  //       { name: "+92554862354", link: "tel:+92554862354" },
  //     ],
  //   },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
