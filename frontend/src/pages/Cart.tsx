import React from 'react';
import { useStore } from './StoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();
  
  // Calculate total order price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <Link to="/products" className="alert-link">Go shopping</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group mb-3 shadow-sm">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} className="me-3 rounded" />
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">ID: {item.id}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-group input-group-sm me-4" style={{ width: '100px' }}>
                      <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                      <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="text-muted me-4 fw-bold" style={{ width: '80px', textAlign: 'right' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5 className="mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3 fs-5">
                <span>Total:</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="btn btn-success w-100 py-2">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
