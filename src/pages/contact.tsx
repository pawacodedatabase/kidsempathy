import { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTiktok } from "react-icons/fa";




const ContactUs = () => {
     const [form, setForm] = useState({ name: "", email: "", message: "" });

  const BOT_TOKEN = "8119231817:AAGAmxzBGY0vBPeVFM2hEEBbXkoAUGxm_HE";
  const CHAT_ID = "6837437455";

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const text = `
📩 *New Message From Kids Empathy Contact Form*

👤 Name: ${form.name}
📧 Email: ${form.email}
💬 Message: ${form.message}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("Telegram Error:", err);
    alert("Failed to send message.");
  }
};




  return (
    <div className="bg-gray-100 text-gray-800">
    

      {/* Hero */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We're here to listen. Kids Empathy Initiative is a charity organization dedicated to uplifting underprivileged children through compassion, education, and opportunity.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Reach out to us to support, volunteer, or collaborate. Together, we can build a better future for every child.
          </p>

          <div className="space-y-5 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-[#fa0262] text-xl"><FaLocationArrow/></span>
              <p>9 Albarka street , S A lawa close , olive primary school Bodija Ibadan</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#fa0262] text-xl"><FaPhone/></span>
              <p>08124094684</p>
             
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#fa0262] text-xl"><FaPhone/></span>
              <p>08062925195</p>
             
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#fa0262] text-xl"><FaPhone/></span>
              <p>08146125213</p>
             
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#fa0262] text-xl"><FaEnvelope/></span>
              <p>info@kidsempathyinitiative.org</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Follow Us:</p>
            <div className="flex space-x-4 text-[#fa0262] text-xl">
              <a href="https://www.facebook.com/share/1FYEnBpB6H/?mibextid=wwXIfr"><i className="fab fa-facebook"></i><FaFacebook/></a>
              <a href="https://www.tiktok.com/@kidsempathyinitiative?_t=ZM-8xdMuc7tq10&_r=1"><i className="fab fa-twitter"></i><FaTiktok/></a>
              <a href="https://www.instagram.com/kids_empathy_initiative_?igsh=MXMzaTdmNTVqNXkxZA=="><i className="fab fa-instagram"></i><FaInstagram/></a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
       <div className="bg-white shadow-lg p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-4">Send a Message</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail address"
              className="w-full p-2 border rounded"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full p-2 border rounded"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#fa0262] hover:bg-black text-white py-2 px-6"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
     <section className="max-w-6xl mx-auto px-4 pb-12">
  <iframe
    src="https://maps.google.com/maps?q=Akobo%20Ibadan&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="w-full h-64 border rounded-md"
    loading="lazy"
  ></iframe>
</section>


    
    </div>
  );
};

export default ContactUs;
