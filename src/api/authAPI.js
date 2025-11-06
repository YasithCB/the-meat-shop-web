// api/authApi.js
import { fetchWrapper } from "../utils/fetchWrapper.js";

export const login = async (data, role) => {
    // data = { phone, password }
    return fetchWrapper(`/auth/login/${role}`, {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export const signup = async (formData, role) => {
    return fetchWrapper(`/auth/register/${role}`, {
        method: "POST",
        body: formData,
        headers: {
            // Don't set Content-Type! Let the browser set multipart/form-data with boundary
        },
    });
};