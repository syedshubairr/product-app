import {Pressable, Text, View, StyleSheet} from 'react-native';
import {styles} from './styles';

export default function ProductListingItem({title, onPress, bgColor}) {
  return (
    <View style={styles.productItemOuterContainer}>
      <Pressable
        onPress={onPress}
        style={{...styles.pressableView, backgroundColor: bgColor}}>
        <View style={styles.productItemInnerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
