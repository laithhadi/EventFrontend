import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import EventAPICalls from "../../API/Event/EventAPICalls";
import { getToken } from "../_utils";

function CreateEventModal(props) {
    const [validationErrors, setValidationErrors] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        venue: "",
        startDate: "",
        endDate: "",
        photoUrl: "",
        price: "",
        rating: "",
    });

    const api = new EventAPICalls();

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
            await api.createEvent(getToken(), {
                ...formData
            });

            setFormData({
                name: "",
                description: "",
                location: "",
                venue: "",
                startDate: "",
                endDate: "",
                photoUrl: "",
                price: "",
                rating: "",
            });
            props.onHide();
        } catch (error) {
            setValidationErrors(error.response.data.errors);
        }
    };

    const renderErrors = () => {
        return (
            <>
                {validationErrors.map((error, i) => {
                    return <p key={i}>{error}</p>
                })}
            </>
        );
    };

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create a new event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                validationErrors 
                && <Alert variant="danger">
                        {renderErrors()}
                </Alert>
                }
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
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
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
                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default CreateEventModal;