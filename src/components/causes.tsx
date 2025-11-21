import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cause1 from "../assets/cause1.jpg";
import cause2 from "../assets/cause2.jpg";
import { FaHeart, FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { FaChild, FaLightbulb, FaGraduationCap } from "react-icons/fa";



const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const CausesSection = () => {
  const cards = [
    {
      title: "OUR GOAL",
      text: "Our major focus is on the needy kids in Nigeria, and African continent  .. to make sure they have quality education , shelter , sound health and good life in general . And we are willing to extend this good cause to every lacking kids around the  world.",
      bgImage: cause1,
    },
    {
      title: "DONATE",
      text: "Donate to any of our causes that you are passionate about and get personal feedback on the progress of our projects.",
      bgColor: "#863d98",
    },
    {
      title: "SPONSOR A CHILD",
      text: "Invest in a child today! We are committed to the education of our children and welcome your support in sponsoring children from low-income households.",
      bgColor: "#fb0b66",
    },
    {
      title: "PARTNER WITH US",
      text: "We welcome collaborations with partners, donors, affiliates, organizations and individuals who share our passion for building a better world.",
      bgImage: cause2,
    },
  ];

  return (
    <>
    <section className="w-full py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">

        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="text-white px-6 py-10 rounded-lg flex flex-col justify-between h-[320px] relative overflow-hidden"
            style={
              card.bgImage
                ? {
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : { backgroundColor: card.bgColor }
            }
            initial={{ 
              opacity: 0, 
              x: idx % 2 === 0 ? -150 : 150 // left or right
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.3 }} // triggers ONCE when visible
          >

            {card.bgImage && (
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
            )}

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold text-center mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-center">{card.text}</p>
              </div>

              <div className="flex justify-center mt-4">
                <ArrowRight className="text-white" />
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT SECTION */}
        <div>
          <div className="mb-6">
            <span className="text-purple-600 font-semibold uppercase tracking-wide">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
              Kids EMPATHy Initiative —  
              <span className="text-purple-700 block">
                We Are Dedicated to Transforming the Lives of Children and Women.
              </span>
            </h1>
          </div>

          <p className="text-gray-700 mb-6">
            Kids EMPATHy Initiative is a registered non-governmental organization
            committed to supporting vulnerable, abandoned, and abused children
            and women within our communities. We exist to restore hope, provide
            care, and offer opportunities for a better life.
          </p>

          {/* STATISTICS */}
        
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center">
          <img
            src={cause2}
            alt="Kids Empathy Initiative"
            className="rounded-xl shadow-lg w-full max-w-[500px]"
          />

          {/* EXPERIENCE CARD */}
          <div className="absolute bottom-5 right-5 bg-white shadow-xl rounded-lg p-4 text-center">
            <div className="text-purple-700 text-4xl font-bold">
              2<span className="text-purple-600">+</span>
            </div>
            <span className="block text-gray-700 text-sm">Years Experience</span>
          </div>
        </div>
      </div>
    </div>
    
   <div className="w-full py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">

        {/* LOVE */}
        <motion.div
          variants={fadeUp(0)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02 }}
          className="flex flex-col text-center md:text-left items-center md:items-start 
                     p-6 rounded-xl bg-white shadow-md border border-pink-100 hover:shadow-xl
                     transition-all duration-300"
        >
          <div className="text-pink-600 text-5xl mb-2">
            <FaHeart />
          </div>

          <h1 className="text-3xl font-bold text-pink-700 tracking-wide">
            LOVE
          </h1>

          <p className="text-gray-700 leading-relaxed mt-3 text-[15px]">
            At <span className="font-semibold text-pink-700">Kids EMPATHy Initiative</span>, 
            love is the foundation of our mission. It brings healing, confidence, and hope 
            to vulnerable children and women. We create safe, nurturing spaces where care 
            and emotional support help every individual grow and rediscover their potential.
          </p>
        </motion.div>

        {/* INTEGRITY */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02 }}
          className="flex flex-col text-center md:text-left items-center md:items-start
                     p-6 rounded-xl bg-white shadow-md border border-purple-100 hover:shadow-xl
                     transition-all duration-300"
        >
          <div className="text-purple-600 text-5xl mb-2">
            <FaHandHoldingHeart />
          </div>

          <h1 className="text-3xl font-bold text-purple-700 tracking-wide">
            INTEGRITY
          </h1>

          <p className="text-gray-700 leading-relaxed mt-3 text-[15px]">
            We uphold honesty, transparency, and accountability in every action.  
            At <span className="font-semibold text-purple-700">Kids EMPATHy Initiative</span>, 
            integrity guides the way we engage with donors, families, volunteers, and the children 
            and women we support. We remain committed to doing what is right — always.
          </p>
        </motion.div>

        {/* RESPECT */}
        <motion.div
          variants={fadeUp(0.35)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02 }}
          className="flex flex-col text-center md:text-left items-center md:items-start 
                     p-6 rounded-xl bg-white shadow-md border border-pink-100 hover:shadow-xl
                     transition-all duration-300"
        >
          <div className="text-pink-600 text-5xl mb-2">
            <FaHandsHelping />
          </div>

          <h1 className="text-3xl font-bold text-pink-700 tracking-wide">
            RESPECT
          </h1>

          <p className="text-gray-700 leading-relaxed mt-3 text-[15px]">
            We honor the dignity and uniqueness of every person.  
            At <span className="font-semibold text-pink-700">Kids EMPATHy Initiative</span>, 
            respect is woven into every part of our work.  
            We encourage kindness, inclusivity, and open communication, creating an environment 
            where every voice is valued and every individual feels seen.
          </p>
        </motion.div>

      </div>
    </div>
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <motion.div
          variants={fadeUp(0)}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <span className="text-pink-600 font-semibold uppercase tracking-wide">
            Why Choose Us
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-snug max-w-xl">
            We bring hope, care, and meaningful support to children and women in need
          </h3>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 1 — Children & Women */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.03 }}
            className="flex items-center p-6 bg-white border border-pink-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-pink-600 text-5xl mr-4">
              <FaChild />
            </div>
            <div>
              <span className="text-3xl font-bold text-pink-700">237</span>
              <p className="text-gray-600 text-sm">Children & Women Supported</p>
            </div>
          </motion.div>

          {/* 2 — Ideas & Growth */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.03 }}
            className="flex items-center p-6 bg-white border border-purple-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-purple-600 text-5xl mr-4">
              <FaLightbulb />
            </div>
            <div>
              <span className="text-3xl font-bold text-purple-700">115</span>
              <p className="text-gray-600 text-sm">Empowerment Ideas & Growth Programs</p>
            </div>
          </motion.div>

          {/* 3 — Skills & Education */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.03 }}
            className="flex items-center p-6 bg-white border border-pink-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-pink-600 text-5xl mr-4">
              <FaGraduationCap />
            </div>
            <div>
              <span className="text-3xl font-bold text-pink-700">120</span>
              <p className="text-gray-600 text-sm">Skill Training & Educational Support</p>
            </div>
          </motion.div>

          {/* 4 — Donors & Donations */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.03 }}
            className="flex items-center p-6 bg-white border border-purple-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-purple-600 text-5xl mr-4">
              <FaHandsHelping />
            </div>
            <div>
              <span className="text-3xl font-bold text-purple-700">150</span>
              <p className="text-gray-600 text-sm">Donors & Support Contributions</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
    
    </>
  );
};

export default CausesSection;
