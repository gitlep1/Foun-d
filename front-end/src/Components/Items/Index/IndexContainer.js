import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import Index from "./Index";

const IndexContainer = () => {
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
    <section className="foundItems">
      {error && <p>{error}</p>}
      {foundItems.length > 0
        ? foundItems.map((foundItems) => {
            return <Index key={nanoid()} foundItems={foundItems} />;
          })
        : null}
    </section>
  );
};

export default IndexContainer;
