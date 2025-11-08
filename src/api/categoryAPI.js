import {fetchWrapper} from "../utils/fetchWrapper.js";

export const getAllCategories = async () => {
    return fetchWrapper("/category");
};