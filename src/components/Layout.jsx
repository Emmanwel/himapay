import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <>
    <a
      href="#main"
      className="sr-only rounded-full bg-white px-4 py-2 font-semibold shadow-lg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
    >
      Skip to content
    </a>
    <Nav />
    <main id="main">{children}</main>
    <Footer />
  </>
);

export default Layout;
