import SearchBox from "./SearchBox";
import EventCards from "./EventCards";
import EventAPICalls from "../../API/Event/EventAPICalls";
import { getToken } from "../_utils";
import { Container, Alert, Spinner, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CreateEventModal from "./CreateEventModal";

function EventsView() {
  const [errorMessage, setErrorMessage] = useState("");
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name");
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const eventApi = new EventAPICalls();
      const data = await eventApi.getAllEvents(getToken());
      setEventData(data);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query, field) => {
    setSearchQuery(query);
    setSearchField(field);
  };

  const filteredEvents = eventData.filter((event) => {
    const { name, venue, location, rating } = event;
    const eventDate = new Date(event.startDate).toLocaleString("en-GB");

    let searchFieldVal = "";

    switch (searchField) {
      case "venue":
        searchFieldVal = venue.toLowerCase();
        break;
      case "location":
        searchFieldVal = location.toLowerCase();
        break;
      case "rating":
        searchFieldVal = rating !== undefined ? rating.toString() : "Unavailable";
        break;
      case "date":
        searchFieldVal = eventDate;
        break;
      default:
        searchFieldVal = name.toLowerCase();
        break;
    }

    return searchFieldVal.includes(searchQuery.toLowerCase());
  });


  return (
    <Container className="mt-3">
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Row>
        <Col lg={8}><SearchBox onSearch={handleSearch} /></Col>
        <Col lg={4}>
          <Button variant="light" onClick={() => setModalShow(true)}>
            Create New Event
          </Button>
        </Col>
      </Row>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <EventCards eventData={filteredEvents} />
      )}
      <CreateEventModal
        show={modalShow} onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default EventsView;