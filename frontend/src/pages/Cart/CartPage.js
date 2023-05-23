import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { useIncreaseCartProductMutation, useDecreaseCartProductMutation, useRemoveFromCartMutation } from "../../services/appApi";
import "./CartPage.css";

const stripePromise = loadStripe("your_stripe_publishable_key");

function CartPage() {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [increaseCart] = useIncreaseCartProductMutation();
    const [decreaseCart] = useDecreaseCartProductMutation();
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

    console.log(cart)

    function handleDecrease(product) {
        const quantity = user.cart.count;
        if (quantity <= 0) return alert("Can't proceed");
        decreaseCart(product);
    }

    return (
        <div style={{ minHeight: "100vh" }} className="cart-container">
            <Row className="cart-main-row">
                <Col className="cart-form-container-main">
                    <h1 className="pt-2 h3 cart-form-header">Delivery Information</h1>
                    {cart.length == 0 ? (
                        <Alert variant="info">Shopping cart is empty. Add products to your cart</Alert>
                    ) : (
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    )}
                </Col>
                {cart.length > 0 && (
                    <Col md={5} className="cart-sum-container-main">
                        <h1 className="cart-form-header">Order Summary</h1>
                        <div className="product-details-div">
                            {/* <Table responsive="sm" className="cart-table">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     loop through cart products 
                                    {cart.map((item) => (
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>
                                                {!isLoading && <i className="fa fa-times" style={{ marginRight: 10, cursor: "pointer" }} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}></i>}
                                                <img src={item.pictures[0].url} style={{ width: 100, height: 100, objectFit: "cover" }} />
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                                <span className="quantity-indicator">
                                                    <i className="fa fa-minus-circle" onClick={() => handleDecrease({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                    <span>{user.cart[item._id]}</span>
                                                    <i className="fa fa-plus-circle" onClick={() => increaseCart({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                </span>
                                            </td>
                                            <td>${item.price * user.cart[item._id]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table> */}
                            <div >
                                <div className="first-cart-row">
                                {cart.map((item) => (
                                        <div className="item-row">
                                            <td>&nbsp;</td>
                                            <div>
                                                {!isLoading && <i className="fa fa-times" style={{ marginRight: 10, cursor: "pointer" }} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}></i>}
                                                <img src={item.pictures[0].url} alt="item-pic" style={{ width: 100, border: "2px #f1f1f1 solid", borderRadius: "8px", height: 90, objectFit: "cover" }} />
                                            </div>
                                            <div className="name-price item-text">
                                            <div className="item-name-cart">{item.name}</div>
                                            <div className="item-price">$ {item.price}</div>
                                            </div>   
                                            <div className="item-text quantity-per-item">
                                                <span className="quantity-indicator">
                                                    <i className="fa fa-minus-circle" onClick={() => handleDecrease({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                    <span>{user.cart[item._id]}</span>
                                                    <i className="fa fa-plus-circle" onClick={() => increaseCart({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                </span>
                                            </div>
                                            <div className="item-text price-per-item">$ {item.price * user.cart[item._id]}</div>
                                        </div>
                                    ))}
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="total-price">
                                {/* <h3 className="h4 pt-4">Total: ${user.cart.total}</h3> */}
                                <h3 className="total-text">Total:</h3>
                                <p className="total-amount">$ {user.cart.total}</p>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default CartPage;
