import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import RenderIndex from "./RenderIndex";
import FilteredSearch from "./FilteredSearch/FilteredSearch";

import windowDimensions from "../../../Hooks/GetWindowDimensions";
import "./Index.scss";

const IndexContainer = ({ user, users, authenticated }) => {
  const { width, height } = windowDimensions();
  const API = process.env.REACT_APP_API_URL;

  const [foundItems, setFoundItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [filteredSearchOptions, setFilteredSearchOptions] = useState({
    category: "",
    borough: "",
    neighborhood: "",
    zipcode: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line

  const getItems = async () => {
    if (itemName !== "") {
      return;
    }
    await axios
      .get(`${API}/items`)
      .then((res) => {
        setFoundItems(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <section id="indexContainer">
      <aside id="searhSection-aside">
        <FilteredSearch
          itemName={itemName}
          setItemName={setItemName}
          filteredSearchOptions={filteredSearchOptions}
          setFilteredSearchOptions={setFilteredSearchOptions}
        />
      </aside>
      <br />
      <section id="indexInnerSection">
        {error && <p>{error}</p>}
        {foundItems.length > 0
          ? foundItems.map((itemFound) => {
						console.log(foundItems)
              return (
                <RenderIndex
                  key={nanoid()}
                  itemFound={itemFound}
                  user={user}
                  users={users}
                  authenticated={authenticated}
                  width={width}
                  height={height}
                  itemName={itemName}
                  filteredSearchOptions={filteredSearchOptions}
                />
              );
            })
          : null}
      </section>
    </section>
  );
};

export default IndexContainer;
