import AbstractAPIClient from "../AbstractAPIClient";





class EventApi extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://event-backend.onrender.com/";
        this.token = "79635c6cf66b1dc393e8496f6d80e8a3";
      
    }







    async getAllEvents(EventModel) {
        try {
        fetch()
            const params = {
                name: EventModel.name,
                location: EventModel.location,
                venue: EventModel.venue,
                photoUrl: EventModel.photoUrl,
                startDate: EventModel.startDate,
                endDate: EventModel.endDate,
                price: EventModel.price,
                rating: EventModel.rating,
                appid: this.token,
            };
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            // Since we can only get 3 hour intervals for 5 days, we are forced to filter the response
            return { ...data, list: filteredData };
        } catch (error) {
            throw new Error("Failed to fetch 5-day forecast");
        }
    }

    // async getOneEvent() {
    //     try {
    //         fetch(baseURL + '')
    //     }
    // }

    
}

export default EventApi;