import "./Chatbox.scss";
import { useState } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { nanoid } from "nanoid";
import socket from './Socket.IO/socket';

const Chatbox = ({ model, user, users, authenticated }) => {
const [connected, setConnected] = useState([])
const [messageHover, setMessageHover] = useState(false);


	socket.on("connect", () => {
		console.log('Socket is connected')
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
			console.log('unable to connect')
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
		console.log('current', users)
		users.forEach((user) => {
			user.self = user.userID === socket.id;
			setConnected([...connected, user.username])
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
			console.log("connected", user)
			users.push(user);
			setConnected([...connected, user.username])
		});
	});

  const hoverMouse = () => {
    setMessageHover(true);
  };

  const unhoverMouse = () => {
    setMessageHover(false);
  };
	if (authenticated && user.id){
			// THIS LETS USERS PICK THEIR NAME AND CONNECT TO SOCKET
			// WE ONLY WHAT TO CONNECT ONCE THEY SIGN IN
		let { username } = user
		socket.connect()
		socket.emit('new user', username)
		socket.auth = { username }
	} else {
			socket.off("connect_error");
	}

// THIS SENDS THE MESSAGE
// onMessage(content) {
//   if (this.selectedUser) {
//     socket.emit("private message", {
//       content,
//       to: this.selectedUser.userID,
//     });
//     this.selectedUser.messages.push({
//       content,
//       fromSelf: true,
//     });
//   }
// }

  const renderUsersOnMessages = (user2) => {
    return (
      <section key={nanoid()} className="messageProfiles">
        <Card className="messageCards">
          <Card.Img
            variant="top"
            className="cardProfileImg"
            src={user2.profileimg}
          />
          <Card.Body>
            <Card.Title>
              Name: <span>{connected.includes(user2.username) ? "✅": ''}{user2.username}</span>
            </Card.Title>
          </Card.Body>
          <Button
            variant="dark"
            onClick={() => {
              console.log(user2.username);
            }}
          >
            Message
          </Button>
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
        className={`chatboxContainer sticky ${ model ? "model-On" : ''}`}
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
      </section>
    </section>
  ) : null;
};

export default Chatbox;
