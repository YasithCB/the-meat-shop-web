import {fetchWrapper} from "../utils/fetchWrapper.js";

export const getAllSuppliers = async () => {
    return fetchWrapper("/suppliers");
};