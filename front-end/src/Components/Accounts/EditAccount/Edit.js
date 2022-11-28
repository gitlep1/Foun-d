import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./Edit.scss";

const Edit = () => {
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  let { index } = useParams();

  const [user, setUser] = useState({
    userName: "",
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
      .get(`${API}/users/${index}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/users/${index}`, user)
      .then(() => {
        navigate(`/users/${index}`);
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
              className="edit-info-input1"
              onChange={handleTextChange}
              value={user.userName}
            />
          </label>
          <br></br>
          <label htmlFor="password">
            Password
            <input
              type="password"
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
              className="edit-info-input"
              // value={user.zipcode}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
          <button id="save-changes-button" type="submit">
            {" "}
            Save Changes{" "}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Edit;
