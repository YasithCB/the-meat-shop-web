import { fetchWrapper } from "../utils/fetchWrapper.js";

/**
 * Add a new product
 * @param {FormData} formData - Product data (with images)
 * @returns {Promise<Object>} API response
 */
export const addProduct = async (formData) => {
    return fetchWrapper("/products", {
        method: "POST",
        body: formData,
        headers: {
            // Don't set Content-Type! Let the browser set multipart/form-data with boundary
        },
    });
};

export const updateProduct = async (productId, formData) => {
    return fetchWrapper(`/products/${productId}`, {
        method: "PUT",
        body: formData,
        headers: {
            // Don't set Content-Type! Let the browser set multipart/form-data with boundary
        },
    });
};

/**
 * Get all products
 */
export const getAllProducts = async () => {
    return fetchWrapper("/products");
};

/**
 * Get product by ID
 */
export const getProductById = async (id) => {
    return fetchWrapper(`/products/${id}`);
};

/**
 * Delete product by ID
 */
export const deleteProduct = async (id) => {
    return fetchWrapper(`/products/${id}`, {
        method: "DELETE",
    });
};
