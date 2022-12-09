import "./Edit.scss";
import "./ViewUserSettings.scss";
import { useEffect, useState, React } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Edit from "./Edit";

const ViewUserSettings = ({ user }) => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [editUser, setEditUser] = useState([]);
	console.log(userInfo)

  useEffect(() => {
    axios
      .get(`${API}/users/${userId}`)
      .then((res) => setUserInfo(res.data))
      .catch((error) => console.error(error.message));
  }, []); // eslint-disable-line

  const userData = userInfo.map((info, index) => {
    if (info.id && user.id === info.id) {
      return (
        <li className="userinfo-li" key={index}>
					<h3>Personal Info</h3>
          <p>Username: {info.username}</p>
          <p>Password: {info.password}</p>
          <p> Email: {info.email}</p>
          <p>Profile Img Link: {info.profileimg}</p>
          <p>Address: {info.address}</p>
          <p>ZipCode: {info.zipcode}</p>
          <p>User Rating: {info.rating}</p>
          <p>{info.finder}</p>
          <p>Date Joined: {info.joineddate}</p>
					<Button
            variant="dark"
            onClick={() => {
              navigate(`/index`);
            }}
          >
            Back
          </Button>{" "}
          <Button
            variant="success"
            onClick={() => {
              navigate(`/${userId}/edit`);
            }}
          >
            Edit
          </Button>
        </li>
      );
    } else {
      navigate("/404");
    }
    return null;
  });

  return (
    <div id="user-settings-div">
      <h1 className="edit-settings-heading"> Your personal settings</h1>
      <section id="user-info-section">
        <ul id="user-data-li">
					<div id="userInfo-Picture">
						{userData}
						<img height={'200px'} width={'200px'} src={ userData[0] ? `${userInfo[0].profileimg}` : ''}/>
					</div>
          {/* <Button
            variant="dark"
            onClick={() => {
              navigate(`/index`);
            }}
          >
            Back
          </Button>
          <Button
            variant="success"
            onClick={() => {
              navigate(`/${userId}/edit`);
            }}
          >
            Edit
          </Button> */}
        </ul>
      </section>
    </div>
  );
};
export default ViewUserSettings;
