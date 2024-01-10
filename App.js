import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import ProductListing from './src/screens/ProductListing';
import ProductDetails from './src/screens/ProductDetails';
import Favorites from './src/screens/Favorites';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductContext from './src/context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomsTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="productListing"
        component={ProductListing}
        options={{
          title: 'Product Listing',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fff',
              },
              contentStyle: {
                backgroundColor: '#220577dd',
              },
            }}>
            <Stack.Screen
              name="BottomsTabs"
              component={BottomsTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="productDetails"
              component={ProductDetails}
              options={{
                title: 'Product Details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
