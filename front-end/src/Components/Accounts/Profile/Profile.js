import "./Profile.scss";
import { useState, useEffect } from "react";
import { Button, Dropdown, Image } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
// import EditUserSettings from "../EditAccount/ViewUserSettings";

import Signin from "./Signin";
import Signup from "./Signup";

import gearIcon from "../../../Images/gearIcon.png";
import axios from "axios";

// import fiveStars from "../../Images/5stars.png";

const Profile = ({
  user,
  users,
  handleUser,
  authenticated,
  handleLogout,
  isOpen,
  setIsOpen,
  model,
}) => {
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [clickHere, setClickHere] = useState(false);

  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    getUpdatedUser();

    const updateUserInterval = setInterval(() => {
      getUpdatedUser();
    }, 3000);

    return () => clearInterval(updateUserInterval);
  }, []);

  const getUpdatedUser = async () => {
    await axios.get(`${API}/users/${user.id}`).then((res) => {
      setUpdatedUser(res.data[0]);
    });

    const data = window.localStorage.getItem("Current_User");
    const authenticated = window.localStorage.getItem("Authenticated");

    if (data !== null && authenticated !== null && updatedUser !== undefined) {
      window.localStorage.setItem("Current_User", JSON.stringify(updatedUser));
      window.localStorage.setItem("Authenticated", JSON.stringify(true));
    } else {
      window.localStorage.setItem("Current_User", JSON.stringify());
      window.localStorage.setItem("Authenticated", JSON.stringify(false));
    }
  };

  const getUserRating = () => {
    let ur = user.rating;

    if (updatedUser) {
      ur = updatedUser.rating;
    }

    if (ur === 1) {
      // return <img src={fiveStars} alt="star" />;
      return "*";
    } else if (ur === 2) {
      return "**";
    } else if (ur === 3) {
      return "***";
    } else if (ur === 4) {
      return "****";
    } else if (ur >= 5) {
      return "*****";
    } else {
      return "";
    }
  };

  return (
    <section className={`profileSection ${model ? "model-0n" : ""}`}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {authenticated ? (
            <>
              <img
                className="profileImgSmall"
                src={updatedUser ? updatedUser.profileimg : user.profileimg}
                alt="profile"
              />
              {updatedUser ? updatedUser.username : user.username}
            </>
          ) : clickHere ? (
            <>LOG IN</>
          ) : (
            <>SIGN UP</>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {authenticated && user.id ? (
            <section className={`authenticatedUser`}>
              <div className="accountSettingsImgContainer">
                <Image
                  src={gearIcon}
                  alt="settings"
                  id="accountSettingsImg"
                  onClick={() => {
                    navigate(`/${user.id}/viewsettings`);
                  }}
                  data-tip={`user settings`}
                />
                <ReactTooltip place="left" type="dark" effect="float">
                  <h3>User Settings</h3>
                </ReactTooltip>
              </div>
              <section className="profileStats">
                <Image
                  src={updatedUser ? updatedUser.profileimg : user.profileimg}
                  className="profileImgBig"
                  alt="profile"
                />
                <aside>
                  <div>Rating: {getUserRating()} </div>
                  <br />
                  <div>Items Found:</div>
                </aside>
              </section>
              <Button
                id="logoutButton"
                variant="success"
                onClick={() => {
                  handleLogout();
                }}
              >
                Log Out
              </Button>
              <br />
              <br />
              <div id="myItemsButton">
                <Button
                  variant="dark"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  My Items {"------->"}
                </Button>
              </div>
            </section>
          ) : (
            <section className="unauthenticatedUser">
              {clickHere ? (
                <>
                  <Signin
                    clickHere={clickHere}
                    setClickHere={setClickHere}
                    user={user}
                    users={users}
                    handleUser={handleUser}
                    authenticated={authenticated}
                  />

                  <Button
                    variant="secondary"
                    onClick={() => {
                      setClickHere(!clickHere);
                    }}
                  >
                    Go Back
                  </Button>
                </>
              ) : (
                <>
                  <Signup
                    clickHere={clickHere}
                    setClickHere={setClickHere}
                    user={user}
                    users={users}
                    handleUser={handleUser}
                    authenticated={authenticated}
                  />

                  <div className="alreadyHasAccount">
                    Already have an account with us?{" "}
                    <p
                      className="clickHere"
                      onClick={() => {
                        setClickHere(!clickHere);
                      }}
                    >
                      CLICK HERE
                    </p>
                  </div>
                </>
              )}
            </section>
          )}
        </Dropdown.Menu>
      </Dropdown>
      <ToastContainer autoClose={3000} theme="dark" />
    </section>
  );
};

export default Profile;
