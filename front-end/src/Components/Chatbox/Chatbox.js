import "./Chatbox.scss";
import { useState } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { nanoid } from "nanoid";
import socket from "./Socket.IO/socket";

const Chatbox = ({ model, user, users, authenticated }) => {
  const [connected, setConnected] = useState([]);
  const [messageHover, setMessageHover] = useState(false);
  const [openConvo, setOpenConvo] = useState([]);
  const [message, setMessage] = useState({ text: "" });

  socket.on("connect", () => {
    console.log("Socket is connected");
    console.log("ID:", socket.id);
  });

  socket.onAny((event, ...args) => {
    // if(event === 'users'){
    // 		setConnected(...args)
    // }
    // console.log(event, args);
  });

  socket.on("connect_error", (err) => {
    if (err.message === "invalid username") {
      console.log("unable to connect");
    }
  });

  // THIS DISPLAYS MESSAGE TO RECEIVER
  socket.on("private message", ({ content, from }) => {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (user.userID === from) {
        user.messages.push({
          content,
          fromSelf: false,
        });
        if (user !== this.selectedUser) {
          user.hasNewMessages = true;
        }
        break;
      }
    }
  });

  // THIS GIVES US CURRENT USERS
  socket.on("users", (users) => {
    console.log("current", users);
    users.forEach((user) => {
      user.self = user.userID === socket.id;
      setConnected([...connected, user.username]);
    });
    // put the current user first, and then sort by username
    socket.users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });

    // THIS NOTIFIES US OF ANY NEW USERS CONNCETED
    socket.on("user connected", (user) => {
      console.log("connected", user);
      users.push(user);
      setConnected([...connected, user.username]);
    });
  });

  const hoverMouse = () => {
    setMessageHover(true);
  };

  const unhoverMouse = () => {
    setMessageHover(false);
  };
  if (authenticated && user.id) {
    // THIS LETS USERS PICK THEIR NAME AND CONNECT TO SOCKET
    // WE ONLY WHAT TO CONNECT ONCE THEY SIGN IN
    let { username } = user;
    socket.connect();
    socket.emit("new user", username);
    socket.auth = { username };
  } else {
    socket.off("connect_error");
  }

  // THIS SENDS THE MESSAGE
  const handleMessage = (content) => {
    if (this.selectedUser) {
      socket.emit("private message", {
        content,
        to: this.selectedUser.userID,
      });
      this.selectedUser.messages.push({
        content,
        fromSelf: true,
      });
    }
  };
  const handleTextChange = (event) => {
    setMessage({ ...message, text: event.target.value });
  };

  const handleDelete = (conversation) => {
    let findConversation = openConvo.filter(
      (convo) => conversation.id !== convo.id
    );
    setOpenConvo([...findConversation]);
  };

  const displayOpenConversation = () => {
    let currentRight = 10.5;
    return (
      <section>
        {openConvo.map((conversation, index) => {
          return (
            <Dropdown
              drop="up"
              id="user2-conversation"
              style={{ right: `${currentRight * (index + 1)}em` }}
              align="end"
            >
              <Dropdown.Toggle variant="light">
                <img
                  className="cardProfileImg"
                  height={"50px"}
                  width={"50px"}
                  src={conversation.profileimg}
                  alt="profile"
                />
                <span id="user2-name-chat">{conversation.username}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <section>
                  <div id="delete-chat">
                    <div
                      onClick={() => {
                        handleDelete(conversation);
                      }}
                    >
                      X
                    </div>
                  </div>
                  <div id="chat-box-area"></div>
                  <div id="chat-input-area">
                    <textarea
                      placeholder="Type message here..."
                      value={message.text}
                      onChange={handleTextChange}
                    />
                    <Button variant="dark">Send</Button>
                    {/* <img id='send-icon' height='100px' width='100px' src="https://thenounproject.com/api/private/icons/1323013/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjhV8gs4boIO3rbrCzp96FcVyKCgv4OvgrWlM63MGpu63Ke6eMrGfvWPsPpV03lkE3tMQDh0lxTMOFiLgOjHnQ7nFxlzAYrMqq9CaPl499HVWNbZ8%3D"/> */}
                  </div>
                </section>
              </Dropdown.Menu>
            </Dropdown>
          );
        })}
      </section>
    );
  };

  const renderUsersOnMessages = (user2) => {
    return (
      <section key={nanoid()} className="messageProfiles">
        <Card
          className="messageCards"
          onClick={() => {
            setOpenConvo([...openConvo, user2]);
          }}
        >
          <Card.Img
            variant="top"
            className="cardProfileImg"
            src={user2.profileimg}
          />
          <Card.Body>
            <Card.Title>
              Name:{" "}
              <span>
                {connected.includes(user2.username) ? "✅" : ""}
                {user2.username}
              </span>
            </Card.Title>
          </Card.Body>
          {/* <Button
            variant="dark"
            onClick={() => {
              console.log(user2.username);
            }}
          >
            Message
          </Button> */}
        </Card>
      </section>
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
    <section className="chatboxSection">
      <div className={messageHover ? "customArrow sticky" : null}></div>
      <section
        className={`chatboxContainer sticky ${model ? "model-On" : ""}`}
        onMouseOver={hoverMouse}
        onMouseOut={unhoverMouse}
      >
        <Dropdown drop="up" className="messagesDropup">
          <img src={user.profileimg} alt="user" id="messagesIcon" />
          <Dropdown.Toggle id="messagesText" variant="light">
            Messages
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownMenu">
            {users.map((user2) => {
              return renderUsersOnMessages(user2);
            })}
          </Dropdown.Menu>
        </Dropdown>
        {/* <h4 id="messagesText">Messages</h4> */}
        {openConvo.length > 0 ? displayOpenConversation() : ""}
      </section>
    </section>
  ) : null;
};

export default Chatbox;
