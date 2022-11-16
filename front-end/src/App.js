import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

// IMPORTS
import Home from "./Pages/Home";
import New from "./Pages/New";
import About from "./Pages/About";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New user={user}/>}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
