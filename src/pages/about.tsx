import ceo from '../assets/ceo.jpg'
import StatsSection from '../components/stat';

const AboutUs = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-gray-400 text-sm mt-2">Home / About Us</p>
      </section>

      {/* About & Image */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <img
          src={ceo}
          alt="CEO of Kids Empathy Initiative"
          className="w-full rounded-lg shadow-lg"
        />

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">We Always Make The Best</h2>
          <p className="text-gray-300 mb-6">
           Our major focus is on the needy kids in Nigeria, and African continent  .. to make sure they have quality education , shelter , sound health and good life in general . And we are willing to extend this good cause to every lacking kids around the  world      </p>
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-transparent hover:text-white border border-white transition">
            Contact Us
          </button>
        </div>
      </section>

    <StatsSection/>

      {/* CTA */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/images/kid-cta.jpg')" }}>
        <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
       
      </section>
    </div>
  );
};

export default AboutUs;
