import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

// IMPORTS
import Home from "./Pages/Home";
import About from "./Pages/About";
import Index from "./Pages/Index";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="found" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
