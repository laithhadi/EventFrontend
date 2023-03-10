import AbstractAPIClient from "../AbstractAPIClient";

class EventAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://event-backend-4z0x.onrender.com/events/";
    }

    async getAllEvents(token, queryParams = {}) {
        try {
            const url = `${this.baseURL}`;
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

    async getEvent(token, eventId) {
        try {
            const url = `${this.baseURL}${eventId}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await this.getRequest(url, config);
            return response.data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async createEvent(token, eventData) {
        try {
            const url = `${this.baseURL}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await this.postRequest(url, eventData, config);
            return response.data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async updateEvent(token, eventId, eventData) {
        try {
            const url = `${this.baseURL}${eventId}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await this.patchRequest(url, eventData, config);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteEvent(token, eventId) {
        try {
            const url = `${this.baseURL}${eventId}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await this.deleteRequest(url, config);
            return response.data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }
}

export default EventAPICalls;