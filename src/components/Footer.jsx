import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container grid pb-20 pt-5 text-center lg:grid-cols-3 lg:text-left">
        {/* company details */}
        <div className="px-4 py-8">
          <a
            href="#"
            className="text-2xl font-semibold uppercase tracking-widest text-primary sm:text-3xl"
          >
            Eshop
          </a>
          <p className="pt-3 text-gray-600 dark:text-white/70 lg:pr-24">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            alias cum
          </p>
          <p className="mt-4 text-gray-500">Made with 💖 by HooMaN</p>
          <a
            href="https://github.com/hooman-nourbakhsh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-primary/90 px-4 py-2 text-sm text-white"
          >
            Visit my GitHub Profile
          </a>
        </div>
        {/* footer links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 lg:col-span-2">
          {/* first col links */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-xl font-bold">Important Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="text-gray-600 duration-300 hover:text-black dark:text-gray-400 hover:dark:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* second col links */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-xl font-bold">Quick Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="text-gray-600 duration-300 hover:text-black dark:text-gray-400 hover:dark:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Address */}
          <div className="col-span-2 px-4 py-8 sm:col-auto">
            <h1 className="mb-3 text-xl font-bold">Address</h1>
            <div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <FaLocationArrow />
                <p>Kurdistan, Iran</p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
                <FaMobileAlt />
                <p>+98 123456789</p>
              </div>
              {/* social links */}
              <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
                <a href="#">
                  <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
