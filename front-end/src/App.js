import NavBar from "./Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

// IMPORTS
import Home from "./Pages/Home";
import New from "./Pages/New";
import About from "./Pages/About/About";
import Index from "./Pages/Index";

export default function App() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("Current_User");
    const authenticated = window.localStorage.getItem("Authenticated");

    if (data !== null && authenticated !== null) {
      setUser(JSON.parse(data));
      setAuthenticated(JSON.parse(authenticated));
    }

    getUsers();

    const UsersInterval = setInterval(() => {
      getUsers();
    }, 5000);

    return () => clearInterval(UsersInterval);
  }, []); // eslint-disable-line

  const getUsers = async () => {
    await axios.get(`${API}/users`).then((res) => {
      setUsers(res.data);
    });
  };

  const handleUser = (user) => {
    setUser(user);
    setAuthenticated(true);
    window.localStorage.setItem("Current_User", JSON.stringify(user));
    window.localStorage.setItem("Authenticated", JSON.stringify(true));
    navigate(`/`);
  };

  const handleLogout = () => {
    setUser({});
    setAuthenticated(false);
    const data = window.localStorage.getItem("Current_User");
    const authenticated = window.localStorage.getItem("Authenticated");

    if (data !== null && authenticated !== null) {
      window.localStorage.setItem("Current_User", JSON.stringify({}));
      window.localStorage.setItem("Authenticated", JSON.stringify(false));
    }
    navigate("/");
  };

  return (
    <div className="App">
      <NavBar
        user={user}
        users={users}
        handleUser={handleUser}
        authenticated={authenticated}
        handleLogout={handleLogout}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="found" element={<Index />} />
          <Route path="/new" element={<New user={user} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
