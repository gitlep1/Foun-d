import "./Chatbox.scss";
import { useState } from "react";

const Chatbox = ({ user, users, authenticated }) => {
  const [messageHover, setMessageHover] = useState(false);

  const hoverMouse = () => {
    setMessageHover(true);
  };

  const unhoverMouse = () => {
    setMessageHover(false);
  };

  return authenticated && user ? (
    <>
      <div className={messageHover ? "customArrow sticky" : null}></div>
      <section
        className="chatboxContainer sticky"
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
