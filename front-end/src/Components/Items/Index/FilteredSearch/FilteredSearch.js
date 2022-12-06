import { useState } from "react";
import { Form, Button, Dropdown, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import moment from "moment";

import "./FilteredSearch.scss";

const FilteredSearch = ({
  itemName,
  setItemName,
  setFilteredSearchOptions,
  setFilterSearches,
}) => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [selectCategory, setSelectCategory] = useState("Default");
  const [selectBorough, setSelectBorough] = useState("Default");

  const [calendarOpen1, setCalendarOpen1] = useState(false);
  const [calendarOpen2, setCalendarOpen2] = useState(false);
  const [calendarValue1, setCalendarValue1] = useState(new Date());
  const [calendarValue2, setCalendarValue2] = useState(new Date());

  const selectedDate1 = moment(calendarValue1).format("MMMM Do YYYY");
  const selectedDate2 = moment(calendarValue2).format("MMMM Do YYYY");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "itemName") {
      setItemName(value);
    } else if (name === "neighborhood") {
      setNeighborhood(value);
    } else if (name === "date1") {
      setDate1(value);
    } else if (name === "date2") {
      setDate2(value);
    }
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
      selectedDate1 !== "" ||
      selectedDate2 !== "" ||
      neighborhood !== ""
    ) {
      setFilterSearches(true);
      setFilteredSearchOptions({
        category: selectCategory,
        borough: selectBorough,
        neighborhood: neighborhood,
        date1: date1,
        date2: date2,
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
                    type="text"
                    name="neighborhood"
                    placeholder="Neighborhood"
                    onChange={handleChange}
                    value={neighborhood}
                  />
                </Form.Group>
              </Card>

              <Card id="filterDateRange">
                <h2>Date Range</h2>
                <br></br>
                <div id="innerDateRange">
                  <Form.Group controlId="formBasicDate1">
                    <Form.Label>Date 1</Form.Label>
                    <Form.Control
                      type="text"
                      name="date1"
                      onChange={setCalendarValue1}
                      value={selectedDate1}
                      onClick={() => {
                        setCalendarOpen1(!calendarOpen1);
                      }}
                    />
                    {calendarOpen1 ? (
                      <Calendar
                        onChange={setCalendarValue1}
                        value={calendarValue1}
                      />
                    ) : null}
                  </Form.Group>

                  <Form.Group controlId="formBasicDate1">
                    <Form.Label>Date 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="date2"
                      onChange={setCalendarValue2}
                      value={selectedDate2}
                      onClick={() => {
                        setCalendarOpen2(!calendarOpen2);
                      }}
                    />
                    {calendarOpen2 ? (
                      <Calendar
                        onChange={setCalendarValue2}
                        value={calendarValue2}
                      />
                    ) : null}
                  </Form.Group>
                  <br></br>
                  <Button
                    variant="dark"
                    onClick={() => {
                      selectedDate2 = "";
                    }}
                  >
                    Clear Dates
                  </Button>
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
