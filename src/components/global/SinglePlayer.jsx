import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlePlayer } from "../../Redux/Utils/players.action";
import OtherPlayersSlider from "./PlayersSlider";
import { playersAccordinn } from "../../Redux/Utils/players.action";
import Header from "./Header";
import Footer from "./Footer";

export default function SinglePlayer() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.SinglePlayer);
  const { data: players } = useSelector((state) => state.accordianPlayers);

  useEffect(() => {
    if (id) {
      window.scrollTo(0, 0);
      dispatch(singlePlayer(id));
    }
  }, [dispatch, id, location.pathname]);

  useEffect(() => {
    dispatch(playersAccordinn());
  }, [dispatch]);

  console.log("Current Player Data:", data);
  console.log("All Players:", players);
  console.log("Loading:", loading);

  return (
    <>
      
      {loading && (
        <div className=" min-h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center z-9999 overflow-hidden">
       
          <div className="relative">
          
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 sm:border-6 md:border-8 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  
          </div>
        
          <div className="mt-6 sm:mt-8 text-center px-4">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 animate-pulse">
              Loading Player Profile
            </h2>
         
          </div>
        </div>
      )}

      <div className="w-[90%] mx-auto lg:mt-7 md:mt-2">
        <Header />
      </div>
      {data.map((a) => (
        <section key={a.id}>
          <div className="mx-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="img flex justify-center animate-slide-in-left">
              <img
                src={a?.full_image}
                alt={a?.name}
                className="min-h-screen object-cover"
              />
            </div>

            <div className="py-16 md:px-5 animate-slide-in-right">
              <table className="w-full text-left border-collapse lg:mb-25">
                <thead>
                  <tr className="">
                    <th className="">
                      <h3 className="w-[120px] sm:w-[180px] md:w-[200px] lg:w-[280px] py-2 px-3 md:ml-14 lg:ml-5 mb-5 bg-orange-600 text-white -skew-x-12 text-center uppercase">
                        jersey No.
                      </h3>
                    </th>
                    <th className="">
                      <h3 className="w-[120px] sm:w-[180px] md:w-[200px] lg:w-[280px] py-2 px-3 ml-2 mb-5 bg-orange-600 text-white -skew-x-12 text-center uppercase">
                        position
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="md:text-center">
                    <td className="py-2 md:pr-10 text-black text-xl">
                      {a.jersey_no}
                    </td>
                    <td className="py-2 md:pr-10 text-black text-xl">
                      {a.position}
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="w-full text-left border-collapse mr-5 sm:mr-5">
                <thead>
                  <tr className="">
                    <th>
                      <h3 className="mt-5 md:mt-10 lg:mt-14 w-[120px] sm:w-[180px] md:w-[200px] lg:w-[280px] py-2 px-3 md:ml-12 mb-5 bg-orange-600 text-white -skew-x-12 text-center uppercase">
                        vitals
                      </h3>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="py-2 md:px-14 font-bold text-gray-700 text-xl">
                      Name
                    </td>
                    <td className="py-2 pr-18 md:px-14 text-right text-xl">
                      {a.name}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-2 md:px-14 font-bold text-gray-700 text-xl">
                      Date of Birth
                    </td>
                    <td className="py-2 pr-18 md:px-14 text-right text-xl">
                      {a?.date_of_birth}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 md:px-14 font-bold text-gray-700 text-xl">
                      Nationality
                    </td>
                    <td className="py-2 pr-18 md:px-14 text-right text-xl">
                      {a?.nationality}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="statistics text-center">
            <h1 className="py-8 text-orange-500 font-bold tracking-wide uppercase text-5xl sm:text-6xl md:text-7xl lg:text-7xl">
              statistics
            </h1>
          </div>

          <div className="Overall py-10 lg:py-20 bg-gray-200 flex flex-col lg:flex-row lg:gap-10">
            <div className="mb-18 flex">
              <div className="bg-[#ff4900] w-[450px] lg:w-[500px] h-14 md:h-18 lg:h-20 py-3 -skew-x-14 -translate-x-8">
                <h2 className="text-white text-end mr-5 font-bold text-2xl tracking-wide uppercase">
                  overall
                </h2>
              </div>
              <span className="w-2 mr-2 h-14 md:h-18 lg:h-20 bg-[#ff4900] -skew-x-14 -translate-x-5"></span>
              <span className="w-1.5 mr-2 h-14 md:h-18 lg:h-20 bg-[#ff4900] -skew-x-14 -translate-x-4"></span>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col items-center">
                <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-5 py-2.5 bg-white text-4xl font-semibold text-center animate-pop">
                  {a.Matches_played}
                </h1>
                <h3 className="uppercase mt-3">Matches played</h3>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="w-[110px] md:w-[130px] lg:w-[145px] px-3 py-2.5 bg-white text-4xl font-semibold text-center animate-pop animation-delay-100">
                  {a.total_ponints_earned}
                </h1>
                <h3 className="uppercase mt-3">TOTAL POINTS EARNED</h3>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-5 py-2.5 bg-white text-4xl font-semibold text-center animate-pop animation-delay-200">
                  {a.most_points_in_a_match}
                </h1>
                <h3 className="uppercase mt-3">MOST POINTS IN A MATCH</h3>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-3 py-2.5 bg-white text-3xl font-semibold text-center animate-pop animation-delay-300">
                  {a.not_out_percentage}
                </h1>
                <h3 className="uppercase mt-3">NOT OUT PERCENTAGE</h3>
              </div>
            </div>
          </div>

          <div className="Raid py-10 lg:py-20 bg-white flex flex-col lg:flex-row">
            <div className="mb-18 flex">
              <div className="bg-[#ff4900] w-[450px] lg:w-[500px] h-14 md:h-18 lg:h-20 py-3 -skew-x-14 -translate-x-8">
                <h2 className="text-white text-end mr-5 font-bold text-2xl tracking-wide uppercase">
                  raid
                </h2>
              </div>
              <span className="w-2 mr-2 h-14 md:h-18 lg:h-20 bg-[#ff4900] -skew-x-14 -translate-x-5"></span>
              <span className="w-1.5 mr-2 h-14 md:h-18 lg:h-20 bg-[#ff4900] -skew-x-14 -translate-x-4"></span>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:ml-8">
                <div className="flex flex-col items-center">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-5 py-2.5 bg-gray-200 text-4xl font-semibold text-center animate-pop">
                    {a.no_of_super_raids}
                  </h1>
                  <h3 className="uppercase mt-3">No of super Raids</h3>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-5 py-2.5 bg-gray-200 text-4xl font-semibold text-center animate-pop animation-delay-100">
                    {a.super_10s}
                  </h1>
                  <h3 className="uppercase mt-3">Super 10s</h3>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-3 py-2.5 bg-gray-200 text-4xl font-semibold text-center animate-pop animation-delay-200">
                    {a.avg_raid_points}
                  </h1>
                  <h3 className="uppercase mt-3">Avg. Raid points</h3>
                </div>
              </div>

              <span className="hidden lg:block border border-gray-600"></span>

              <div className="lg:flex justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-[230px] h-[230px] rounded-full bg-orange-500 flex justify-center items-center animate-pop animation-delay-300">
                    <h1 className="w-[190px] h-[190px] rounded-full bg-white flex justify-center items-center flex-col text-2xl uppercase font-semibold">
                      total raid
                      <h3 className="text-6xl font-semibold">207</h3>
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-6 lg:mt-0">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-3 py-2.5 bg-gray-200 text-3xl font-semibold text-center animate-pop animation-delay-400">
                    {a.not_out_percentage}
                  </h1>
                  <h3 className="uppercase mt-3">RAID STRIKE RATE</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="Tackels py-10 lg:py-20 bg-gray-200 flex flex-col lg:flex-row">
            <div className="mb-18 flex">
              <div className="bg-[#ff4900] w-[450px] lg:w-[500px] h-14 md:h-18 lg:h-20 py-3 -skew-x-14 -translate-x-8">
                <h2 className="text-white text-end mr-5 font-bold text-2xl tracking-wide uppercase">
                  Tackles
                </h2>
              </div>
              <span className="w-2 mr-2 h-14 md:h-18 lg:h-20 bg-[#ff4900] -skew-x-14 -translate-x-5"></span>
              <span className="w-1.5 mr-2 h-14 md:h-18 lg:h-20 bg-[#ff4900] -skew-x-14 -translate-x-4"></span>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <div className="grid grid-cols-1 gap-5 lg:ml-22">
                <div className="flex flex-col items-center">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-5 py-2.5 bg-white text-4xl font-semibold text-center animate-pop">
                    {a.no_of_super_tackles}
                  </h1>
                  <h3 className="uppercase mt-3">No. of super tackles</h3>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-5 py-2.5 bg-white text-4xl font-semibold text-center animate-pop animation-delay-100">
                    {a.total_tacle_points}
                  </h1>
                  <h3 className="uppercase mt-3">Total tackle points</h3>
                </div>
              </div>

              <span className="hidden lg:block border lg:ml-20 border-gray-600"></span>

              <div className="lg:flex justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <div
                    className="w-[230px] h-[230px] rounded-full flex justify-center items-center shadow-xl animate-pop animation-delay-200"
                    style={{
                      background: `conic-gradient(
                        #0B0D2B 0deg ${(a.total_tacle_points / 100) * 360}deg, 
                        #FF7300 ${(a.total_tacle_points / 100) * 360}deg 360deg
                      )`,
                    }}
                  >
                    <div className="w-[200px] h-[190px] rounded-full bg-white flex flex-col justify-center items-center">
                      <h2 className="uppercase tracking-widest text-xl font-semibold">
                        total tackle
                      </h2>
                      <h3 className="text-6xl font-bold mt-2">
                        {a.total_tacle_points}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-6 lg:mt-0">
                  <h1 className="w-[110px] md:w-[130px] lg:w-[135px] px-3 py-2.5 bg-white text-3xl font-semibold text-center animate-pop animation-delay-300">
                    {a.not_out_percentage}
                  </h1>
                  <h3 className="uppercase mt-3">TACKLE STRIKE RATE</h3>
                </div>
              </div>
            </div>
          </div>

          <OtherPlayersSlider players={players} />
        </section>
      ))}
      <Footer />
    </>
  );
}