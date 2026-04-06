import React from "react";
import platanBg from "../../assets/paltan-world-homepage.png";
import platanBgMobile from "../../assets/paltan-world-banner-mobile_s12.png";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
function PaltanWorld() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-[90%] mx-auto lg:mt-7 md:mt-2 ">
          <Header />
        </div>
      </div >
    <div className="min-h-screen">
        <div className="relative z-10 -mt-24 md:-mt-32 lg:-mt-40 ">
        {/* <img src={platanBg} alt="" /> */}
        <picture>
          <source srcSet={platanBgMobile} media="(max-width: 480px)" />

          <source srcSet={platanBg} media="(max-width: 768px)"/>
          <img src={platanBg} alt="" className="w-full  object-cover" />
        </picture>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Link to={"/puneri-tv"}   onClick={() => window.scrollTo({ top: 0 })}>
          <div className="paltan-img1 h-[380px] flex justify-center items-center ">
            <h1 className="text-5xl md:text-6xl font-bold uppercase text-white tracking-wide">
              puneri tv
            </h1>
          </div>
        </Link>
        <Link to={"/gallery"}  onClick={() => window.scrollTo({ top: 0 })}>
          <div className="paltan-img2 h-[380px] flex justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-bold uppercase text-white tracking-wide">
              gallery
            </h1>
          </div>
        </Link  >
        <Link to={'/page-not-found'} onClick={() => window.scrollTo({ top: 0 })}>
        <div className="paltan-img3 h-[380px] flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase text-white tracking-wide">
            wallpapers
          </h1>
        </div>
        </Link>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default PaltanWorld;
