import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/cart" element={<div>Cart</div>} />
        <Route path="/wishlist" element={<div>Wishlist</div>} />
      </Routes>
    </Router>
  );
}

export default App;
