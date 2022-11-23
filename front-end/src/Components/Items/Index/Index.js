import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import axios from "axios";

import "./Index.scss";

const IndexContainer = ({ user, users, authenticated }) => {
  const API = process.env.REACT_APP_API_URL;

  const [foundItems, setFoundItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        setFoundItems(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []); // eslint-disable-line

  return (
    <section className="indexSection">
      {error && <p>{error}</p>}
      {foundItems.length > 0
        ? foundItems.map((foundItems) => {
            return (
              <article className="Found" key={nanoid()}>
                <h4>name: {foundItems.itemname}</h4>
                <div className="Found_image"></div>
                <button>
                  <Link to={`/Found/${foundItems.id}`}>READ MORE</Link>
                </button>
              </article>
            );
          })
        : null}
    </section>
  );
};

export default IndexContainer;
