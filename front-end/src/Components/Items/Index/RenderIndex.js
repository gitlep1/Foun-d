import { useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import "./RenderIndex.scss";

const RenderIndex = ({
  itemFound,
  user,
  users,
  authenticated,
  width,
  height,
  itemName,
  filteredSearchOptions,
}) => {
  const navigate = useNavigate();

  const getFinder = () => {
    let foundUser = {};
    let foundByLoggedInUser = false;

    users.map((finder) => {
      if (finder.id === itemFound.userid) {
        return (foundUser = finder);
      }

      return foundUser;
    });

    if (foundUser.id === user.id) {
      foundByLoggedInUser = true;
    }

    return (
      <>
        <Card.Img src={foundUser.profileimg} className="finderImg" />
        <br />
      </>
    );
  };

  const getFinderName = () => {
    let foundUser = {};

    users.map((finder) => {
      if (finder.id === itemFound.userid) {
        return (foundUser = finder);
      }

      return foundUser;
    });

    return foundUser.username;
  };

  const getFinderRating = () => {
    let foundUser = {};

    users.map((finder) => {
      if (finder.id === itemFound.userid) {
        return (foundUser = finder);
      }

      return foundUser;
    });

    return foundUser.rating;
  };

  return (
    <>
      <section className="cardInfoContainer">
        {itemName !== "" ? (
          itemFound.itemname.includes(itemName) ? (
            <Card key={nanoid()} className="itemsCard">
              <img src={itemFound.itemimg} alt="item" className="itemImg" />
              <Card.Body className="itemInfo">
                <Card.Title>
                  <span>{itemFound.itemname}</span>
                </Card.Title>
                <Card.Text>
                  Category: <span>{itemFound.category}</span>
                </Card.Text>
                <Card.Text>
                  Neighborhood: <span>{itemFound.neighborhood}</span>
                </Card.Text>
                <Card.Title id="foundby-tag">
                  Found By: <span>{getFinder()}</span>
                  <span>{getFinderName()}</span>
                </Card.Title>
                <Card.Text>
                  Rating: <span>{getFinderRating()}</span>
                </Card.Text>
                <Button
                  variant="success"
                  onClick={() => {
                    navigate(`/show/${itemFound.id}`);
                  }}
                >
                  More Info
                </Button>
                {/* <Button variant="dark">Message</Button> */}
              </Card.Body>
            </Card>
          ) : null
        ) : (
          <Card key={nanoid()} className="itemsCard">
            <img src={itemFound.itemimg} alt="item" className="itemImg" />
            <Card.Body className="itemInfo">
              <Card.Title>
                <span>{itemFound.itemname}</span>
              </Card.Title>
              <Card.Text>
                Category: <span>{itemFound.category}</span>
              </Card.Text>
              <Card.Text>
                Neighborhood: <span>{itemFound.neighborhood}</span>
              </Card.Text>
              <Card.Title id="foundby-tag">
                Found By: <span>{getFinder()}</span>
                <span>{getFinderName()}</span>
              </Card.Title>
              <Card.Text>
                Rating: <span>{getFinderRating()}</span>
              </Card.Text>
              <Button
                variant="success"
                onClick={() => {
                  navigate(`/show/${itemFound.id}`);
                }}
              >
                More Info
              </Button>
              {/* <Button variant="dark">Message</Button> */}
            </Card.Body>
          </Card>
        )}
      </section>
    </>
  );
};

export default RenderIndex;
