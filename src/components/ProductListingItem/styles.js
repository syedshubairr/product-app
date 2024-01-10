import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  productItemOuterContainer: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 8,
  },
  pressableView: {
    flex: 1,
    borderRadius: 8,
  },
  productItemInnerContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
});
