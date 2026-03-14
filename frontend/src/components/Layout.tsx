import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useStore } from '../pages/StoreContext';

const Layout = () => {
  const { cart, wishlist, toast } = useStore();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">ViteStore</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/wishlist">
              Wishlist <span className="badge bg-danger">{wishlist.length}</span>
            </Link>
            <Link className="nav-link" to="/cart">
              Cart <span className="badge bg-primary">{cartCount}</span>
            </Link>
            <Link className="nav-link" to="/profile">Profile</Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {toast && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className={`toast show align-items-center text-white bg-${toast.type} border-0 shadow`} role="alert">
            <div className="d-flex p-1">
              <div className="toast-body fw-bold">{toast.message}</div>
            </div>
          </div>
        </div>
      )}

      <footer className="container mt-5 py-3 border-top text-center text-muted">
        <p>&copy; 2024 E-Commerce App</p>
      </footer>
    </div>
  );
};

export default Layout;