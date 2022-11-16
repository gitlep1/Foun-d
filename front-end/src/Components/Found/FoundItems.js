import axios from "axios";
import Found from "./Found";
import React, { useState, useEffect } from "react";

const API = "http://localhost:4000";

export default function FoundItems() {
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/found`)
      .then((response) => {
        setFoundItems(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);
  console.log(foundItems);
  return (
    <section className="foundItems">
      {foundItems.length > 0
        ? foundItems.map((foundItems, index) => {
            console.log(foundItems);
            return <Found key={index} foundItems={foundItems} />;
          })
        : null}
    </section>
  );
}
