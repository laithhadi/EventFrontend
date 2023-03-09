import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import EventAPICalls from '../../API/Event/EventAPICalls';
import { getEncodedToken } from "../_utils";

function EventsCarousel() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const eventApi = new EventAPICalls();
            const data = await eventApi.getAllEvents(getEncodedToken());
            setEvents(data);
        };
        fetchData();
    }, );


    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideEnd = (index) => {
        if (index === events.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index + 1);
        }
    };


    return ( 
        <Carousel
            activeIndex={activeIndex}
            interval={1200}
            onSelect={handleSlideEnd}
        >
            {events.map(events => (
                <Carousel.Item key={events.id}>
                    <img className="d-block w-100" src={events.photoUrl} />
                    <Carousel.Caption>
                        <h3>{events.name}{events.startDate}</h3>
                        <p>{events.description}</p>
                        <span>{events.location}{events.venue}</span>
                        <span>{events.endDate}{events.price}</span>
                        <p>{events.rating}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default EventsCarousel