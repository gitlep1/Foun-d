import "./Profile.scss";
import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Signin from "../Signup-Signin/Signin";
import Signup from "../Signup-Signin/Signup";

const Profile = ({ user, users, handleUser, authenticated, handleLogout }) => {
  const navigate = useNavigate();
  const [clickHere, setClickHere] = useState(false);

  return (
    <section className="profileSection">
      <Dropdown className="profileDropdown">
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
          {authenticated ? (
            <section className="authenticatedUser">
              <section className="profileStats">
                <img
                  src={user.profileimg}
                  className="profileImgBig"
                  alt="profile"
                />
                <aside>
                  <div>Rating: {user.rating > 4 ? "****" : null} </div>
                  <br />
                  <div>Items Found:</div>
                </aside>
              </section>
              <Button
                variant="success"
                onClick={() => {
                  handleLogout();
                }}
              >
                Log Out
              </Button>
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
