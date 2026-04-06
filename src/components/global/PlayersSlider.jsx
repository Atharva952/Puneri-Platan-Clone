import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function OtherPlayersSlider({ players = [] }) {
  console.log('accordian data', players);
  const flatPlayers = players.flat();
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);

  const visiblePlayers = flatPlayers.slice(index, index + cardsPerSlide);
  console.log("visible", visiblePlayers);

  const nextSlide = () => {
    setIndex((prev) =>
      prev + cardsPerSlide < flatPlayers.length ? prev + cardsPerSlide : 0
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - cardsPerSlide >= 0
        ? prev - cardsPerSlide
        : flatPlayers.length - cardsPerSlide
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 1024) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="w-full flex flex-col items-center py-8">
        <h1 className="text-[80px] font-bold text-orange-500 uppercase tracking-wide text-center">
          Other Players
        </h1>

        <div className="relative w-full max-w-[1400px] mt-3s flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-10 z-20 bg-orange-600 hover:bg-orange-700 text-white w-12 h-12 flex items-center justify-center shadow-lg rounded-full transition-colors duration-300"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="flex gap-1 overflow-hidden w-[90%] justify-center">
            {visiblePlayers.map((p) => (
              <Link
                key={p.id}
                to={`/profile/${p.id}`}
                className="
                  relative 
                  lg:w-[48%] w-[80%] min-h-[280px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[430px] bg-black 
                  shadow-xl 
                  transform 
                  flex flex-col justify-between 
                  overflow-hidden
                  lg:-skew-x-6
                  cursor-pointer
                  group
                  transition-all duration-300
                  hover:shadow-2xl hover:scale-[1.02]
                "
              >
                {/* Jersey Number */}
                <div className="absolute top-0 left-0 bg-orange-600 group-hover:bg-orange-700 w-20 h-20 flex items-center justify-center transition-colors duration-300">
                  <span className="text-white text-3xl font-bold">{p.jersey_no}</span>
                </div>

                {/* Player Info */}
                <div className="absolute bottom-5 left-5 sm:left-5 lg:left-10 md:left-8 z-10">
                  <h2 className="text-white text-3xl lg:text-3xl sm:text-3xl md:text-4xl font-light transition-transform duration-300 group-hover:translate-x-1">
                    {p.name.split(" ")[0]}
                  </h2>
                  <h2 className="text-white text-3xl lg:text-3xl sm:text-3xl md:text-4xl font-bold transition-transform duration-300 group-hover:translate-x-1">
                    {p.name.split(" ")[1] || ""}
                  </h2>
                  <p className="text-orange-500 text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    {p.position}
                  </p>
                </div>

                {/* Player Image */}
                <img
                  src={p.profile_image}
                  alt={p.name}
                  className="absolute bottom-12 sm:bottom-10 md:bottom-8 lg:bottom-0 right-2 sm:right-8 md:right-8 h-[180px] md:h-[325px] lg:h-[420px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-10 z-20 bg-orange-600 hover:bg-orange-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}