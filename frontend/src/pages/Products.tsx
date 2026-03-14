import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore, type Product } from './StoreContext';

const Products = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real mock data from FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const formattedData = data.map((item: any) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
        }));
        setProducts(formattedData);
        setLoading(false);
      })
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h4 className="mt-3 text-muted">Loading products...</h4>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top p-4" alt={product.name} style={{ height: '250px', objectFit: 'contain' }} />
              <div className="card-body text-center d-flex flex-column">
                <h6 className="card-title text-truncate" title={product.name}>{product.name}</h6>
                <p className="card-text text-primary fw-bold">${product.price}</p>
                <div className="mt-auto d-flex justify-content-center gap-2">
                  <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
                    Details
                  </Link>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                  <button 
                    className={`btn ${isInWishlist(product.id) ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => toggleWishlist(product)}
                  >
                    ❤
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
