import Home from "./components/home";
import About from "./components/about";
import Donate from "./components/donation";
import Services from "./components/services";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/donate" index element={<Donate />} />
        <Route path="/service" index element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
