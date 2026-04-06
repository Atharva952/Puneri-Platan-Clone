// import { useEffect } from "react"
import { useEffect } from "react";
import design from "../../assets/banner-title.png";
import model from "../../assets/puneri-tv-model.png";
import { useDispatch, useSelector } from "react-redux";
import { puneriTV } from "../../Redux/Utils/players.action";
import Footer from "./Footer";
import Header from "./Header";
const PuneriTv = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.puneriTv);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    dispatch(puneriTV());
  }, [dispatch]);
  console.log(data);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-[90%] mx-auto lg:mt-7 md:mt-2 ">
          <Header />
        </div>
      </div>

      <div
        className="puneri-tv-bg relative z-10 -mt-24 md:-mt-32 lg:-mt-40 w-full flex justify-center items-baseline-last p-35
     "
      >
        <img src={design} alt="" />
        <img
          src={model}
          alt=""
          className="h-[325px] translate-y-35 hidden lg:block "
        />
        <h1 className=" text-5xl md:text-8xl lg:text-8xl text-white uppercase font-bold absolute top-45 md:top-60 lg:top-70 lg:left-45">
          Puneri Tv
        </h1>
      </div>
      <section>
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 px-4">
           
            <div className="relative">
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 sm:border-6 md:border-8 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>

           
            <div className="mt-6 sm:mt-8 text-center px-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 animate-pulse">
                Loading Puneri Tv
              </h2>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((a) => (
            <div key={a.id} className="p-8">
              <iframe
                src={getEmbedUrl(a.url)}
                title={a.name}
                className="w-full h-[400px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="strip flex mt-4">
                <div className="bg-[#ff4900] w-full h-13 py-2 md:py-5 px-4 -skew-x-14 ">
                  <h3 className="text-white text-sm md:text-md">{a.name}</h3>
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
};

export default PuneriTv;
