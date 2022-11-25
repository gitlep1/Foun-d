import { Button, Form, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const RenderIndex = ({ foundItems, user, users, authenticated }) => {
  const navigate = useNavigate();

  return (
    <Card key={nanoid()} className="myitems-card">
      <Card.Img variant="top" src={foundItems.itemimg} />
      <Card.Body>
        <Card.Title>
          Name: <span>{foundItems.itemname}</span>
        </Card.Title>
        <Card.Text>
          Description: <span>{foundItems.description}</span>
        </Card.Text>
        <Card.Text>
          Neighborhood: <span>{foundItems.neighborhood}</span>
        </Card.Text>
      </Card.Body>
      <Button
        variant="success"
        onClick={() => {
          navigate(`/Found/${foundItems.id}`);
        }}
      >
        More Info
      </Button>
    </Card>
  );
};

export default RenderIndex;
