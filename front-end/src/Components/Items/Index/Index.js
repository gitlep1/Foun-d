import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Index = ({ foundItems }) => {
  return (
    <article className="Found">
      <h4>name: {foundItems.itemname}</h4>
      <div className="Found_image"></div>
      <button>
        <Link to={`/Found/${foundItems.id}`}>READ MORE</Link>
      </button>
    </article>
  );
};

export default Index;
