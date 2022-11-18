import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Found from "./Pages/Found";
import MyItems from "./Components/NavBar/MyItems";
// IMPORTS
import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myitems" element={<MyItems />} />
          <Route path="/found" element={<Found/>} />
        </Routes>
      </main>
    </div>
  );
}
