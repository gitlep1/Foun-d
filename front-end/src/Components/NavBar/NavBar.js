import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import "./NavBar.css";

const NavBar = ({ user, users, handleUser, authenticated, handleLogout }) => {
  return (
    <div className="navbar">
      <section id="paths">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <Link to="/">
          <img
            className="logo"
            src="/logo.png"
            height="150px"
            alt="foundLogo"
          />
        </Link>
        <h3>
          <Link to="/about">About</Link>{" "}
        </h3>
      </section>
      <section id="welcome"></section>
      <section id="report"></section>
      <section id="find"></section>
      <section id="signup">
        <Signup
          user={user}
          users={users}
          handleUser={handleUser}
          authenticated={authenticated}
          handleLogout={handleLogout}
        />
      </section>
      <footer></footer>
    </div>
  );
};

export default NavBar;
