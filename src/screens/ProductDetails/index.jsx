import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import ProductDetailsItem from '../../components/ProductDetailsItem';

export default function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const {productId} = route.params;
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setProductDetails(data);
      }
    }
    getData();
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Add Favorite" />;
      },
    });
  }, []);
  console.log(productDetails);
  if (loading) {
    return <ActivityIndicator color={'black'} size={'large'} />;
  }
  return (
    <View>
      <ProductDetailsItem productDetails={productDetails} />
    </View>
  );
}
