import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Game from "./components/Game";
// import Slideshow from "./components/Slideshow";
import Checklist from "./components/Checklist";

import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/checklist" exact element={<Checklist />} />
      </Routes>
    </>
  );
}

export default App;
