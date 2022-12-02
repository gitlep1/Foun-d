import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import  "./Edit.scss"
const API = process.env.REACT_APP_API_URL


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
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/users/${userId}`, user)
      .then(() => {
        navigate(`/users/${userId}`);
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
              value={user.username}
            />
          </label>
          <br></br>
          <label htmlFor="password">
            Password
            <input
              type="text"
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
              value={user.zipcode}
              onChange={handleTextChange}
            />
          </label>
          <br></br>
					<Button variant='dark'onClick={() => {navigate(`/${userId}/viewsettings`)}}>
						Back
					</Button>
					<Button variant='success' id="save-changes-button" type="submit">
            {" "}
            Save Changes{" "}
					</Button>
        </form>
      </div>
    </section>
  );
};
export default Edit;
