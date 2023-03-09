import SingleEventCard from "./SingleEventCard";
import { Row, Alert } from "react-bootstrap";

function EventCards(props) {
    return (
        <Row className="card-wrapper">
            {!props.eventData || props.eventData.length === 0 ? (
                <Alert variant="danger">No events found</Alert>
            ) : (
                props.eventData.map(function (event, index) {
                    return (
                        <div className="col" key={index}>
                            <SingleEventCard event={event} key={index} />
                        </div>
                    );
                })
            )}
        </Row>
    );
}

export default EventCards;