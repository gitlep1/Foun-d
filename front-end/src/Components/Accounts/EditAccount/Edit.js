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
    profileImg: "",
    address: "",
    zipcode: 0,
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

    await axios
      .put(`${API}/users/${userId}`, user)
      .then(() => {
        navigate(`/${userId}/viewsettings`);
      })
      .catch((err) => {
        console.warn(err);
      });
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
              onChange={handleTextChange}
              value={user.username}
            />
          </label>
          <br></br>
          <label htmlFor="password">
            Password
            <input
              type="text"
              id="password"
              className="edit-info-input"
              onChange={handleTextChange}
              value={user.password}
            />
          </label>
          <br></br>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              className="edit-info-input"
              onChange={handleTextChange}
              value={user.email}
            />
          </label>
          <br></br>
          <label>
            Address
            <input
              type="text"
              id="address"
              className="edit-info-input"
              onChange={handleTextChange}
              value={user.address}
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
