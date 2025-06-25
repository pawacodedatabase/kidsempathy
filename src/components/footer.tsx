import { FaFacebookF,FaMapMarkerAlt, FaPhone , FaTwitter, FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";
import bg from "../assets/1.jpg"; // Use your actual background image

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-12 pb-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Socials */}
        <div>
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
    <span className="text-[7px] mb-3 ">Every child deserves a better life</span>
  </div>
  
            <div className="flex gap-4">
            <FaFacebookF className="hover:text-red-500 cursor-pointer" />
            <FaTwitter className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaPinterest className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">Donate</a></li>
            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-red-500">Our Projects</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
           
          </ul>
        </div>

        {/* Contact Info */}
       <div className="text-sm text-white">
  <h4 className="font-semibold mb-3">Contact Us</h4>

  <p className="flex items-start gap-2">
    <FaMapMarkerAlt className="mt-1" />
    42 Avenue des Champs-Elysées, 75000 Paris, France
  </p>

  <p className="flex items-center gap-2 mt-2">
    <FaPhone />
    (123) 456 789
  </p>

  <p className="flex items-center gap-2 mt-2">
    <FaEnvelope />
    <a href="mailto:info@kidsempathy.org" className="hover:text-red-500">
      info@kidsempathy.org
    </a>
  </p>
</div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Subscribe to News</h4>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-red-600 px-4 hover:bg-white hover:text-black transition">
              →
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
