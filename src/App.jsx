import Header from "./components/global/Header";
import Button from "./components/global/Button";
import { Route, Routes } from "react-router-dom";
import PlatanWorld from "./components/pages/PaltanWorld";
import Players from "./components/pages/Players";
import Home from "./components/pages/Home";
import Slider from "./components/global/Slider";
import SinglePlayer from "./components/global/SinglePlayer";
import PuneriTV from "./components/global/PuneriTv";
import Gallery from "./components/global/Gallery";
import PageNotFound from "./components/global/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/paltan-world" element={<PlatanWorld />} />
        <Route path="/profile/:id" element={<SinglePlayer />} />
        <Route path="/puneri-tv" element={<PuneriTV />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>

      {/* <Slider/> */}

      {/* <Button/> */}
    </>
  );
}

export default App;
