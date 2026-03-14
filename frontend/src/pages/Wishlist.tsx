import React from 'react';
import { useStore } from './StoreContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Wishlist</h2>
      
      {wishlist.length === 0 ? (
        <div className="alert alert-info">
          Your wishlist is empty. <Link to="/products" className="alert-link">Explore products</Link>
        </div>
      ) : (
        <div className="row">
          {wishlist.map(product => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-primary fw-bold">${product.price}</p>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    <button className="btn btn-outline-danger" onClick={() => toggleWishlist(product)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
