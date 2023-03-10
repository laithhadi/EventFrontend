import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";

function SearchBox(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    props.onSearch(query, searchField);
  };

  const handleSelect = (event) => {
    const field = event.target.value;
    setSearchField(field);
    props.onSearch(searchQuery, field);
  };

  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search:</InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
          placeholder= "Search for events here..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Form.Select aria-label="Search field" value={searchField} onChange={handleSelect}>
          <option value="name">Name</option>
          <option value="startDate">Date</option>
          <option value="location">Location</option>
          <option value="venue">Venue</option>
          <option value="rating">Rating</option>
        </Form.Select>
      </InputGroup>
    </>
  );
}

export default SearchBox;