import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";

// IMPORTS
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
