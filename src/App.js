import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Game from "./components/Game";
import Slideshow from "./components/Slideshow";
import Checklist from "./components/Checklist";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/checklist" exact element={<Checklist />} />
        <Route path="/slideshow" exact element={<Slideshow />} />
        <Route path="/game" exact element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
