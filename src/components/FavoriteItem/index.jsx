import {Text, View} from 'react-native';
import {styles} from './style';

export default function FavoriteItem({title, reason}) {
  return (
    <View style={styles.favoriteItemContainer}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{reason}</Text>
    </View>
  );
}
