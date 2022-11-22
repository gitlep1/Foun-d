import "./Chatbox.scss";
import { useState } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { nanoid } from "nanoid";

const Chatbox = ({ user, users, authenticated }) => {
  const [messageHover, setMessageHover] = useState(false);

  const hoverMouse = () => {
    setMessageHover(true);
  };

  const unhoverMouse = () => {
    setMessageHover(false);
  };

  const renderUsersOnMessages = (user) => {
    return (
      <Dropdown.Item key={nanoid()} className="messageProfiles" onClick={``}>
        <Card className="messageCards">
          <Card.Img
            variant="top"
            className="cardProfileImg"
            src={user.profileimg}
          />
          <Card.Body>
            <Card.Title>
              Name: <span>{user.username}</span>
            </Card.Title>
          </Card.Body>
          <Button variant="success">Message</Button>
        </Card>
      </Dropdown.Item>
    );
  };
  // import socket from '../Socket.IO/socket';
  // 	if (item.itemName !== "end"){
  // 		let username = item.itemName
  // 		socket.emit('new user', username)
  // 		socket.auth = { username }
  // 		socket.connect()
  // 		console.log(socket)
  // } else {
  // 		socket.off("connect_error");
  // 		console.log(socket)
  // }

  return authenticated && user ? (
    <>
      <div className={messageHover ? "customArrow sticky" : null}></div>
      <section
        className="chatboxContainer sticky"
        onMouseOver={hoverMouse}
        onMouseOut={unhoverMouse}
      >
        <Dropdown drop="up" className="messagesDropup">
          <img src={user.profileimg} alt="user" id="messagesIcon" />
          <Dropdown.Toggle id="messagesText" variant="light">
            Messages
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownMenu">
            {users.map((user) => {
              return renderUsersOnMessages(user);
            })}
          </Dropdown.Menu>
        </Dropdown>
        {/* <h4 id="messagesText">Messages</h4> */}
      </section>
    </>
  ) : null;
};

export default Chatbox;
