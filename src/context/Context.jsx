import React, {useState, useContext, useEffect} from "react";
import {getAllProducts} from "../api/productAPI.js";
import {getAllSuppliers} from "../api/supplierAPI.js";

const dataContext = React.createContext();

export default function Context({children}) {

    // 👤 AUTH STATE
    const [currentUser, setCurrentUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    const [currentRole, setCurrentRole] = useState('customer');

    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

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

    // CART ----------------------------------------------
    // LocalStorage sync — CART
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("meat_shop_cartList"));
        setCartProducts(storedCart);
        console.log('storedCart: ', storedCart);
        console.log('storedCart: ', storedCart);
        console.log('storedCart: ', storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("meat_shop_cartList", JSON.stringify(cartProducts));
    }, [cartProducts]);

    const addProductToCart = async (product) => {
        setCartProducts(product);
        localStorage.setItem("meat_shop_cartList", JSON.stringify(product));
    };

    const clearCart = async () => {
        // Clear local state and localStorage
        setCartProducts([]);
        localStorage.setItem("meat_shop_cartList", JSON.stringify([]));
    };
    // CART ----------------------------------------------

    // 🧠 AUTH — load from localStorage once
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("meat_shop_user"));
        const token = localStorage.getItem("meat_shop_auth_token");
        const role = localStorage.getItem("meat_shop_role");
        if (user && token && role) {
            setCurrentUser(user);
            setAuthToken(token);
            setCurrentRole(role);
        }
    }, []);

    // 🧠 AUTH — update localStorage when auth changes
    useEffect(() => {
        if (currentUser && authToken && currentRole) {
            localStorage.setItem("meat_shop_user", JSON.stringify(currentUser));
            localStorage.setItem("meat_shop_auth_token", authToken.toString());
            localStorage.setItem("meat_shop_role", currentRole.toString());
        } else {
            localStorage.removeItem("meat_shop_user");
            localStorage.removeItem("meat_shop_auth_token");
            localStorage.removeItem("meat_shop_role");
        }
    }, [currentUser, authToken, currentRole]);

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

        // CART
        clearCart,
        addProductToCart,
        cartProducts,

        // 👤 Auth
        currentUser,
        setCurrentUser,
        authToken,
        setAuthToken,
        currentRole,
        setCurrentRole,
        logout,
    };

    return (
        <dataContext.Provider value={contextElement}>
            {children}
        </dataContext.Provider>
    );
}

export const useContextElement = () => useContext(dataContext);


