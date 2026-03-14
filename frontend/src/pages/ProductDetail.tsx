import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from './StoreContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  // Dummy product data for now
  const product = {
    id: Number(id) || 1,
    name: "Premium Product",
    price: 99.99,
    image: "https://via.placeholder.com/500"
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Bootstrap Carousel Implementation */}
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://via.placeholder.com/500" className="d-block w-100" alt="Product 1" />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/500" className="d-block w-100" alt="Product 2" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="lead">${product.price}</p>
          <button className="btn btn-primary me-2" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button 
            className={`btn ${isInWishlist(product.id) ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => toggleWishlist(product)}
          >
            {isInWishlist(product.id) ? '❤️ In Wishlist' : '❤ Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;