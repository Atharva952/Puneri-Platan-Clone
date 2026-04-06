// import React, { useEffect } from 'react'
import playerImg from "../../assets/players_page_banner_desktop.png";
import bg from "../../assets/player-page-banner-bg.jpg";
import design from "../../assets/banner-title.png";
import Header from '../global/Header';
import { SliderPlayers } from '../../Redux/Utils/players.action';
// import axios from 'axios';
// import { useSelector ,useDispatch } from 'react-redux';
import PlayerCard from '../global/PlayerCard';

 function Players() {
  
    
  return (
    <>
      <div className="sticky top-0 z-50">
          <div className="w-[90%] mx-auto lg:mt-7 md:mt-2 ">
            <Header />
          </div>
        </div>
  
     <section className="relative z-10 -mt-24 md:-mt-32 lg:-mt-40 w-full h-[350px] md:h-[450px] lg:h-[650px] overflow-hidden">

      
      <img
        src={playerImg}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

     
      <img
        src={bg}
        alt="background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="player-page-img absolute inset-0 ">
         
      </div>

      
      <img
        src={design}
        alt="design"
        className="hidden md:block absolute left-6 md:left-20 
                   top-1/2 -translate-y-1/2 w-[200px] md:w-[350px] 
                   opacity-50 pointer-events-none z-10"
      />

      <h1
        className="absolute left-6 md:left-20 
                   top-30 lg:top-80 md:top-1/2 md:-translate-y-1/2 
                   text-white font-extrabold z-20
                   text-4xl lg:text-8xl md:text-6xl tracking-wide"
      >
        PLAYERS
      </h1>

     
      <img
        src={playerImg}
        alt="player"
        className="  absolute md:right-0 md:bottom-0 top-20 -right-10
                   h-[85%] lg:h-[80%] object-contain z-20"
      />
    </section>
     <section className="w-full bg-[#e8ebf0] py-10">
      
      
     


            
       <PlayerCard  category_id={1} />
       <div className="mt-20 py-10 bg-white">
        <PlayerCard  category_id={2} />
       </div>
       <div className="mt-10 ">
        <PlayerCard  category_id={3} />
       </div>

            

    </section>
    </>
  )
}

export default Players