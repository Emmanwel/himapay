import logoWordmark from "../assets/images/logo-wordmark.png";

const Logo = ({ className = "" }) => (
  <img
    src={logoWordmark}
    alt="HimaPay"
    width={480}
    height={125}
    className={`h-auto ${className}`}
  />
);

export default Logo;
