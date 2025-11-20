
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Hero Section images
import hero1 from "../assets/smile.jpg";
import hero2 from "../assets/edu.jpg";
import hero3 from "../assets/kids.jpg";


// Gallery images
import one from "../assets/1.jpg";
import three from "../assets/3.jpg";
import four from "../assets/7.jpg";
import img from "../assets/056c54fe2dc77b78bd278120a690085e.jpg";
import img2 from "../assets/159482c99b0367004f8a7e7313a4eed6.jpg";
import two2 from "../assets/b64eba0b6e4f3192469d706725075fd9.jpg";
import two3 from "../assets/1.jpg";
import two5 from "../assets/3.jpg";
import two7 from "../assets/7.jpg";
import CausesSection from "./causes";
import Projects from "../Backend/projects";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IconSection from "./cat";


const heroSlides = [
  {
    image: hero3,
    title: "EVERY CHILD DESERVES A GOOD LIFE",
    subtitle: "Join us in caring for the needy kids through acts of donation and community service.",
    button: "Donate Now",
    link: "/donate"
  },
  {
    image: hero2,
    title: "YOUR SUPPORT MAKES A DIFFERENCE",
    subtitle: "Help provide food, shelter, and education to children in need.",
    button: "Support A Child",
    link: "/donate"
  },
  {
    image: hero1,
    title: "BE THE REASON A CHILD SMILES",
    subtitle: "Small acts of kindness create big changes. Start today.",
    button: "Get Involved",
    link: "/contact"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle, button, link } = heroSlides[current];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        key={image}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* TEXT & BUTTON */}
      <div className="absolute bottom-10 left-6 md:left-12 text-pink-600 max-w-xl">

        <motion.h1
          key={title}
          className="text-3xl md:text-5xl"
          style={{ fontFamily: "'Lobster', cursive" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>

        <motion.p
          key={subtitle}
          className="mt-2 text-sm md:text-lg px-8 text-purple-400"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <Link to={link}>
          <motion.button
            key={button}
            className="mt-4 px-6 py-3 bg-black text-white font-semibold border-2  border-pink-600 hover:bg-white hover:text-black transition rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {button}
          </motion.button>
        </Link>

      </div>
    </div>
  );
};

const GallerySection = () => {
  const images = [one, three, four, img, img2, two2, two3, two5, two7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
    <CausesSection/>
    <Projects/>
    <div className="py-12 bg-gray-200">
      <motion.h2
        className="text-2xl md:text-4xl text-black font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Impact in Action
      </motion.h2>
      <motion.p
        className="text-gray-800 px-8 text-sm text-center max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Capturing moments of generosity, support, and community outreach.
      </motion.p>
      <Slider {...settings} className="w-11/12 mx-auto max-w-7xl">
        {images.map((img, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-2">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 md:h-96 object-cover bg-white rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </Slider>
    </div></>
  );
};



const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <IconSection/>
      <GallerySection />
    </div>
  );
};

export default HomePage;
