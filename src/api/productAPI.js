import {fetchWrapper} from "../utils/fetchWrapper.js";

export const getAllProducts = async () => {
    return fetchWrapper("/products");
};