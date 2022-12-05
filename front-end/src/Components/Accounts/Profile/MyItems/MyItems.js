import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./MyItems.scss";

const MyItems = ({
  user,
  isOpen,
  setIsOpen,
  authenticated,
  setDeleteItem,
  handleShow,
}) => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [userItems, setUserItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsersFoundItems(user);
  }, [isOpen]); // eslint-disable-line

  const getUsersFoundItems = (foundUser) => {
    axios
      .get(`${API}/found/${foundUser.id}`)
      .then((res) => {
        setUserItems(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const getTotalItems = () => {
    let total = 0;

    if (userItems.length > 0) {
      userItems.map((items) => {
        if (user.id === items.founduserid) {
          total += 1;
        }
        return total;
      });
    } else {
      return null;
    }

    return total;
  };

  const renderUserItems = (user) => {
    if (userItems.length > 0) {
      return userItems.map((item) => {
        if (Object.values(item).includes(user.id)) {
          return (
            <section key={nanoid()}>
              <Card className="myitems-card">
                <Card.Img variant="top" src={item.itemimg} />
                <Card.Body>
                  <Card.Title>
                    Name: <span>{item.itemname}</span>
                  </Card.Title>
                  <Card.Text>
                    Status: <span>{item.status}</span>
                  </Card.Text>
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
                  variant="primary"
                  onClick={() => {
                    setIsOpen(false);
                    navigate(`/edit/${item.id}`);
                  }}
                >
                  EDIT
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleShow();
                    setIsOpen(false);
                    setDeleteItem(item);
                    navigate(`/show/${item.id}`);
                  }}
                >
                  DELETE
                </Button>
              </Card>
              <br />
            </section>
          );
        }
        return null;
      });
    } else if (userItems.length > 0) {
      return <h1>loading...</h1>;
    } else {
      return <h1>You haven't found any items</h1>;
    }
  };

  return (
    <section id="myItemsSection">
      {error && <p>{error}</p>}

      <div>
        <h1 id="myitems-heading">Items Found</h1>
        <h3 id="myitems-heading">
          Total:{" "}
          {user.id
            ? userItems.name !== "error"
              ? getTotalItems()
              : null
            : null}
        </h3>
      </div>
      <div id="myItemsContainer">
        {user.id
          ? userItems.name !== "error"
            ? renderUserItems(user)
            : null
          : null}
      </div>
    </section>
  );
};
export default MyItems;
