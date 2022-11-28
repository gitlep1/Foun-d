import "./Profile.scss";
import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import EditUserSettings from "../EditAccount/ViewUserSettings";

import Signin from "./Signin";
import Signup from "./Signup";

import gearIcon from "../../../Images/gearIcon.png";

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
  const navigate = useNavigate();
  const [clickHere, setClickHere] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const getUserRating = () => {
    const ur = user.rating;

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

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const image_input = document.querySelector("#image_input");
  var uploaded_image = "";

  return (
    <section className={`profileSection ${model ? "model-0n" : ""}`}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {authenticated ? (
            <>
              <img
                className="profileImgSmall"
                src={user.profileimg}
                alt="profile"
              />
              {user.username}
            </>
          ) : clickHere ? (
            <>LOG IN</>
          ) : (
            <>SIGN UP</>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {authenticated && user.id ? (
            <section className="authenticatedUser">
              <div>{isHovering ? <h3>User Settings</h3> : null}</div>
              <div
                className="accountSettingsImgCOntainer"
                onMouseUp={handleMouseOver}
                onMouseDown={handleMouseOut}
              >
                <img
                  src={gearIcon}
                  alt="settings"
                  id="accountSettingsImg"
                  onClick={() => {
                    navigate(`/${user.id}/viewsettings`);
                  }}
                />
              </div>
              <section className="profileStats">
                <img
                  src={user.profileimg}
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
