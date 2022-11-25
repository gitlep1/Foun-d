import { useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import "./RenderIndex.scss";

const RenderIndex = ({ itemFound, user, users, authenticated }) => {
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

    return <Card.Img src={foundUser.profileimg} className="finderImg" />;
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
      <img src={itemFound.itemimg} alt="item" className="itemImg" />
      <Card key={nanoid()} className="itemsCard">
        <section className="cardInfoContainer">
          <Card.Body className="itemInfo">
            <Card.Title>
              Name: <span>{itemFound.itemname}</span>
            </Card.Title>
            <Card.Text>
              Description: <span>{itemFound.description}</span>
            </Card.Text>
            <Card.Text>
              Neighborhood: <span>{itemFound.neighborhood}</span>
            </Card.Text>
          </Card.Body>
          <section className="finderInfoContainer">
            <Card.Title>
              <span>{getFinder()}</span> Found By:{" "}
              <span>{getFinderName()}</span>
            </Card.Title>
            <Card.Text>
              Rating: <span>{getFinderRating()}</span>
            </Card.Text>
          </section>
        </section>
        <Button
          variant="success"
          onClick={() => {
            navigate(`/Found/${itemFound.id}`);
          }}
        >
          More Info
        </Button>
      </Card>
    </>
  );
};

export default RenderIndex;
