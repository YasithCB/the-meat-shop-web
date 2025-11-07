import { fetchWrapper } from "../utils/fetchWrapper.js";

/**
 * Add a review for a product
 * @param {Object} reviewData - { product_id, user_name, rating, comment }
 * @returns {Promise<Object>}
 */
export const addReview = async (reviewData) => {
    return fetchWrapper("/reviews", {
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: {
            "Content-Type": "application/json",
        },
    });
};
