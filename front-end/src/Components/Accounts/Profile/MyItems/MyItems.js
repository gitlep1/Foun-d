import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./MyItems.scss";

const MyItems = ({ user, authenticated }) => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [userItems, setUserItems] = useState([]);
  const [error, setError] = useState("");

  const data = window.localStorage.getItem("Current_User");
  const currentUser = JSON.parse(data);

  useEffect(() => {
    axios
      .get(`${API}/found/${currentUser.id}`)
      .then((res) => {
        // console.log(res.data);
        setUserItems(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // eslint-disable-line

  const getAllUserFoundItems = () => {
    const myItemsList = userItems.map((item) => {
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
                  navigate(`/Found/${item.id}`);
                }}
              >
                VIEW
              </Button>
            </Card>
            <br key={nanoid()} />
          </section>
        );
      }
      return null;
    });

    return myItemsList;
  };

  const total = userItems.length;

  return (
    <section id="myItemsSection">
      {/* {console.log(currentUser.id)} */}
      {error && <p>{error}</p>}
      <div>
        <h1 id="myitems-heading">Items Found</h1>
        <h3 id="myitems-heading">Total: {total}</h3>
      </div>
      <div id="myItemsContainer">
        {authenticated ? getAllUserFoundItems() : null}
      </div>
    </section>
  );
};
export default MyItems;
