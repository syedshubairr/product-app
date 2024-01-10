import {createContext, useEffect, useState} from 'react';

export const Context = createContext(null);
const ProductContext = ({children}) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const addToFavorites = (productId, reason) => {
    const index = favorites.findIndex(f => f.id === productId);
    if (index == -1) {
      setFavorites([...favorites, products[index].title]);
    }
    console.log(favorites);
  };
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
    <Context.Provider value={{products, loading, addToFavorites, favorites}}>
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
