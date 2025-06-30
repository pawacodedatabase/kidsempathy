import { FaFacebookF,FaMapMarkerAlt, FaPhone , FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa";
import bg from "../assets/1.jpg"; // Use your actual background image
import { Link } from "react-router-dom";

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
    <span className="text-[7px] mb-3 ">Every child deserves a good life</span>
  </div>
  
            <div className="flex gap-4">
          <a href="https://www.facebook.com/share/1FYEnBpB6H/?mibextid=wwXIfr"> <FaFacebookF className="hover:text-red-500 cursor-pointer" /></a> 
            <a href="https://www.instagram.com/kids_empathy_initiative_?igsh=MXMzaTdmNTVqNXkxZA==">  <FaInstagram className="hover:text-red-500 cursor-pointer" /></a> 
          <a href="https://www.tiktok.com/@kidsempathyinitiative?_t=ZM-8xdMuc7tq10&_r=1"> <FaTiktok className="hover:text-red-500 cursor-pointer" /></a> 
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-1">
  <li><Link to="/" className="hover:text-red-500">Home</Link></li>
  <li><Link to="/donate" className="hover:text-red-500">Donate</Link></li>
  <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
  <li><Link to="/projects" className="hover:text-red-500">Our Projects</Link></li>
  <li><Link to="/aboutus" className="hover:text-red-500">About Us</Link></li>
</ul>

        </div>

        {/* Contact Info */}
       <div className="text-sm text-white">
  <h4 className="font-semibold mb-3">Contact Us</h4>

  <p className="flex items-start gap-2">
    <FaMapMarkerAlt className="mt-1" />
    9 Albarka street , S A lawa close , olive primary school Bodija Ibadan .

  </p>

<p className="flex items-center gap-2 mt-2">
  <FaPhone />
  <a href="tel:+2348124094684" >08124094684</a>
</p>
<p className="flex items-center gap-2 mt-2">
  <FaPhone />
  <a href="tel:+2348062925195" >08062925195</a>
</p>
<p className="flex items-center gap-2 mt-2">
  <FaPhone />
  <a href="tel:+2348146125213" >08146125213</a>
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
          
        </div><div className="text-center text-sm py-6 border-t">
  <p>&copy; {new Date().getFullYear()} KidsEmpathyInitiative |  All rights reserved.</p>
  <p className="mt-3">
    Website created and designed by{" "}
    <a
      href="https://www.tiktok.com/@pawacode?_t=ZM-8xdNTIEmq5V&_r=1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600 mt-2 hover:underline"
    >
      @Pawacode
    </a>
  </p>
</div>
      </div>

      
    </footer>
  );
};

export default Footer;
