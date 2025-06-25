import { ArrowRight } from "lucide-react";
import cause1 from "../assets/cause1.jpg";
import cause2 from "../assets/cause2.jpg";

const CausesSection = () => {
  const cards = [
    {
      title: "OUR GOAL",
      text: "Our major focus is on the needy kids in Nigeria, and African continent  .. to make sure they have quality education , shelter , sound health and good life in general . And we are willing to extend this good cause to every lacking kids around the  world.",
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
    <section className="w-full py-12 bg-white">
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="text-white px-6 py-10 rounded-lg flex flex-col justify-between h-[320px] relative overflow-hidden"
            style={
              card.bgImage
                ? {
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {
                    backgroundColor: card.bgColor,
                  }
            }
          >
            {/* Overlay for text readability */}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default CausesSection;
