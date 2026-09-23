import { CtaBanner, Layout } from "../components";
import {
  Hero,
  HowItWorks,
  Marquee,
  ProductsPreview,
  Services,
  WhyHimaPay,
} from "../sections";

const HomePage = () => (
  <Layout>
    <Hero />
    <Marquee />
    <HowItWorks />
    <Services />
    <ProductsPreview />
    <WhyHimaPay />
    <CtaBanner />
  </Layout>
);

export default HomePage;
