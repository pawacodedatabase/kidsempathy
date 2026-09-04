import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import ceo from '../assets/ceo.jpg'
// import ceo2 from '../assets/ceo2.jpg'
import StatsSection from '../components/stat';
import OurTeam from '../components/ourteam';

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
          <p className='text-2xl font-semibold'>Fasae Dorcas Titilope 
</p>
          <h2 className="text-3xl font-thin mb-4">
FOUNDER</h2>

        <p className="text-gray-300 mb-6">
          Kids Empathy Initiative was born out of a simple but powerful belief: every child deserves love, care, dignity, and the opportunity to have a better future.</p>
<p className="text-gray-300 mb-6">
There are so many children in our communities who have dreams and great potential, but sometimes lack the basic resources they need to learn, grow, and thrive. A school bag, books, pencils, clothing, food, or even a simple act of kindness may seem small to us, but to a child, it can mean the world.
</p>

<p className="text-gray-300 mb-6">
At KEI, we believe that no child should feel forgotten or left behind simply because of their circumstances.
</p>

<p className="text-gray-300 mb-6">
  
Our mission is not just to give relief materials. We want to give children hope. We want them to know that there are people who care about them and believe in their future.
</p>

<p className="text-gray-300 mb-6">

  
Today, as we reach out to these children, I want us to remember that kindness is powerful. We may not be able to change the whole world at once, but we can change the world of one child. And when we continue doing that, one child at a time, we create a better society for everyone.
</p>


<p className="text-gray-300 mb-6">

  

I also want to appeal to individuals, organisations, businesses, and everyone who has the capacity to support this vision: please join us.
</p>


<p className="text-gray-300 mb-6">


Your contribution, no matter how big or small, can help put a smile on a child’s face, keep a child in school, and remind a child that their dreams matter.



</p>

<p className="text-gray-300 mb-6">

  As the Founder of KEI, I am committed to building an initiative that does more than provide temporary assistance. I want KEI to become a platform where children are supported, encouraged, empowered, and given opportunities to become the best versions of themselves.
</p>


<p className="text-gray-300 mb-6">


To every volunteer, donor, supporter, and well-wisher, thank you for believing in this vision.


</p>

<p className="text-gray-300 mb-6">

Together, we can raise a generation that understands empathy, compassion, kindness, and the importance of helping others.


</p>

<p className="text-gray-300 mb-6">

  Let us continue to care, give, empower, and make a difference.

</p>


<p className="text-gray-300 mb-6">

Because sometimes, the smallest act of kindness can become the biggest reason a child believes in tomorrow.

</p>

<p className="text-gray-300 mb-6">

  
Thank you, and God bless you all.
</p>


<p className="text-gray-300 mb-6">
  
Fasae Dorcas Titilope
Founder, Kids Empathy Initiative (KEI)  
</p>

          <div className="flex space-x-4 justify-center items-center mt-6">
      <a href="https://www.facebook.com/share/1FYEnBpB6H/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300">
        <FaFacebook className="w-5 h-5" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
         className="p-2 bg-green-400 hover:bg-green-500 text-white rounded-full transition duration-300">
        <FaWhatsapp className="w-5 h-5" />
      </a>
    
    </div>
        </div>
      </section>
      {/* About & Image */}
    
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
       

        {/* About Text */}
        {/* <div>
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
        /> */}
      </section>
 <OurTeam/>

    <StatsSection/>
   
      {/* CTA */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/images/kid-cta.jpg')" }}>
        <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
       
      </section>
    </div>
  );
};

export default AboutUs;
