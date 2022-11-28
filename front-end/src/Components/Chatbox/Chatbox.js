import "./Chatbox.scss";
import { useState } from "react";

const Chatbox = ({ model, user, users, authenticated }) => {
  const [messageHover, setMessageHover] = useState(false);

  const hoverMouse = () => {
    setMessageHover(true);
  };

  const unhoverMouse = () => {
    setMessageHover(false);
  };
// import socket from '../Socket.IO/socket';
// 	if (item.itemName !== "end"){
			// THIS LETS USERS PICK THEIR NAME AND CONNECT TO SOCKET
			// WE ONLY WHAT TO CONNECT ONCE THEY SIGN IN
// 		let username = item.itemName
// 		socket.emit('new user', username)
// 		socket.auth = { username }
// 		socket.connect()
// 		console.log(socket)
// } else {
// 		socket.off("connect_error");
// 		console.log(socket)
// }
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

  return authenticated && user ? (
    <>
      <div className={messageHover ? "customArrow sticky" : null}></div>
      <section
        className={`chatboxContainer sticky ${ model ? "model-On" : ''}`}
        onMouseOver={hoverMouse}
        onMouseOut={unhoverMouse}
      >
        <img src={user.profileimg} alt="envelopeMessage" id="messagesIcon" />
        <h4 id="messagesText">Messages</h4>
      </section>
    </>
  ) : null;
};

export default Chatbox;
