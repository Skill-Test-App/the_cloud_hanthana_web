import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About/About";
import Rooms from "./pages/Rooms/Rooms";
import "./App.css";

function App() {
  return (
    <div>
      <div className="galleryblur"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
