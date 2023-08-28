// import { hamburger } from "../assets/icons";
// import { headerLogo } from "../assets/images";
// import { navLinks } from "../constants";

// const Nav = () => {
//   return (
//     <>
//       <header className="sticky top-0 z-20 w-full bg-gray-200 py-4 shadow">
//         <nav className="flex justify-between items-center max-container">
//           <a href="/">
//             <img
//               src={headerLogo}
//               alt="logo"
//               width={129}
//               height={29}
//               className="m-0 w-[49px] h-[49px]"
//             />
//           </a>
//           <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//             {navLinks.map((item) => (
//               <li key={item.label}>
//                 <a
//                   href={item.href}
//                   className="font-montserrat leading-normal text-lg text-slate-gray"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
//             <button>
//               <a href="/">Explore More</a>
//             </button>
//           </div>
//           <div className="hidden max-lg:block">
//             <img src={hamburger} alt="hamburger icon" width={25} height={25} />
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Nav;

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src={headerLogo}
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block justify-center">
                  <div className="flex space-x-4">
                    {navLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>

                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((item) => (
                <Disclosure.Button
                  key={item.label}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
