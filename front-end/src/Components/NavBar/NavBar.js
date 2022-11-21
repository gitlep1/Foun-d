import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import "./NavBar.scss";

import foundLogo from "../../Images/Foun'dLogo.png";

const NavBar = ({
  pageWrapId,
  outerContainerId,
  user,
  users,
  handleUser,
  authenticated,
  handleLogout,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="navbar">
      <section id="paths">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <Link to="/" className="logoLink">
          <img
            className="logo"
            src={foundLogo}
            height="150px"
            alt="foundLogo"
          />
          <span id="logoTitle">Foun'd</span>
        </Link>
        <h3>
          <Link to="/about">About</Link>{" "}
        </h3>
      </section>
      <section id="welcome"></section>
      <section id="report"></section>
      <section id="find"></section>
      <section id="profile">
        <Profile
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
          user={user}
          users={users}
          handleUser={handleUser}
          authenticated={authenticated}
          handleLogout={handleLogout}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </section>
      <footer></footer>
    </div>
  );
};

export default NavBar;
