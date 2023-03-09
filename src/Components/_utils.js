import jwt_decode from "jwt-decode";

// Returns null if expired, token if not
export const getEncodedToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwt_decode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return null;
        } else {
            return token;
        }
    }

    return null;
};

// Returns null if expired, token if not
export const decodeToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwt_decode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return null;
        } else {
            return decodedToken;
        }
    }

    return null;
};