import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import GoogleEventsAPI from '../../API/Event/GoogleEventsAPI';

function GoogleEventCard() {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      async function fetchEvents() {
        const googleEventsAPI = new GoogleEventsAPI();
        const suggestedEvents = await googleEventsAPI.suggestEvents();
        setEvents(suggestedEvents.events_results);
      }
  
      fetchEvents();
    }, []);
  
    return (
      <div>
        {events.slice(0, 6).map((event, i) => (
          <Card className="eventCard" key={i}>
            <Container>
              <Card.Img className="cardImage" variant="top" src={event.thumbnail ? event.thumbnail : "https://via.placeholder.com/150"} />
            </Container>
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <Card.Subtitle>{event.address}</Card.Subtitle>
              <Card.Subtitle>{event.venue.name}</Card.Subtitle>
              <Card.Subtitle>{event.date.start_date}</Card.Subtitle>
              <Card.Subtitle>{event.date.when}</Card.Subtitle>
              <Card.Text>{event.venue.rating}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  
  export default GoogleEventCard;