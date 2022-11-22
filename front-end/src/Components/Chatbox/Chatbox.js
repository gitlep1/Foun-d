import "./Chatbox.scss";
import { Button } from "react-bootstrap";

import envelopeMessage from "../../Images/envelopeMessage.png";

const Chatbox = ({ user }) => {
  return (
    <section className="chatboxContainer sticky">
      <img src={user.profileimg} alt="envelopeMessage" id="messagesIcon" />
      <Button variant="outline-dark" id="messagesButton">
        Messages
      </Button>
    </section>
  );
};

export default Chatbox;
