import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import gif from '../assets/23062025.gif'
import { FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";

const JSON_BIN_ID = "685a841e8a456b7966b4a80a";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: "male" | "female" | "unisex";
  sizes: string[];
}

const DonationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE_URL, {
          headers: { "X-Master-Key": API_KEY },
        });
        const found = res.data.record.products.find((p: Product) => p.id === Number(id));
        if (found) {
          setPost(found);
          setSelectedImage(found.images[0]);
        }
      } catch (err) {
        console.error("Error loading donation:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

 if (loading)
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img src={gif} alt="Loading..."  />
    </div>
  );
  if (!post) return <div className="text-center text-red-500 py-10">Donation post not found.</div>;

  const shareText = encodeURIComponent(`Support "${post.name}" by Kids Empathy Initiative. Learn more here: ${window.location.href}`);
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white">
      {/* Cover Image */}
      {/* Main Image Display */}
<img
  src={selectedImage}
  alt={post.name}
  className="w-full h-72 object-cover rounded-md border"
/>

{/* Thumbnail Image Gallery */}
<div className="flex gap-2 mt-4 overflow-x-auto">
  {post.images.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`Thumbnail ${idx + 1}`}
      onClick={() => setSelectedImage(img)}
      className={`w-20 h-20 object-cover rounded-md border cursor-pointer ${
        selectedImage === img ? "border-2 border-black" : "border-gray-300"
      }`}
    />
  ))}
</div>


      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">{post.name}</h1>
      <p className="text-sm text-gray-500 mt-2 mb-6">A featured cause by Kids Empathy Initiative</p>

      {/* Description */}
      <div className="prose prose-sm md:prose-lg max-w-none">
        <p className="text-black"   style={{ fontFamily: "'Poppins', sans-serif" }}>{post.description}</p>
        <p className="mt-3 text-sm text-gray-500">
          Your donation helps provide vital resources to children in underserved communities. We ensure transparency and consistent reporting to every donor.
        </p>
      </div>

      {/* Share + Donate */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Share */}
        <div className="flex gap-4">
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 p-3 rounded-full text-white"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full text-white"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Donate Button */}
        <button
          onClick={() => navigate("/donate")}
          className="bg-[#ff0060] hover:bg-black text-white px-6 py-3 rounded font-semibold shadow"
        >
          Donate Now
        </button>
      </div>

      {/* Back Link */}
     <div className="text-center mt-12">
  <Link
    to="/projects"
    className="text-sm text-gray-500 hover:text-black"
  >
    ← Back to All Causes
  </Link>
</div>
    </div>
  );
};

export default DonationDetail;
