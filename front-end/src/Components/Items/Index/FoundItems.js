import { useState, useEffect } from "react";
import axios from "axios";

import Found from "./Found";

const API = process.env.REACT_APP_API_URL;

export default function FoundItems() {
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((response) => {
        setFoundItems(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <section className="foundItems">
      {foundItems.length > 0
        ? foundItems.map((foundItems, index) => {
            // console.log(foundItems);
            return <Found key={index} foundItems={foundItems} />;
          })
        : null}
    </section>
  );
}
