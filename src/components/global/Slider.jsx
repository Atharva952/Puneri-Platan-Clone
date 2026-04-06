import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
// import axiosNew from '../../Redux/Utils/axiosNew';
import { useEffect, useState } from "react";
import { SliderPlayers } from "../../Redux/Utils/players.action";
import Button from "./Button";
import "swiper/css/navigation";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { playersAccordinn } from "../../Redux/Utils/players.action";
// import { useParams } from "react-router-dom";

export default function Slider() {
  //  const { id } = useParams()
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.SliderPlayers);
  // const { data } = useSelector((state) => state.SinglePlayer);
  const {data} = useSelector((state)=>state. accordianPlayers)

  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=>{
      dispatch(playersAccordinn());
    },[dispatch])

  // useEffect(() => {
  //   dispatch(SliderPlayers(2));
  //   console.log("runing");
  // }, [dispatch]);


    // useEffect(() => {
    //   dispatch(singlePlayer(playerId));
    // }, [dispatch, playerId]);

  console.log("Data:", data);
  // const data = players.flat();

  useEffect(() => {
    if (swiperRef && data.length > 0) {
      swiperRef.autoplay.start();
    }
  }, [swiperRef, data]);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        // slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
      >
        {data[0]?.map((item, index) => (
          <SwiperSlide key={item.id}>
           <Link to={`/profile/${item.id}`}>
            <div
              className={`
      flex flex-col items-center transition-all duration-800 ease-out
      ${
        activeIndex === index
          ? "scale-75 z-10 md:scale-95 sm:scale-100 lg:scale-95 brightness-110"
          : "scale-75 opacity-60"
      }
    `}
            >
              <div
                className="
      w-[380px] sm:w-[420px] md:w-[420px] lg:w-[320px]
      mt-8 lg:mt-0 rounded-full overflow-hidden 
      transition-all duration-800
    "
              >
                <img
                  src={item.profile_image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="h-20 flex flex-col justify-end items-center relative overflow-visible">
                <h3
                  className={`
      transition-all duration-500
      ${
        activeIndex === index
          ? "text-2xl text-white translate-y-2"
          : "text-sm text-white/70 translate-y--10px"
      }
    `}
                >
                  {item.name}
                </h3>

                <h5
                  className={`
      transition-all duration-500 text-orange-400
      ${
        activeIndex === index
          ? "opacity-100 text-lg translate-y-1"
          : "opacity-0 translate-y-0"
      }
    `}
                >
                  {item.cat_name}
                </h5>
              </div>
            </div>
           </Link>
          </SwiperSlide>
        ))}

       
      </Swiper>

       <div className="absolute bottom-28 lg:bottom-80 right-0 flex gap-3 lg:gap-6  p-3">
          <button className="prev-btn bg-gray-200 text-black px-4 py-2 rounded-2xl hover:bg-black/70 transition">
           <FaCaretLeft />
          </button>

          <button className="next-btn bg-gray-200 text-black px-4 py-2 rounded-2xl hover:bg-black/70 transition">
            <FaCaretRight />
          </button>
        </div>
    </>
  );
}
