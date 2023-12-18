import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./ProductCard.module.css"

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`product/details/${product.id}`}  className={styles.productCard}>
              <div className={styles.pic}><img src={product.image} alt="" /></div>
              <div className={styles.title}>{product.title}</div>
              <div className="category">{product.category}</div>
              <div className="price">{product.price}</div>
              <div className={styles.desc}>{product.description}</div>
            </Link>
          </li>
        ))}
      </ul>
      {console.log(products)}
    </div>
  );
}

export default ProductListPage;
