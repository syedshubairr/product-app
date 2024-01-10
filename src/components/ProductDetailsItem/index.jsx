import {Text, View} from 'react-native';
import {styles} from './styles';

export default function ProductDetailsItem({productDetails}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{productDetails.title}</Text>
      <Text style={styles.textStyle}>{productDetails.description}</Text>
      <Text style={styles.textStyle}>{productDetails.price}</Text>
      <Text style={styles.textStyle}>{productDetails.rating}</Text>
      <Text style={styles.textStyle}>{productDetails.category}</Text>
    </View>
  );
}
