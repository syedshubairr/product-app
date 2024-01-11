import {Pressable, Text, View} from 'react-native';
import {styles} from './style';

export default function FavoriteItem({
  title,
  reason,
  handleRemoveFavorite,
  id,
}) {
  return (
    <View style={styles.favoriteItemContainer}>
      <Pressable
        onPress={() => handleRemoveFavorite(id)}
        android_ripple={{color: '#ced474'}}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{reason}</Text>
      </Pressable>
    </View>
  );
}
