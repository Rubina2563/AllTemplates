import { FaArrowRight , FaBars, FaTimes} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="bg-emerald-300 hidden px-32 py-3 md:flex justify-between  items-center">
      {/* Left Side: Address */}
      <div className="flex items-center gap-3">
        <IoLocationSharp className="text-neutral-900 w-4 h-4" />
        <span className="text-neutral-900 text-sm font-normal leading-tight">
          Jl Danau Bratan, Malang City, East Java 65139
        </span>
      </div>

      {/* Right Side: Phone & Email */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <BiPhone className="text-neutral-900 w-4 h-4" />
          <span className="text-neutral-900 text-sm font-normal leading-tight">
            +62 864 6444 2222
          </span>
        </div>
        <div className="w-px h-5 bg-neutral-500"></div>
        <div className="flex items-center gap-3">
          <HiOutlineMail className="text-neutral-900 w-4 h-4" />
          <span className="text-neutral-900 text-sm font-normal leading-tight">
            hi@happydental.com
          </span>
        </div>
      </div>
      
    </header>

     <nav className="h-[132px] bg-emerald-300 md:bg-white px-8 md:px-32 py-8 flex flex-wrap justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="text-[32px] leading-[51.20px]">
        <span className="text-neutral-900 font-extrabold">HAPPY</span>
        <span className="text-neutral-900 font-light">DENTAL</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex  items-center gap-6">
        <Link to="/" className="text-neutral-900 text-[1.3vw] font-medium hover:text-emerald-500 transition">Home</Link>
        <Link to="/aboutus" className="text-neutral-900 text-[1.3vw]  font-medium hover:text-emerald-500 transition">About Us</Link>
        <Link to="/services" className="text-neutral-900 text-[1.3vw] font-medium hover:text-emerald-500 transition">Services</Link>
        <Link to="/city" className="text-neutral-900 text-[1.3vw]  font-medium hover:text-emerald-500 transition">City</Link>
        <Link to="/contactus" className="text-neutral-900 text-[1.3vw]  font-medium hover:text-emerald-500 transition">Contact Us</Link>
      </div>

      {/* Get Started Button */}
      <Link to="/contactus" className="hidden md:flex px-8 py-3 bg-emerald-300 items-center gap-2 text-neutral-900 text-[1.25vw] font-medium hover:bg-emerald-400 transition">
        Get Started <FaArrowRight />
      </Link>

      {/* Hamburger Icon */}
      <button className="md:hidden text-neutral-900 text-2xl" onClick={() => setIsOpen(true)}>
        <FaBars />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-emerald-300 shadow-lg flex flex-col items-center gap-6 py-10 transition-transform transform translate-x-0 z-50">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-2xl text-neutral-900" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>

          <Link to="/" className="text-neutral-900 text-lg font-medium hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/aboutus" className="text-neutral-900 text-lg font-medium hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/services" className="text-neutral-900 text-lg font-medium hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/city" className="text-neutral-900 text-lg font-medium hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>City</Link>
          <Link to="/contactus" className="text-neutral-900 text-lg font-medium hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {/* Get Started Button in Mobile Menu */}
          <Link to="/contactus" className="px-8 py-3 bg-emerald-300 flex items-center gap-2 text-neutral-900 text-lg font-medium hover:bg-emerald-400 transition" onClick={() => setIsOpen(false)}>
            Get Started <FaArrowRight />
          </Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Header;
