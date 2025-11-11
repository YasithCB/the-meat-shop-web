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

// new → send reset code to email
export function forgotPassword(data, role) {
    // data = { email }
    return fetchWrapper(`/auth/forgot-password/${role}`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}

// new → verify code + update password
export function resetPassword(data, role) {
    // data = { email, code, newPassword }
    return fetchWrapper(`/auth/reset-password/${role}`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}