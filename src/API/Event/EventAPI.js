import AbstractAPIClient from "../AbstractAPIClient";

class EventAPI extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://event-backend-4z0x.onrender.com";
    }

    async getAllEvents(token, queryParams = {}) {
        try {
            const url = `${this.baseURL}/events/`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
                params: queryParams
            };
            const data = await this.fetchData(url, config);
            return data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }
}

export default EventAPI;