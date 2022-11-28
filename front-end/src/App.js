// Library Imports
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { scaleRotate as MyItemsSidebar } from "react-burger-menu";
import axios from "axios";

// Component Imports
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/NavBar/Sidebar/SideBar";
import MyItems from "./Components/Accounts/Profile/MyItems/MyItems";
import Chatbox from "./Components/Chatbox/Chatbox";
import FAQ from "./Components/FAQ/FAQ";
import ViewUserSettings from "./Components/Accounts/EditAccount/ViewUserSettings";
import NewItemForm from "./Components/Items/Create/NewItemForm";

// Page Imports
import Homepage from "./Pages/Home/Home";
import Indexpage from "./Pages/Items/Index/Index";
import Createpage from "./Pages/Items/Create/New";
import Showpage from "./Pages/Items/Show/Show";
import About from "./Pages/About/About";
import Edit from "./Components/Accounts/EditAccount/Edit";

// Styling Imports
import "./App.scss";



export default function App() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    navigate(`/`);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="outer-container">
      <MyItemsSidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        isOpen={isOpen}
        onClose={handleOnClose}
        customBurgerIcon={false}
        right
      >
        <MyItems user={user} authenticated={authenticated} />
      </MyItemsSidebar>
      <section id="page-wrap">
        <NavBar
          user={user}
          users={users}
          handleUser={handleUser}
          authenticated={authenticated}
          handleLogout={handleLogout}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <SideBar />
        <Chatbox user={user} users={users} authenticated={authenticated} />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/index" element={<Indexpage user={user} />} />
            <Route path="/new" element={<Createpage user={user} />} />
            <Route path="/show/:itemId" element={<Showpage users={users} />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/:userId/settings" element={<NavBar user={user} />} />
						<Route path="/:userId/viewsettings" element={<ViewUserSettings user={user} />} />
						<Route path="/newitem" element={<NewItemForm user={user} />} />
						<Route path="/:userId/edit" element={<Edit user={user} />} />
          </Routes>
        </main>
      </section>
    </section>
  );
}
