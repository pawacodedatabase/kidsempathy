import { FaFacebook, FaTwitter } from 'react-icons/fa';
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
          <div className="flex space-x-4 justify-center items-center mt-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300">
        <FaFacebook className="w-5 h-5" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300">
        <FaTwitter className="w-5 h-5" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white rounded-full transition duration-300">
        <FaTwitter className="w-5 h-5" />
      </a>
    </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
       

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">We Always Make The Best</h2>
          <p className="text-gray-300 mb-6">
           Our major focus is on the needy kids in Nigeria, and African continent  .. to make sure they have quality education , shelter , sound health and good life in general . And we are willing to extend this good cause to every lacking kids around the  world      </p>
           <div className="flex space-x-4 justify-center items-center mt-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300">
        <FaFacebook className="w-5 h-5" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition duration-300">
        <FaTwitter className="w-5 h-5" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white rounded-full transition duration-300">
        <FaTwitter className="w-5 h-5" />
      </a>
    </div>
        </div>


         <img
          src={ceo}
          alt="CEO of Kids Empathy Initiative"
          className="w-full rounded-lg shadow-lg"
        />
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
