import { nanoid } from "nanoid";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RenderFilteredSearches = ({
  itemFound,
  getFinder,
  getFinderName,
  getFinderRating,
  filteredSearchOptions,
  users,
}) => {
  const navigate = useNavigate();

  const filterRatings = (rating) => {
    // console.log(rating);
    return (
      <>
        {users.map((user) => {
          if (user.rating === Number(rating)) {
            return renderFilteredSearches(rating);
          }
        })}
      </>
    );
  };

  const renderFilteredSearches = (rating) => {
    // console.log(rating);
    return (
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
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      {filteredSearchOptions.category === itemFound.category
        ? renderFilteredSearches(filteredSearchOptions.rating)
        : filteredSearchOptions.borough.toLowerCase() ===
          itemFound.borough.toLowerCase()
        ? renderFilteredSearches(filteredSearchOptions.rating)
        : filteredSearchOptions.neighborhood.toLowerCase() ===
          itemFound.neighborhood.toLowerCase()
        ? renderFilteredSearches(filteredSearchOptions.rating)
        : filterRatings(filteredSearchOptions.rating)}
    </>
  );
};

export default RenderFilteredSearches;
