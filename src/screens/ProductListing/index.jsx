import {useContext} from 'react';
import {ActivityIndicator, Text, View, FlatList} from 'react-native';
import {Context} from '../../context';
import {styles} from './styles';
import ProductListingItem from '../../components/ProductListingItem';
import {useNavigation} from '@react-navigation/native';

function createRandomColor() {
  let letter = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function ProductListing() {
  const {loading, products} = useContext(Context);
  const navigation = useNavigation();
  const handleOnPress = id => {
    navigation.navigate('productDetails', {
      productId: id,
    });
  };
  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} color={'black'} size={'large'} />
    );
  }
  return (
    <View>
      <FlatList
        data={products}
        renderItem={itemData => (
          <ProductListingItem
            title={itemData.item.title}
            bgColor={createRandomColor()}
            onPress={() => handleOnPress(itemData.item.id)}
          />
        )}
        keyExtractor={itemData => itemData.id}
        numColumns={2}
      />
      <Text>Product Listing Page</Text>
    </View>
  );
}
