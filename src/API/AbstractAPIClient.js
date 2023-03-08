import axios from "axios";

class AbstractAPIClient {
    constructor() {
        this.baseURL = "";
    }

    async setBaseURL(url) {
        this.baseURL = url;
    }

    async getBaseURL() {
        return this.baseURL;
    }

    async responseStatusCheck(resObj) {
        if (resObj.status >= 200 && resObj.status < 300) {
            return Promise.resolve(resObj);
        } else {
            throw new Error(resObj.status);
        }
    }

    async getRequest(url, config = {}) {
        try {
            const req = await axios.get(url, config);
            const res = await this.responseStatusCheck(req);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async fetchData(url, config = {}) {
        const response = await this.getRequest(url, config);
        return response.data;
    }
}

export default AbstractAPIClient;