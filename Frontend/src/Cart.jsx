import { useCart } from "./CartContext";
import { useState } from "react";

export default function Cart() {
    const { cartItem, removeCartItem, removeAll } = useCart();

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment submitted:", formData);
        alert("Payment submitted! Check console for data.");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Left side: Cart */}
                <div className="col-md-7">
                    <h1>Cart Items</h1>
                    <button className="btn btn-warning mb-3" onClick={removeAll}>
                        Remove all
                    </button>

                    {cartItem.length === 0 ? (
                        <div>No items found</div>
                    ) : (
                        cartItem.map((item) => (
                            <div className="card mb-3" style={{ maxWidth: "540px" }} key={item.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={item.image}
                                            className="img-fluid rounded-start"
                                            alt={item.title || "Product image"}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">
                                                <small className="text-body-secondary">${item.price}</small>
                                            </p>
                                            <button
                                                className="btn btn-info"
                                                onClick={() => removeCartItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Right side: Payment Form */}
                <div className="col-md-5">
                    <div className="card p-4">
                        <h2>Payment Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Pay Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
