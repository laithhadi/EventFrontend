import AbstractAPIClient from "../AbstractAPIClient";
import jwt_decode from "jwt-decode";

class AuthAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://event-backend-4z0x.onrender.com/auth/";
    }

    isLoggedIn() {
        const token = localStorage.getItem("token");
        if (!token) return false;

        const decodedToken = jwt_decode(token);
        if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
            localStorage.removeItem("token");
            return false;
        }

        return true;
    }

    isAdmin() {
        const token = localStorage.getItem("token");
        if (!token) return false;

        const decodedToken = jwt_decode(token);
        if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
            localStorage.removeItem("token");
            return false;
        }

        return true;
    }

    async loginOrRegister(data, operation) {
        try {
            const response = await this.postRequest(`${this.baseURL}${operation}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthAPICalls;