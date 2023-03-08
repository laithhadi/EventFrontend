import AbstractAPIClient from "../AbstractAPIClient";





class EventApi extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://event-backend.onrender.com/";
        this.token = "";
      
    }


    async getAllEvents(EventModel) {
        try {
        fetch()
            const params = {
                token: this.token
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