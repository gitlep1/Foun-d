import { useState } from "react";
import { Form, Button, Dropdown, Card } from "react-bootstrap";

import "./FilteredSearch.scss";

const FilteredSearch = ({
  itemName,
  setItemName,
  filteredSearchOptions,
  setFilteredSearchOptions,
}) => {
  const [rating, setRating] = useState("");
  const [selectCategory, setSelectCategory] = useState("Default");

  const handleItemNameChange = (e) => {
    const { name, value } = e.target;

    if (name === "itemName") {
      setItemName(value);
    }
  };

  // const handle

  const radioButtonCheck = (e) => {
    setRating(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form id="searhSection-form" onSubmit={handleSubmit}>
      <section id="searhSection-innerSection">
        <Form.Group controlId="formBasicSearchbar">
          <Form.Control
            type="text"
            name="itemName"
            placeholder="Item Name"
            onChange={handleItemNameChange}
            value={itemName}
          />
        </Form.Group>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="advancedSearchButton">
            Advanced Search
          </Dropdown.Toggle>

          <Dropdown.Menu id="filterListContainer">
            <section id="filterList">
              <Card id="filterCategory">
                <h2>Category</h2>
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
              </Card>
              <Card id="filterUserRatings">
                <h2>User Rating</h2>
              </Card>
            </section>
            <Button variant="success" id="filteredSearchButton">
              Filter Search
            </Button>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </Form>
  );
};

export default FilteredSearch;
