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
  setUsers,
}) => {
  const navigate = useNavigate();

  const renderFilteredSearches = () => {
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

  const filterDateRange = (date1, date2) => {
    const itemDate = new Date(itemFound.itemdate);

    if (
      (itemDate.getTime() >= date1.getTime() &&
        itemDate.getTime() <= date2.getTime()) ||
      itemDate.getTime() === date1.getTime() ||
      itemDate.getTime() === date2.getTime() ||
      (itemDate.getTime() <= date1.getTime() &&
        itemDate.getTime() >= date2.getTime())
    ) {
      return renderFilteredSearches();
    }
  };

  let filteredItems = [];

  if (filteredSearchOptions.category === itemFound.category) {
    filteredItems = renderFilteredSearches();
  } else if (
    filteredSearchOptions.borough.toLowerCase() ===
    itemFound.borough.toLowerCase()
  ) {
    filteredItems = renderFilteredSearches();
  } else if (
    filteredSearchOptions.neighborhood.toLowerCase() ===
    itemFound.neighborhood.toLowerCase()
  ) {
    filteredItems = renderFilteredSearches();
  } else if (filteredSearchOptions.date1 && filteredSearchOptions.date2) {
    filteredItems = filterDateRange(
      filteredSearchOptions.date1,
      filteredSearchOptions.date2
    );
  }

  return (
    <section>
      <span>{filteredItems}</span>
    </section>
  );
};

export default RenderFilteredSearches;
