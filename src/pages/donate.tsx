import  { useState } from 'react';
import man from '../assets/159482c99b0367004f8a7e7313a4eed6.jpg'

import gtb from '../assets/gtb.png'
import opay from '../assets/Polaris-Bank-Limited.png'


const DonatePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    amount: '',
  });

  const BOT_TOKEN = '8119231817:AAGAmxzBGY0vBPeVFM2hEEBbXkoAUGxm_HE';
  const CHAT_ID = '6837437455';

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    const message = `
🧡 *New Donation Received!*
--------------------------
👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💰 Amount: $${formData.amount}
    `;
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
      alert('Donation sent! Thank you!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        amount: '',
      });
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background with overlay */}
     <div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: `url(${man})` }}
></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-10">
        <h1 className="text-2xl text-[#fa0262] tracking-wide md:text-4xl  p-8  text-center mb-4"  style={{ fontFamily: "'Lobster', cursive" }}
      >
          DONATE & HELP A CHILD FOR EDUCATION
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#fa0262] p-6 rounded-lg max-w-xl w-full text-black shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4"
        >
         <h2 className="col-span-2 text-xl font-bold text-center">DONATE NOW </h2>
          <p className='col-span-2 text-sm text-center'>Note: This form is optional</p> 
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
      
          <input
            type="number"
            name="amount"
            placeholder="Amount (N)"
            value={formData.amount}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            SUBMIT
          </button>
        </form>

        {/* Account Details */}
        <div className="mt-10 bg-white/10 p-4 rounded-lg text-center w-full max-w-lg">
          <h3 className="text-xl font-bold mb-2">Account Details</h3>
         <div className="mt-10 bg-white/10 p-4 rounded-lg text-center w-full max-w-lg">
  <h3 className="text-xl font-bold mb-4 text-white">Account Details</h3>

  {/* GTBank */}
  <div className="flex items-center gap-3 bg-white/20 p-3 rounded mb-4">
    <img src={gtb} alt="GTBank Logo" className="w-10 h-10 object-contain" />
    <div className="text-left">
      <p className="font-semibold">Bank: FCMB</p>
      <p>Account Name: KIDS EMPATHY INITIATIVE</p>
      <p>Account Number: <strong>2006337756</strong> </p>
    </div>
  </div>

  {/* Opay */}
  <div className="flex items-center gap-3 bg-white/20 p-3 rounded">
    <img src={opay} alt="Opay Logo" className="w-10 h-10 object-contain" />
    <div className="text-left">
      <p className="font-semibold">Bank: Polaris</p>
      <p>Account Name: Kids Empathy Initiative</p>
      <p>Account Number: 4092099444</p>
    </div>
  </div>
</div>

        </div>

        {/* Who We Are */}
        <div className="mt-10 text-center max-w-2xl text-sm text-gray-200">
          <h4 className="text-lg font-bold mb-2">WHO WE ARE</h4>
          <p>
            We are a non-profit organization committed to supporting education for underprivileged children across Africa.
            Your donation helps provide school supplies, tuition, and safe learning environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
