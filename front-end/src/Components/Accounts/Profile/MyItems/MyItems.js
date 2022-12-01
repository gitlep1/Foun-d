import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./MyItems.scss";

const MyItems = ({ user, isOpen, setIsOpen, setModel }) => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [userItems, setUserItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/found`)
      .then((res) => {
        setUserItems(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [isOpen]); // eslint-disable-line

  const renderUserItems = (user) => {
    return userItems.map((item) => {
      if (Object.values(item).includes(user.id)) {
        return (
          <section key={nanoid()}>
            <Card key={nanoid()} className="myitems-card">
              <Card.Img variant="top" src={item.itemimg} />
              <Card.Body>
                <Card.Title>
                  Name: <span>{item.itemname}</span>
                </Card.Title>
                <Card.Text>
                  Description: <span>{item.description}</span>
                </Card.Text>
                <Card.Text>
                  Neighborhood: <span>{item.neighborhood}</span>
                </Card.Text>
              </Card.Body>
              <Button
                variant="success"
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/show/${item.id}`);
                }}
              >
                VIEW
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/edit/${item.id}`);
                }}
              >
                EDIT
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  setIsOpen(false);
                  setModel(true);
                  navigate(`/show/${item.id}`);
                }}
              >
                DELETE
              </Button>
            </Card>
            <br key={nanoid()} />
          </section>
        );
      }
      return null;
    });
  };

  const getTotalItems = () => {
    let total = 0;
  if (userItems) {
	  userItems.map((items) => {
      if (user.id === items.founduserid) {
        total += 1;
      }
      return total;
    });
	} else {
		return null;
	};

    return total;
  };

  return (
    <section id="myItemsSection">
      {error && <p>{error}</p>}
      <div>
        <h1 id="myitems-heading">Items Found</h1>
        <h3 id="myitems-heading">Total: {getTotalItems()}</h3>
      </div>
      <div id="myItemsContainer">{user.id ? renderUserItems(user) : null}</div>
    </section>
  );
};
export default MyItems;
