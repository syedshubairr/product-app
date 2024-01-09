import {useContext} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Context} from '../../context';

export default function ProductListing() {
  const {loading, products} = useContext(Context);
  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} color={'black'} size={'large'} />
    );
  }
  return (
    <View>
      <FlatList
        data={products}
        renderItem={itemData => <Text>{itemData.item.title}</Text>}
        keyExtractor={itemData => itemData.id}
      />
      <Text>Product Listing Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
