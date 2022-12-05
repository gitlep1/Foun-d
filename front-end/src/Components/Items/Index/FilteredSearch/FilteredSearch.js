import { useState } from "react";
import { Form, Button, Dropdown, Card } from "react-bootstrap";

import "./FilteredSearch.scss";

const FilteredSearch = ({
  itemName,
  setItemName,
  filteredSearchOptions,
  setFilteredSearchOptions,
  setFilterSearches,
}) => {
  const [rating, setRating] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [selectCategory, setSelectCategory] = useState("Default");
  const [selectBorough, setSelectBorough] = useState("Default");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "itemName") {
      setItemName(value);
    } else if (name === "neighborhood") {
      setNeighborhood(value);
    } else if (name === "zipcode") {
      setZipcode(value);
    }
  };

  const radioButtonCheck = (e) => {
    setRating(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleBoroughChange = (e) => {
    setSelectBorough(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      selectCategory !== "Default" ||
      selectBorough !== "Default" ||
      (rating !== "" && rating !== "0") ||
      zipcode !== "" ||
      neighborhood !== ""
    ) {
      setFilterSearches(true);
      setFilteredSearchOptions({
        category: selectCategory,
        borough: selectBorough,
        neighborhood: neighborhood,
        zipcode: zipcode,
        rating: rating,
      });
    } else {
      setFilterSearches(false);
    }
  };

  return (
    <Form id="searhSection-form" onSubmit={handleSubmit}>
      <section id="searhSection-innerSection">
        <Form.Group controlId="formBasicSearchbar">
          <Form.Control
            type="text"
            name="itemName"
            placeholder="Item Name"
            onChange={handleChange}
            value={itemName}
          />
        </Form.Group>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="advancedSearchButton">
            Advanced Search
          </Dropdown.Toggle>

          <Dropdown.Menu id="filterListContainer" variant="dark">
            <section id="filterList">
              <Card id="filterCategory">
                <h2>Category</h2>
                <br></br>
                <Form.Select
                  aria-label="filter-Category"
                  id="filter-category"
                  value={selectCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="Default">--- Pick A Category ---</option>
                  <option value="Pets">Pets</option>
                  <option value="Toys">Toys</option>
                  <option value="Health">Health</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Personal">Personal</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Botany">Botany (Plants)</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Card>

              <Card id="filterLocation">
                <h2>Location</h2>
                <span>Borough: </span>
                <Form.Select
                  aria-label="filter-Category"
                  id="filter-category"
                  value={selectBorough}
                  onChange={handleBoroughChange}
                >
                  <option value="Default">--- Pick A borough ---</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Queens">Queens</option>
                  <option value="Staten Island">Staten Island</option>
                </Form.Select>

                <Form.Group controlId="formBasicNeighborhood">
                  <Form.Label>Neighborhood</Form.Label>
                  <Form.Control
                    type="neighborhood"
                    name="neighborhood"
                    placeholder="Neighborhood"
                    onChange={handleChange}
                    value={neighborhood}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicNeighborhood">
                  <Form.Label>Zipcode</Form.Label>
                  <Form.Control
                    type="number"
                    name="zipcode"
                    placeholder="Zipcode"
                    onChange={handleChange}
                    value={zipcode}
                  />
                </Form.Group>
              </Card>

              <Card id="filterUserRatings">
                <h2>User Rating</h2>
                <br></br>
                <div id="innerUserRatings">
                  <Form.Check
                    type="radio"
                    id="notApplicable"
                    name="ratingSelect"
                    value="0"
                    label="N/A"
                    onChange={radioButtonCheck}
                    checked={rating === "0"}
                  />

                  <Form.Check
                    type="radio"
                    id="oneStar"
                    name="ratingSelect"
                    value="1"
                    label="1 star"
                    onChange={radioButtonCheck}
                    checked={rating === "1"}
                  />
                  <Form.Check
                    type="radio"
                    id="twoStar"
                    name="ratingSelect"
                    value="2"
                    label="2 stars"
                    onChange={radioButtonCheck}
                    checked={rating === "2"}
                  />
                  <Form.Check
                    type="radio"
                    id="threeStar"
                    name="ratingSelect"
                    value="3"
                    label="3 stars"
                    onChange={radioButtonCheck}
                    checked={rating === "3"}
                  />
                  <Form.Check
                    type="radio"
                    id="fourStar"
                    name="ratingSelect"
                    value="4"
                    label="4 stars"
                    onChange={radioButtonCheck}
                    checked={rating === "4"}
                  />
                  <Form.Check
                    type="radio"
                    id="fiveStar"
                    name="ratingSelect"
                    value="5"
                    label="5 stars"
                    onChange={radioButtonCheck}
                    checked={rating === "5"}
                  />
                </div>
              </Card>
            </section>
            <Button variant="success" id="filteredSearchButton" type="submit">
              Filter Search
            </Button>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </Form>
  );
};

export default FilteredSearch;
