import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import EventAPICalls from '../../API/Event/EventAPICalls';
import { getToken, capitalize } from "../_utils";
import { format } from 'date-fns';

function EventCarousel() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const eventApi = new EventAPICalls();
                const data = await eventApi.getTopFiveRatedEvents(getToken());
                setEvents(data);
            } catch (error) {
                console.log("oh well");
            } finally {
                setIsLoading(false);
            }
        }
        fetchEvents();
    }, []);


    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Container>
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                    <Carousel
                        activeIndex={activeIndex}
                        interval={1200}
                        onSelect={handleSelect}
                    >
                        {events.map(events => (
                            <Carousel.Item key={events._id}>
                                <img className="d-block w-100" src={events.photoUrl} alt="happy" />
                                <Carousel.Caption>
                                    <h3>
                                        {capitalize(events.name)}
                                        <br />
                                        Start: {format(new Date(events.startDate), 'HH:mm dd/MM/yyyy')}
                                        <br />
                                        End: {format(new Date(events.endDate), 'HH:mm dd/MM/yyyy')}
                                    </h3>
                                    <h2>{events.location}</h2>
                                    <h2>{events.venue}</h2>
                                    <h2>£{events.price ? events.price : "FREE"}</h2>
                                    <h2>Rating: {events.rating}</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
            )}
        </Container>
    );
}

export default EventCarousel;