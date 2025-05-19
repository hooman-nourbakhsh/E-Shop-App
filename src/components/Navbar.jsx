import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ popupHandler }) => {
  return (
    <div className="relative z-40 bg-white duration-200 dark:bg-gray-900 dark:text-white">
      <div className="py-4">
        <div className="container flex items-center justify-between">
          {/* logo and links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-2xl font-semibold uppercase tracking-widest text-primary sm:text-3xl"
            >
              Eshop
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown */}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] py-2 font-semibold text-gray-500 dark:hover:text-white"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  {/* dropdown items */}
                  <div className="absolute z-50 hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block dark:bg-gray-900 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 font-semibold text-gray-500 duration-200 hover:bg-primary/20 dark:hover:text-white"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* navbar right section */}
          <div className="flex items-center justify-between gap-4">
            {/* search bar */}
            <div className="group relative hidden md:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 duration-200 group-hover:text-primary dark:text-gray-400" />
            </div>
            {/* order-button secion */}
            <button className="relative p-3" onClick={popupHandler}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                4
              </div>
            </button>
            {/* dark mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
