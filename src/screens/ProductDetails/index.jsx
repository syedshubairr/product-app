import {useNavigation, useRoute} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import ProductDetailsItem from '../../components/ProductDetailsItem';
import {styles} from './styles';
import {Context} from '../../context';

export default function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const {productId} = route.params;
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [reason, setReason] = useState('');
  const [productDetails, setProductDetails] = useState([]);
  const {addToFavorites, favorites} = useContext(Context);
  const isFavorite =
    favorites && favorites.length > 0
      ? favorites.filter(item => item.id == productId)
      : false;
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
        return (
          <Button
            onPress={() => setModalVisible(true)}
            title={
              isFavorite && isFavorite.length > 0
                ? 'Update Favorite'
                : 'Add Favorite'
            }
          />
        );
      },
    });
  }, [isFavorite]);
  const handleOnChange = enteredText => {
    setReason(enteredText);
  };
  if (loading) {
    return <ActivityIndicator color={'black'} size={'large'} />;
  }
  return (
    <View>
      <ProductDetailsItem productDetails={productDetails} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Why do you like this product?"
              onChangeText={handleOnChange}
              value={reason}
              style={styles.reasonTextInput}
            />
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  addToFavorites(productId, reason);
                  setReason('');
                }}>
                <Text style={styles.textStyle}>
                  {isFavorite && isFavorite.length > 0 ? 'Update' : 'Add'}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setReason('');
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
