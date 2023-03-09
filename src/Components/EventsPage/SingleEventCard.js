import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { format } from 'date-fns';
import EventModal from "./EventModal";

function SingleEventCard(props) {
    const [modalShow, setModalShow] = useState(false);
    const event = props.event;

    const startDate = format(new Date(event.startDate), 'HH:mm dd/MM/yyyy');
    const endDate = format(new Date(event.endDate), 'HH:mm dd/MM/yyyy');

    return (
        <Row className="mt-5">
            <Col lg={12}>
                <Card onClick={() => setModalShow(true)}>
                    <Card.Img className="event-card-img" variant="top" src={event.photoUrl} />
                    <Card.Body>
                        <Card.Text className="m-0">{event.name}</Card.Text>
                        {/* <Card.Text>Description: {event.description}</Card.Text> */}
                        <Card.Text>{event.location}</Card.Text>
                        <Card.Text>{event.venue}</Card.Text>
                        <Card.Text>Start: {startDate}</Card.Text>
                        <Card.Text>End: {endDate}</Card.Text>
                        <Card.Text>{event.price ? `£${event.price}` : "FREE"}</Card.Text>
                        <Card.Text>Rating: {event.rating ? event.rating : "-"}</Card.Text>
                    </Card.Body>
                </Card>
                <EventModal
                    show={modalShow} event={event} onHide={() => setModalShow(false)}
                />
            </Col>
        </Row>
    );
};

export default SingleEventCard;