import "./Edit.scss";
import "./ViewUserSettings.scss";
import { useEffect, useState, React } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";
import FourOFour from "../../404/FourOFour";

const API = "http://localhost:4000";

const ViewUserSettings = ({ user }) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [editUser, setEditUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users/${userId}`)
      .then((res) => setUserInfo(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  const userData = userInfo.map((info, index) => {
    if (info.id && user.id === info.id) {
      return (
        <li className="userinfo-li" key={index}>
          <p>Username: {info.username}</p>
          <p>Password: {info.password}</p>
          <p> Email: {info.email}</p>
          <p>Profile Img Link: {info.profileimg}</p>
          <p>Address: {info.address}</p>
          <p>ZipCode: {info.zipcode}</p>
          <p>User Rating: {info.rating}</p>
          <p>{info.finder}</p>
          <p>Date Joined: {info.joineddate}</p>
        </li>
      );
    } else {
      navigate("/404");
    }
  });

  const currentUser = () => {};
  return (
    <div id="user-settings-div">
      <h1 className="edit-settings-heading"> Edit User settings</h1>
      <section id="user-info-section">
        <h3>Personal Info</h3>
        <ul id="user-data-li">
          {userData}
          <Link to="/:userId/edit">
            <button>Edit</button>
          </Link>
        </ul>
      </section>
      <button>Save Changes</button>
      <button>Deactivate Account</button>
    </div>
  );
};
export default ViewUserSettings;
