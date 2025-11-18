import {toast} from "react-toastify";
import {EMIRATES_LIST} from "../../data/Constants.js";
import {getImageUrl} from "../../utils/util.js";
import {Link} from "react-router-dom";
import { CreditCard, Banknote } from "lucide-react";
import { useState} from "react";

const methods = [
    {
        id: "card",
        label: "Credit / Debit Card",
        icon: <CreditCard className="me-2 text-success" />,
        image: "/assets/img/shop/credit_card.jpg",
        description: "Pay securely using your credit or debit card.",
    },
    {
        id: "bank",
        label: "Direct Bank Transfer",
        icon: <Banknote className="me-2 text-primary" />,
        description:
            "Make your payment directly into our bank account. Use your Order ID as the payment reference. Your order will be processed after payment confirmation.",
    },
];

const Checkout = ({product, quantity}) => {
    const [formData, setFormData] = useState({
        emirate: "",
        firstName: "",
        lastName: "",
        company: "",
        street: "",
        apartment: "",
        city: "",
        postcode: "",
        email: "",
        phone: "",
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

    const totalPrice = quantity * product.price;
    const formattedAddress = [formData.postcode, formData.street, formData.city, formData.emirate , 'UAE']
        .filter(Boolean) // remove empty fields
        .join(", ");


    function handleApplyCoupon () {
        toast.error('Enter a valid code')
    }

    // Handle change for all inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send this to API here
    };

    return (
<div className="th-checkout-wrapper section-padding fix">
        <div className="container">

            <div className="woocommerce-form-coupon-toggle">
                <div className="woocommerce-info">
                    Have a coupon?
                    <a href="#" className="showcoupon ms-2">
                        Enter your code to claim your discount
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <form action="#" className="woocommerce-form-coupon">
                        <div className="form-group">
                            <label>Coupon code</label>
                            <input type="text" className="form-control" placeholder="Write your coupon code" />
                        </div>
                        <div className="form-group">
                            <button onClick={handleApplyCoupon} className="th-btn">Apply coupon</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* FORM DATA */}
            <form
                onSubmit={handleSubmit}
                className="woocommerce-checkout woocommerce-form-coupon mt-5"
            >
                <div className="row">
                    <h2 className="h4 mb-3">Billing Details</h2>
                    <div className="row">
                        {/* Emirate Select */}
                        <div className="col-12 form-group">
                            <select
                                className="single-select w-100 mb-3 form-control"
                                name="emirate"
                                value={formData.emirate}
                                onChange={handleChange}
                            >
                                <option value="">Select Emirate</option>
                                {EMIRATES_LIST.map((emirate) => (
                                    <option key={emirate} value={emirate}>
                                        {emirate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* First & Last Name */}
                        <div className="form-group d-flex gap-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Company Name */}
                        <div className="col-12 form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Company Name"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Address */}
                        <div className="col-12 form-group d-flex gap-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Street Address"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apartment, suite, unit etc. (optional)"
                                name="apartment"
                                value={formData.apartment}
                                onChange={handleChange}
                            />
                        </div>

                        {/* City & Postcode */}
                        <div className="col-12 form-group d-flex gap-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Town / City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Postcode / Zip"
                                name="postcode"
                                value={formData.postcode}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="col-12 form-group d-flex gap-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
            </form>

            {/* YOUR ORDER TABLE */}
            <h4 className="mt-4 py-lg-2 text-uppercase">Your Order</h4>
            <form action="#" className="woocommerce-cart-form">
                <table className="cart_table mb-20">
                    <thead>
                        <tr>
                            <th className="cart-col-image">Image</th>
                            <th className="cart-colname">Product Name</th>
                            <th className="cart-col-price">Price</th>
                            <th className="cart-col-quantity">Quantity</th>
                            <th className="cart-col-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cart_item">
                            <td data-title="Product">
                                <a className="cartimage" href="shop-details.html">
                                    <img
                                        width="91"
                                        height="91"
                                        src={getImageUrl(product.img)}
                                        alt="Image"
                                    />
                                </a>
                            </td>
                            <td data-title="Name">
                                <Link className="cartname" to="/shop/shop-details" state={{product:product}}>{product.name}</Link>
                            </td>
                            <td data-title="Price">
                                <span className="amount">{product.price} AED</span>
                            </td>
                            <td data-title="Quantity">
                                <strong className="product-quantity">{quantity}</strong>
                            </td>
                            <td data-title="Total">
                                <span className="amount">{totalPrice} AED</span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot className="checkout-ordertable">
                        <tr className="cart-subtotal">
                            <th>Subtotal</th>
                            <td data-title="Subtotal" colSpan="4">
                                <span className="woocommerce-Price-amount amount">
                                    {totalPrice} AED
                                </span>
                            </td>
                        </tr>
                        <tr className="woocommerce-shipping-totals shipping">
                            <th>Shipping</th>
                            <td data-title="Shipping" colSpan="4">
                                { formData.street ?
                                    formattedAddress
                                    :
                                    'Enter your address to view shipping options.'
                                }
                            </td>
                        </tr>
                        <tr className="order-total">
                            <th>Total</th>
                            <td data-title="Total" colSpan="4">
                                <strong>
                                    <span className="woocommerce-Price-amount amount">
                                        {totalPrice} AED
                                    </span>
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>

            {/* SELECT PAYMENT METHOD */}
            <div className="payment-methods mt-4">
                <h4 className="mb-3">Payment Method</h4>
                <div className="row g-3">
                    {methods.map((method) => (
                        <div key={method.id} className="col-12">
                            <div
                                className={`card border-2 shadow-sm p-3 d-flex align-items-start flex-row gap-3 ${
                                    selectedPaymentMethod === method.id ? "border-primary bg-light" : "border-light"
                                }`}
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedPaymentMethod(method.id)}
                            >
                                <div className="form-check mt-1">
                                    <input
                                        type="radio"
                                        name="payment_method"
                                        checked={selectedPaymentMethod === method.id}
                                        onChange={() => setSelectedPaymentMethod(method.id)}
                                        className="form-check-input"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center mb-1">
                                        {method.icon}
                                        <h6 className="mb-0">{method.label}</h6>
                                        {method.image && (
                                            <img
                                                src={method.image}
                                                alt="card option"
                                                className="ms-2 rounded"
                                                height={35}
                                            />
                                        )}
                                    </div>
                                    <p className="text-muted small mb-0">{method.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SUBMIT */}
            <div className="col-12 form-group mb-0 mt-3">
                <Link to='/shop/payment' state={{method : selectedPaymentMethod, totalPrice : totalPrice, product: product}}>
                    <button className="theme-btn btn btn-primary w-100 text-uppercase fw-bold">
                        Continue to Payment
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Checkout;