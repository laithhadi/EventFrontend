import SearchBox from "./SearchBox";
import EventCards from "./EventCards";
import EventAPICalls from "../../API/Event/EventAPICalls";
import { getToken } from "../_utils";
import { Container, Alert, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

function EventsView() {
  const [errorMessage, setErrorMessage] = useState("");
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    fetchData();
  }, []);

  return (
    <Container>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <SearchBox />
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <EventCards eventData={eventData} />
      )}
    </Container>
  );
}
export default EventsView;