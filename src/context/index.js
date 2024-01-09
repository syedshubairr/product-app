import {createContext, useEffect, useState} from 'react';

export const Context = createContext(null);
const ProductContext = ({children}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getProducts() {
      const data = await fetch('https://dummyjson.com/products');
      const productsData = await data.json();
      if (productsData) {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setProducts(productsData.products);
      }
    }
    getProducts();
  }, []);
  return (
    <Context.Provider value={{products, loading}}>{children}</Context.Provider>
  );
};

export default ProductContext;
