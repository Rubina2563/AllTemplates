import React from "react";
import { FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2 text-neutral-400">
        {links.map((link, index) => (
          <li key={index} className="hover:text-emerald-300 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-neutral-50">
      {/* Top Section */}
      <div className="container mx-auto px-8 md:px-32 py-10 flex flex-col gap-14">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Logo & Description */}
          <div className="w-full md:w-[436px] space-y-4">
            <h1 className="text-4xl font-extrabold">
              HAPPY<span className="text-emerald-300 font-light">DENTAL</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-7">
              Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor
              blandit eget nibh ac lacus vitae purus. Sagittis tortor fermentum.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              <div className="w-11 h-11 bg-emerald-300 flex items-center justify-center ">
                <i className="fab fa-twitter text-teal-900 text-xl"><FaTwitter color="white"/></i>
              </div>
              <div className="w-11 h-11 bg-emerald-300 flex items-center justify-center ">
                <i className="fab fa-instagram text-teal-900 text-xl"><FaInstagram color="white"/></i>
              </div>
              <div className="w-11 h-11 bg-emerald-300 flex items-center justify-center ">
                <i className="fab fa-youtube text-teal-900 text-xl"><FaYoutube color="white"/></i>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation, Services, Resources */}
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20">
            <FooterColumn title="Navigation" links={["Home", "About Us", "Services", "Contact Us"]} />
            <FooterColumn title="Services" links={["Teeth Whitening", "Dental Filling", "Teeth Checkup", "Teeth Implants"]} />
            <FooterColumn title="Resources" links={["Customer Stories", "Help Center", "Documentation", "Blog & Guide"]} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-emerald-300 py-4">
        <div className="container mx-auto px-8 md:px-32 flex flex-col md:flex-row justify-between items-center text-neutral-900 text-sm">
        <div className="flex gap-2"><p>Copyright © 2023 Happy Dental</p>
          <span className="hidden md:block w-px h-4 bg-neutral-500"></span>
          <p>Design by TokoTema</p>
          </div>  
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
