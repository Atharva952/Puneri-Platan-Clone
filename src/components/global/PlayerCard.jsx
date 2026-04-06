import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { SliderPlayers } from "../../Redux/Utils/players.action";
import { allPlayers } from "../../Redux/Utils/players.action";
import { Link } from "react-router-dom";



function PlayerCard({ category_id }) {
  const dispatch = useDispatch();
  const {data}  = useSelector((state) => state.Category);

  useEffect(() => {
    dispatch(allPlayers(category_id));
  }, [dispatch, category_id]);

  // Read players from that specific category
  const players = data[category_id] || [];
  // console.log(players);
  console.log(data);


  

  return (
    <>
      <div className="mb-18 flex">
        <div className="bg-[#ff4900]  w-[400px] lg:w-[500px] h-14 py-3 -skew-x-14 -translate-x-8">
          <h2 className="text-white text-end mr-5 font-bold text-2xl tracking-wide uppercase">
            {players[0]?.cat_name || ""}
          </h2>
        </div>

        <span className="w-2 mr-2 h-14 bg-[#ff4900] -skew-x-14 -translate-x-5"></span>
        <span className="w-1.5 mr-2 h-14 bg-[#ff4900] -skew-x-14 -translate-x-4"></span>
      </div>

      
      <div className="mx-32 px-5 gap-y-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center">
        {players.map((player) => (
         <Link to={`/profile/${player.id }` }>
          <div
            key={player.id}
            className="group flex flex-col justify-center items-center text-center cursor-pointer"
          >
            <div
              className="
        relative 
        w-[380px] h-[380px]       
        sm:w-[330px] sm:h-[330px]              
        md:w-[280px] md:h-[280px]  
        lg:w-[280px] lg:h-[280px]  
        
        rounded-full 
        
        flex items-end justify-center overflow-visible
        transition-all duration-300 
        group-hover:scale-110 group-hover:-translate-y-2
      "
            >
              <img
                src={player.profile_image}
                alt={player.name}
                className="absolute bottom-0 w-[140%] object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <p className="text-2xl font-light">{player.name}</p>
            </div>

            <p className="mt-1 text-orange-500 text-lg">{player.position}</p>
          </div>
         </Link>
        ))}
      </div>
    </>
  );
}

export default PlayerCard;
