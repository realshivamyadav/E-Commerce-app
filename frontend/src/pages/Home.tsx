import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Welcome to ViteStore</h1>
          <p className="col-md-8 fs-4 mx-auto">
            Discover the best products at unbeatable prices. Shop our latest collection of premium items today.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg mt-3">Explore Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;