import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checklist from "./components/Checklist";
import Slideshow from "./components/Slideshow";
import { SlideshowData } from "./components/SlideshowData";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/checklist" exact element={<Checklist />} />
        <Route
          path="/slideshow"
          exact
          element={<Slideshow slides={SlideshowData} />}
        />
        <Route path="/game" exact element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
