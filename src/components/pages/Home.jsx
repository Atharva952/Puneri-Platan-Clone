import homeimg from "../../assets/home-banner.webp";
import homeMobile from "../../assets/homepage-mobile-banner.webp";
import paltanImg from "../../assets/paltan-world-homepage.png";
import paltanMobile from "../../assets/paltan-world-banner-mobile_s12.png";
// import newsBaneer from "../../assets/news-banner.jpg";
// import newsBg from "../../assets/news-bg.jpg";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.webp";
import p4 from "../../assets/p4.webp";
import p5 from "../../assets/p5.webp";
import p6 from "../../assets/p6.webp";
import ticket from "../../assets/tickets.png";
import buyLogo from "../../assets/buy-ticket.png";
import Header from "../global/Header";
import Slider from "../global/Slider";
import Button from "../global/Button";
import Footer from "../global/Footer";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../global/ScrollAnimation";

function Home() {
    const [heroRef, showHero] = useScrollAnimation();
  const [newsletterRef, showNewsletter] = useScrollAnimation();
  return (
    <>
      <div className="min-h-screen relative">
        <div className="w-[90%] mx-auto lg:mt-7 md:mt-2">
          <Header />
        </div>

        <div className="relative z-10 -mt-24 md:-mt-32 lg:-mt-40">
          <picture>
            <source srcSet={homeMobile} media="(max-width: 480px)" />

            <source srcSet={homeMobile} media="(max-width: 768px)" />
            <img src={homeimg} alt="" className="w-full  object-cover" />
          </picture>
        </div>

        <section className="bg-black  px-10 flex justify-center items-center ">
          <div className="mt-12 pb-10 w-full md:w-[80%] sm:w-[85%]">
            <p className="text-white flex justify-center items-center gap-6 md:gap-10 text-lg md:text-2xl">
              <span className="tracking-widest">S</span>
              <span className="tracking-widest">C</span>
              <span className="tracking-widest">R</span>

              <span className="h-24 border-l-2 border-white "></span>

              <span className="tracking-widest">O</span>
              <span className="tracking-widest">L</span>
              <span className="tracking-widest">L</span>
            </p>

            <p className="mt-8 md:px-10 text-lg lg:text-5xl md:text-4xl font-bold text-justify text-orange-500 ">
              Puneri Paltan is currently one of the top performing teams in the
              Pro Kabaddi League. With a mix of unstoppable energy, honed-out
              skills and steely nerves, here's a force that consistently looks
              forward to perform better, challenge its opponents and make a
              difference.
            </p>
          </div>
        </section>
        <div className=" background-image relative md:pb-5 lg:pb-55  lg:pt-5 ">
          <div className="  py-20 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center  ">
            <div className="w-[35%] flex justify-center items-center" >
              <h1  className={`anime text-6xl -skew-x-8 font-bold sm:text-7xl md:text-8xl text-orange-500`}>
                PLAYERS
              </h1>
            </div>
            <div className="w-[65%] flex felx-col ">
              <Slider />
            </div>
          </div>
          <div className="btn flex flex-1 ml-8  md:ml-0  sm:justify-center sm:items-center pb-30">
           <Link to={'/players'} onClick={() => window.scrollTo({ top: 0 })}>
            <Button className="px-10 w-[200px] md:w-[220px] lg:w-[250px] text-center py-1.5 lg:px-24 lg:py-2 md:px-20 md:py-2">
              Enter
            </Button>
           </Link>
          </div>
        </div>
      </div>
      <section className="tickets w-full -translate-y-15 md:-translate-y-22  lg:-translate-y-25 flex justify-center items-center ">
        <div className="container  flex justify-center  object-fit ">
          <div className="box-1 py-5 relative -skew-x-12 bg-yellow-900 lg:w-[450px] md:w-[270px] sm:w-[230px] w-[130px]">
            <img src={buyLogo} alt="" className="skew-x-12" />
            <div className="btn absolute top-16 left-13 sm:top-23 sm:left-20  md:top-20 md:left-16   lg:top-42 lg:left-52 ">
             <a href="https://www.district.in/events/pkl-2025-chennai-team">
               <Button
                className="w-[70px] 
                  sm:w-[85px] 
                  md:w-[180px] 
                  lg:w-[230px]
                  py-0.5 
                  px-0.5
                  md:px-6 
                  lg:px-10
                  text-xs
                  md:text-sm
                  lg:text-xl

                  "
                style={{
                  // width: "230px",
                  pading: "10px 40px",
                  borderTop: "1px solid white",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                Buy Tickets
              </Button>
             </a>
            </div>
          </div>

          <div className="box-2 py-5  -skew-x-12 bg-black lg:w-[480px] md:w-[270px] sm:w-[230px] w-[130px]">
            <img src={ticket} alt="" className="skew-x-12" />
          </div>
        </div>
      </section>
      <section className="relative">
        <picture className="">
          <source srcSet={paltanMobile} media="(max-width: 480px)" />

          <source srcSet={paltanImg} media="(max-width: 768px)" />

          <img src={paltanImg} alt="" className="w-full object-cover" />
        </picture>

        <div className={`absolute top-70 right-6 sm:top-30 sm:right-12 md:top-32 md:right-20 lg:top-58 lg:right-40`} ref={heroRef}>
          <h1 className={`-translate-x-7 lg:-translate-x-20 text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-orange-500 ${showHero ? "slide-top" : "opacity-0"} `}>
            PALTAN
          </h1>
          <h1 className={`-translate-x-3 lg:-translate-x-8 text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white ${showHero ? "slide-bottom" : "opacity-0"}`}>
            WORLD
          </h1>
         <Link to={'/paltan-world'}  onClick={() => window.scrollTo({ top: 0 })}>
          <Button className="w-[180px] lg:w-[280px] sm:py-1 lg:py-2 mt-1.5 text-center ">
            Enter
          </Button>
         </Link>
        </div>
      </section>
     <section className="news-img h-[650px] sm:min-h-screen flex flex-col justify-center items-center">
        <div className="mt-25 mb-25 px-16 relative news-banner" ref={heroRef}>
          <div className="w-[270px] h-[450px] sm:w-[500px] sm:h-[410px] md:w-[650px] md:h-[560px] lg:w-[850px] lg:h-[530px] top-18 left-36 text-center flex flex-col justify-center items-center">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-orange-500 ${showHero ? "slide-top" : "opacity-0"}`}>
              PUNERI PALTAN
            </h1>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white ${showHero ? "slide-bottom" : "opacity-0"}`}>
              IN THE NEWS
            </h1>
          </div>
        </div>
        <Button className="w-[200px] sm:w-[230px] md:w-[260px] lg:[280px] py-1 sm:py-1.5 md:py-2 text-center -translate-y-28">
          Enter
        </Button>
      </section>

      <section className="">
        <div ref={newsletterRef}  className="w-[80%] flex justify-around bg-orange-500 py-1 px-4.5 sm:py-2 sm:px-5 md:py-2 md:px-7 lg:py-8 lg:px-8 -skew-x-12 -translate-y-2 md:-translate-y-4 mx-auto">
          <p  className={`text-white font-bold uppercase skew-x-12 text-xs md:text-lg lg:text-3xl transform-gpu ${showNewsletter ? "pop" : "scale-40"}`}>
            subscribe to our newsletter
          </p>

          <div className="flex skew-x-12">
            <input
              type="text"
              placeholder="Enter your email-id"
              className="w-[100px] sm:w-[220px] md:w-[220px] lg:w-[350px] text-xs bg-white py-0 px-0 sm:px-2 sm:py-0 md:px-2.5 md:py-2 lg:py-0 lg:px-3"
            />
            <Button className="w-[45px] lg:w-[55px] flex justify-center skew-x-0 ml-3 p-1 text-center">
              Go
            </Button>
          </div>
        </div>
      </section>
      <footer className=" gap-10 flex flex-col items-center justify-center">
        <h1 ref={newsletterRef} className={` mt-14 mb-3 uppercase  text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-orange-500 transform-gpu ${showNewsletter ? "pop" : "scale-50"} `}>
          Partners
        </h1>
        <div className="text-center">
          <img src={p1} alt="" />
          <p className="mt-4 text-lg">Principal Partner</p>
        </div>
        <div className="flex text-center gap-24 md:gap-40">
          <div className="">
            <img src={p2} alt="" />
            <p className="mt-4 text-lg">Principal Partner</p>
          </div>
          <div className="">
            <img src={p3} alt="" />
            <p className="mt-4 text-lg">Principal Partner</p>
          </div>
        </div>

        <div className="text-center">
          <img src={p4} alt="" />
          <p className="mt-0.5 text-lg">Principal Partner</p>
        </div>
        <div className="text-center">
          <img src={p5} alt="" />
          <p className=" text-lg">Principal Partner</p>
        </div>
        <div className="text-center">
          <img src={p6} alt="" />
          <p className="mt-1 text-lg">Principal Partner</p>
        </div>
      </footer>
      <Footer />
    </>
  );
}

export default Home;
