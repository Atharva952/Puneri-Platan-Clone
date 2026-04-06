import React, { useState } from "react";
import design from "../../assets/banner-title.png";
import model from "../../assets/model-2.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { seansonsData } from "../../Redux/Utils/players.action";
import Footer from "./Footer";
import Header from "./Header";

export default function Gallery() {
  const dispatch = useDispatch();
  const [seasonValue, setSeasonValue] = useState(0);
  const [activeSeason, setActiveSeason] = useState(0);

  const { data, loading } = useSelector((state) => state.seasonData);
  console.log("data", data);

  const handleSeason = (value) => {
    setSeasonValue(value);
    setActiveSeason(value);
  };

  useEffect(() => {
    dispatch(seansonsData());
  }, [dispatch]);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-[90%] mx-auto lg:mt-7 md:mt-2 ">
          <Header />
        </div>
      </div>
      <div
        className="puneri-gallery-bg relative z-10 -mt-24 md:-mt-32 lg:-mt-40 w-full flex justify-center items-baseline-last p-35
        "
      >
        <div className="relative">
          <img src={design} className="" alt="" />
          <h1 className=" text-5xl md:text-8xl lg:text-8xl text-white uppercase font-bold absolute top-8 -left-10  md:top-25 lg:left-20">
            gallery
          </h1>
        </div>
        <img
          src={model}
          alt=""
          className="h-[325px] translate-y-35 hidden lg:block "
        />
      </div>
      <section className=" p-25  flex justify-center flex-col ">
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 px-4">
           
            <div className="relative">
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 sm:border-6 md:border-8 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>

           
            <div className="mt-6 sm:mt-8 text-center px-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 animate-pulse">
                Loading Gallery
              </h2>
            </div>
          </div>
        )}
        <div className="btns flex justify-center items-center gap-5 p-5">
          {["season 5", "season 7", "season 8"].map((season, index) => (
            <>
              <button
                onClick={() => handleSeason(index)}
                className={`
                     w-[120px] md:w-[180px] lg:w-[220px]
                     p-2 -skew-x-12 transition-all duration-300
                     ${activeSeason === index ? "bg-[#ff4900]" : "bg-gray-600"}
                   `}
              >
                <span className="skew-x-12 text-xl text-white font-semibold">
                  {season}
                </span>
              </button>
            </>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data?.[seasonValue]?.data?.map((a) => (
            <div key={a.id} className="p-8">
              <img
                src={a.main_image}
                alt={a.name}
                className="w-full h-[400px] object-cover"
              />

              <div className="strip flex mt-4">
                <div className="bg-[#ff4900] w-full h-13 py-5 px-4 -skew-x-14 ">
                  <h3 className="text-white text-md">{a.name}</h3>
                </div>

                <span className="w-2 mr-2 h-13 bg-[#ff4900] -skew-x-14 translate-x-1.5"></span>
                <span className="w-1.5 mr-2 h-13 bg-[#ff4900] -skew-x-14  translate-x-1"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
