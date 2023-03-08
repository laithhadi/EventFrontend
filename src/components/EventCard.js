import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function EventCard(props) {
  return (
    <Card className="eventCard">
      <Container>
        <Card.Img className="cardImage" variant="top" src={props.photoUrl} />
      </Container>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Subtitle>{props.location}</Card.Subtitle>
        <Card.Subtitle>{props.venue}</Card.Subtitle>
        <Card.Subtitle>{props.startDate}</Card.Subtitle>
        <Card.Subtitle>{props.endDate}</Card.Subtitle>
        <Card.Text>{props.price}</Card.Text>
        <Card.Text>{props.rating}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EventCard