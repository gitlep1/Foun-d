import { useState, useEffect } from "react";
import { Button, Form, Card, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import axios from "axios";

import RenderIndex from "./RenderIndex";
import windowDimensions from "../../GetWindowDimensions";

import "./Index.scss";

const IndexContainer = ({ user, users, authenticated }) => {
  const { width, height } = windowDimensions();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [foundItems, setFoundItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getItems();

    const ItemsInterval = setInterval(() => {
      getItems();
    }, 3000);

    return () => clearInterval(ItemsInterval);
  }, []); // eslint-disable-line

  const getItems = async () => {
    await axios
      .get(`${API}/items`)
      .then((res) => {
        setFoundItems(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === itemName) {
      setItemName(value);
    }
  };

  return (
    <section id="indexSection">
      <aside id="searchBarContainer">
        <Form id="searchBar">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="filterList">
              Advanced Search
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <h1>Test</h1>
              <Button>Filter Search</Button>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group controlId="formBasicSearchbar">
            <Form.Control
              type="text"
              name="itemName"
              placeholder="Item Name"
              onChange={handleChange}
              value={itemName}
            />
          </Form.Group>
          <Button variant="success" id="searchBarButton">
            Search
          </Button>
        </Form>
      </aside>
      <br />
      <section id="indexContainer">
        {error && <p>{error}</p>}
        {foundItems.length > 0
          ? foundItems.map((itemFound) => {
              return (
                <RenderIndex
                  key={nanoid()}
                  itemFound={itemFound}
                  user={user}
                  users={users}
                  authenticated={authenticated}
                  width={width}
                  height={height}
                />
              );
            })
          : null}
      </section>
    </section>
  );
};

export default IndexContainer;
