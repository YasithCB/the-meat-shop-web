import { Link } from "react-router-dom";
import {toast} from "react-toastify";

const Cart = () => {

    function handleApplyCoupon() {
        toast.error('Coupon not Valid, Check Again!')
    }

    return (
        <div className="th-cart-wrapper  section-padding fix bg-white">
                <div className="container">

                    <div className="row ">
                        <div className="col-md-12 ">
                            <h2 className="h4 summary-title">Confirm Checkout</h2>

                            <table className="cart_totals">
                                <tbody>
                                    <tr>
                                        <td>Cart Subtotal</td>
                                        <td data-title="Cart Subtotal">
                                            <span className="amount"><bdi><span>$</span>47</bdi></span>
                                        </td>
                                    </tr>
                                    <tr className="shipping">
                                        <th>Shipping and Handling</th>
                                        <td data-title="Shipping and Handling">
                                            <ul className="woocommerce-shipping-methods list-unstyled">
                                                <li>
                                                    <input type="radio" id="free_shipping" name="shipping_method"
                                                        className="shipping_method" />
                                                    <label htmlFor="free_shipping">Free shipping</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="flat_rate" name="shipping_method"
                                                        className="shipping_method" checked="checked" />
                                                    <label htmlFor="flat_rate">Flat rate</label>
                                                </li>
                                            </ul>
                                            <p className="woocommerce-shipping-destination">
                                                Shipping options will be updated during checkout.
                                            </p>
                                            <form action="#" method="post">
                                                <a href="#" className="shipping-calculator-button">Change address</a>
                                                <div className="shipping-calculator-form">
                                                    <p className="form-row">
                                                        <select className="form-select">
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="BD" selected="selected">Bangladesh</option>
                                                        </select>
                                                    </p>
                                                    <p>
                                                        <select className="form-select">
                                                            <option value="">Select an option…</option>
                                                            <option value="BD-05">Bagerhat</option>
                                                            <option value="BD-01">Bandarban</option>
                                                            <option value="BD-02">Barguna</option>
                                                            <option value="BD-06">Barishal</option>
                                                        </select>
                                                    </p>
                                                    <p className="form-row">
                                                        <input type="text" className="form-control" placeholder="Town / City" />
                                                    </p>
                                                    <p className="form-row">
                                                        <input type="text" className="form-control" placeholder="Postcode / ZIP" />
                                                    </p>
                                                    <p>
                                                        <button className="theme-btn btn-fw">Update</button>
                                                    </p>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="order-total">
                                        <td>Order Total</td>
                                        <td data-title="Total">
                                            <strong><span className="amount"><bdi><span>$</span>47</bdi></span></strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>

                            <div className="th-cart-coupon d-flex mt-2 mb-4">
                                <input type="text" className="form-control" placeholder="Coupon Code..." />
                                <button onClick={handleApplyCoupon} className="theme-btn style5">Apply Coupon</button>
                            </div>

                            <div className="wc-proceed-to-checkout mt-3">
                                <Link to="/shop/checkout" className="theme-btn btn-fw">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Cart;