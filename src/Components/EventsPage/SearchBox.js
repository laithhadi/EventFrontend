import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBox() {
    const placeholderText = "Search for events here";
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search:</InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
          placeholder={placeholderText}
        />
      </InputGroup>
    </>
  );
}

export default SearchBox;