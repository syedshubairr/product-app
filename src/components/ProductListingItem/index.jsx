import {Pressable, Text, View, StyleSheet} from 'react-native';
import {styles} from './styles';

export default function ProductListingItem({title, onPress, bgColor}) {
  return (
    <View style={styles.productItemOuterContainer}>
      <Pressable
        android_ripple={{color: "#ced474"}}
        onPress={onPress}
        style={{...styles.pressableView, backgroundColor: bgColor}}>
        <View style={styles.productItemInnerContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
