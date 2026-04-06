import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import footerimg from "../../assets/footer-img.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        
        <p className="text-center md:text-left text-base font-exo">
          Copyright © 2025 Puneri Paltan
        </p>

        <div className="flex items-center gap-6">
          
          <div className="w-12 h-12 rounded-full cursor-pointer bg-[#4B4B5B] hover:bg-orange-400  flex items-center justify-center">
            <a><FaFacebookF className="text-black hover:text-white text-xl" /></a>
          </div>

          
          <div className="w-12 h-12 rounded-full cursor-pointer bg-[#4B4B5B] hover:bg-orange-400 flex items-center justify-center">
            <FaTwitter className="text-black hover:text-white text-xl" />
          </div>

          
          <div className="w-12 h-12 rounded-full cursor-pointer bg-[#4B4B5B] hover:bg-orange-400 flex items-center justify-center">
            <FaInstagram className="text-black hover:text-white text-xl" />
          </div>

          
          <div className="w-12 h-12 rounded-full cursor-pointer bg-[#4B4B5B] hover:bg-orange-400 flex items-center justify-center">
            <FaYoutube className="text-black hover:text-white text-xl" />
          </div>
        </div>

       
        <div className="flex flex-col items-center md:items-end leading-tight">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF7A00] text-black font-bold px-2 py-2px text-xs rounded">
              MANAGED
            </span>
            <span className="bg-[#FF7A00] text-black font-bold px-2 py-2px text-xs rounded">
              BY
            </span>
          </div>

          <img
            src={footerimg} 
            alt="Digital Alake"
            className="w-40 mt-1"
          />
        </div>
      </div>
    </footer>
  );
}
