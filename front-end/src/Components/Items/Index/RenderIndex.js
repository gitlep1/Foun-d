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
			{width >= 1000 ? (
        <img src={itemFound.itemimg} alt="item" className="itemImg" />
      ) : null}
        <Card key={nanoid()} className="itemsCard">
          {width >= 1000 ? null : (
            <Card.Img
              src={itemFound.itemimg}
              alt="item"
              id="itemImgBelowWidth"
              variant="top"
            />
          )}
          <Card.Body className="itemInfo">
            <Card.Title>
              Name: <span>{itemFound.itemname}</span>
            </Card.Title>
            <Card.Text>
              Category: <span>{itemFound.category}</span>
            </Card.Text>
            <Card.Text>
              Neighborhood: <span>{itemFound.neighborhood}</span>
            </Card.Text>
						<Card.Title id='foundby-tag'>
              {/* <span>{getFinder()}</span>  */}
							Found By:{" "}
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
          {/* <Card.Body className="finderInfo">
            <Card.Title>
              <span>{getFinder()}</span> 
							Found By:{" "}
              <span>{getFinderName()}</span>
            </Card.Title>
            <Card.Text>
              Rating: <span>{getFinderRating()}</span>
            </Card.Text>
            <Button variant="dark">Message</Button>
          </Card.Body> */}
        </Card>
      </section>
    </>
  );
};

export default RenderIndex;
