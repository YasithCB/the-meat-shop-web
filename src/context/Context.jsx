import React, {useState, useContext, useEffect} from "react";
import {getAllProducts} from "../api/productAPI.js";
import {getAllSuppliers} from "../api/supplierAPI.js";

const dataContext = React.createContext();

export default function Context({children}) {

    // 👤 AUTH STATE
    const [currentUser, setCurrentUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        if (currentUser && authToken) {
            fetchProductsFromDB();
            fetchSuppliersFromDB();
        }
    }, [currentUser, authToken]);

    // PRODUCTS ----------------------------------------------
    const fetchProductsFromDB = async () => {
        try {
            const resp = await getAllProducts(); // call your API wrapper
            setProducts(resp.data); // store full response
        } catch (err) {
            console.error("Failed to fetchProductsFromDB:", err);
        }
    };
    // PRODUCTS ----------------------------------------------

    // SUPPLIERS ----------------------------------------------
    const fetchSuppliersFromDB = async () => {
        try {
            const resp = await getAllSuppliers(); // call your API wrapper
            setSuppliers(resp.data); // store full response
        } catch (err) {
            console.error("Failed to fetchSuppliersFromDB:", err);
        }
    };
    // SUPPLIERS ----------------------------------------------

    // 🧠 AUTH — load from localStorage once
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("auth_token");
        if (user && token) {
            setCurrentUser(user);
            setAuthToken(token);
        }
    }, []);

    // 🧠 AUTH — update localStorage when auth changes
    useEffect(() => {
        if (currentUser && authToken) {
            localStorage.setItem("user", JSON.stringify(currentUser));
            localStorage.setItem("auth_token", authToken.toString());
        } else {
            localStorage.removeItem("user");
            localStorage.removeItem("auth_token");
        }
    }, [currentUser, authToken]);

    const logout = () => {
        setCurrentUser(null);
        setAuthToken(null);
    };

    // Combine all context data
    const contextElement = {
        // PRODUCTS
        products,
        setProducts,
        fetchProductsFromDB,

        // SUPPLIERS
        suppliers,
        setSuppliers,
        fetchSuppliersFromDB,

        // 👤 Auth
        currentUser,
        setCurrentUser,
        authToken,
        setAuthToken,
        logout,
    };

    return (
        <dataContext.Provider value={contextElement}>
            {children}
        </dataContext.Provider>
    );
}

export const useContextElement = () => useContext(dataContext);


