import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './CatalogPage.css';

const CatalogPage = () => {
  const [apparelProducts, setApparelProducts] = useState([]);
  const [accessoryProducts, setAccessoryProducts] = useState([]);
  const [supplementProducts, setSupplementProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const data = response.data;
        
        console.log(data);
  
        if (Array.isArray(data)) {
          setApparelProducts(data.filter(p => p.category === 'Apparel').slice(0, 3));
          setAccessoryProducts(data.filter(p => p.category === 'Accessories').slice(0, 3));
          setSupplementProducts(data.filter(p => p.category === 'Supplements').slice(0, 3));
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="catalog-page">
      <section>
        <h2>Apparel</h2>
        <div className="product-list">
          {apparelProducts.map(product => <ProductCard key={product._id} product={product} />)}
        </div>
      </section>

      <section>
        <h2>Accessories</h2>
        <div className="product-list">
          {accessoryProducts.map(product => <ProductCard key={product._id} product={product} />)}
        </div>
      </section>

      <section>
        <h2>Supplements</h2>
        <div className="product-list">
          {supplementProducts.map(product => <ProductCard key={product._id} product={product} />)}
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;
