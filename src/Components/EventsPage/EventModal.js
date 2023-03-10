import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import EventAPICalls from "../../API/Event/EventAPICalls";
import { getToken } from "../_utils";

function EventModal(props) {
    const api = new EventAPICalls();
    const token = getToken();
    const [formData, setFormData] = useState({
        name: props.event.name,
        description: props.event.description,
        location: props.event.location,
        venue: props.event.venue,
        startDate: props.event.startDate,
        endDate: props.event.endDate,
        photoUrl: props.event.photoUrl,
        price: props.event.price,
        rating: props.event.rating,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedEvent = await api.updateEvent(token, props.event._id, formData);
            console.log("Event updated:", updatedEvent);
        } catch (error) {
            console.error("Failed to update event:", error);
        }
        props.onHide();
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            await api.deleteEvent(token, props.event._id);
            props.onHide();
        } catch (error) {
            console.error("Failed to delete event:", error);
        }
        props.onHide();
    };

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Venue</Form.Label>
                        <Form.Control
                            type="text"
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="photoUrl"
                            value={formData.photoUrl}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EventModal;