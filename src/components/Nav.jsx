import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <>
      <header className="sticky top-0 z-20 w-full bg-gray-200 py-4 shadow">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img
              src={headerLogo}
              alt="logo"
              width={129}
              height={29}
              className="m-0 w-[49px] h-[49px]"
            />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <button>
              <a href="/">Explore More</a>
            </button>
          </div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
