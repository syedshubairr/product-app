import {createContext, useEffect, useState} from 'react';

export const Context = createContext(null);
const ProductContext = ({children}) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const addToFavorites = (productId, reason) => {
    let cypFavoriteItems = [...favorites];
    const index = cypFavoriteItems.findIndex(f => f.id === productId);
    if (index == -1) {
      let getCurrentProduct = products.find(
        product => product.id === productId,
      );
      cypFavoriteItems.push({
        title: getCurrentProduct.title,
        id: productId,
        reason: reason,
      });
    } else {
      cypFavoriteItems[index] = {
        ...cypFavoriteItems[index],
        reason: reason,
      };
    }
    setFavorites(cypFavoriteItems);
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
