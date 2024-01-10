import {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Context} from '../../context';
import {styles} from './styles';
import FavoriteItem from '../../components/FavoriteItem';

export default function Favorites() {
  const {favorites, handleRemoveFavorite} = useContext(Context);
  if (!favorites.length) {
    return (
      <View style={styles.noFavorites}>
        <Text style={styles.noFavoritesText}>No Favorite Items Added!</Text>
      </View>
    );
  }
  return (
    <View style={styles.favoriteContainer}>
      <FlatList
        data={favorites}
        renderItem={itemData => (
          <FavoriteItem
            title={itemData.item.title}
            reason={itemData.item.reason}
            handleRemoveFavorite={handleRemoveFavorite}
            id={itemData.item.id}
          />
        )}
        keyExtractor={itemData => itemData.id}
      />
    </View>
  );
}
