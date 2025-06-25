
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';

const Header = () => {
 

  return (
    <>
      {/* Sticky Menu Icon - Fixed beside logo */}
      <div className=" bg-white px-[50px] flex items-center justify-between  md:hidden ">
        {/* Logo (scrolls with page) */}
        <div className="flex flex-col leading-tight">
    <p
      style={{ fontFamily: "'Lobster', cursive" }}
      className="text-2xl text-[#853c96] tracking-wide"
    >
      <strong className="text-[#fa0262]">Kids</strong> EMPATHY
    </p>
    <span className="text-sm text-gray-500  mb-2 font-medium ml-1">
    Initiative 
    </span>
    <span className="text-[7px] ">Every child deserves a good life</span>
  </div>


        <div className="text-xl font-bold text-purple-700">
          <Link to="/"><img src={logo} width={100} /></Link>
        </div>

       
      </div>

      {/* Full Header - For Desktop */}
      <header className="hidden md:flex items-center justify-between p-4 bg-white">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-700">
          <Link to="/"><img src={logo} width={100} /></Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/projects" className="hover:text-purple-600">Our Projects</Link>
          <Link to="/contactus" className="hover:text-purple-600">Contact Us</Link>
          <Link to="/aboutus" className="hover:text-purple-600">About Us</Link>
          
          <Link to="/Donate" className="hover:bg-black hover:text-white bg-[#ff0068] px-3 py-2 rounded text-white">Donate</Link>
        </nav>
      </header>

     
    </>
  );
};

export default Header;
