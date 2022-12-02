import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Edit.scss";

const Edit = () => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { userId } = useParams();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    profileimg: "",
    address: "",
    zipcode: 0,
    rating: 0,
  });

  const handleTextChange = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`${API}/users/${userId}`)
      .then((res) => {
        setUser(...res.data);
      })
      .catch();
  }, [userId]); // eslint-disable-line

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedUser = {
      username: user.username,
      password: user.password,
      email: user.email,
      profileImg: user.profileimg,
      address: user.address,
      zipcode: user.zipcode,
      rating: user.rating,
      finder: user.finder,
    };

    if (updatedUser.profileImg.includes("https://")) {
      await axios
        .put(`${API}/users/${userId}`, updatedUser)
        .then(() => {
          navigate(`/${user.id}/viewsettings`);
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      updatedUser.profileImg = `https://${updatedUser.profileImg}`;

      await axios
        .put(`${API}/users/${userId}`, updatedUser)
        .then(() => {
          navigate(`/${user.id}/viewsettings`);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  return (
    <section id="userSettingsSection">
      <div id="edit-user-info">
        <form onSubmit={handleSubmit}>
          <h1> Edit User Info</h1>
          <label htmlFor="userName">
            Username
            <input
              type="text"
              id="username"
              className="edit-info-input1"
              value={user.username}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <label htmlFor="password">
            Password
            <input
              type="text"
              id="password"
              className="edit-info-input"
              value={user.password}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              className="edit-info-input"
              value={user.email}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <label htmlFor="profileImg">
            Profile Image
            <input
              type="text"
              id="profileimg"
              className="edit-info-input"
              value={user.profileimg}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <label>
            Address
            <input
              type="text"
              id="address"
              className="edit-info-input"
              value={user.address}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <label>
            ZipCode
            <input
              type="text"
              id="zipcode"
              className="edit-info-input"
              value={user.zipcode}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <Button
            variant="dark"
            onClick={() => {
              navigate(`/${userId}/viewsettings`);
            }}
          >
            Back
          </Button>{" "}
          <Button variant="success" id="save-changes-button" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Edit;
