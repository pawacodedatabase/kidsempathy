import React from "react";
import { FaChild, FaFemale } from "react-icons/fa";
import { GiGraduateCap, GiLightBulb } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";

const items = [
  {
    icon: <FaChild size={40} />,
    label: "Children",
    link: "/donate",
    color: "#FF5733", // orange-red
  },
  {
    icon: <FaFemale size={40} />,
    label: "Women",
    link: "/donate",
    color: "#C71585", // pink/magenta
  },
  {
    icon: <MdVolunteerActivism size={40} />,
    label: "Charity",
    link: "/donate",
    color: "#1E90FF", // blue
  },
  {
    icon: <GiGraduateCap size={40} />,
    label: "Education",
    link: "/donate",
    color: "#228B22", // green
  },
  {
    icon: <GiLightBulb size={40} />,
    label: "Conference & Ideas",
    link: "/donate",
    color: "#F4B400", // yellow-gold
  },
];

const IconSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">

          {items.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="w-28 h-28 flex flex-col items-center justify-center text-center bg-white 
                         shadow-md hover:shadow-lg rounded-full transition-all duration-300"
            >
              {/* Each icon now uses its own color */}
              <div className="mb-2">
                {React.cloneElement(item.icon, { color: item.color })}
              </div>

              <h5 className="text-sm font-semibold">{item.label}</h5>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IconSection;
