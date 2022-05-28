import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Faq from "./components/faq/Faq";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import StarMaker from "./components/starMaker/StarMaker";
import StarsGlowsKit from "./components/starsGlowsKit/StarsGlowsKit";

const App = () => {
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stars_glows_kit" element={<StarsGlowsKit />} />
          <Route path="/star_maker" element={<StarMaker />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default App;
