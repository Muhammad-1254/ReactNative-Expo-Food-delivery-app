import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurentScreen from './screens/RestaurentScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairing';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurent" component={RestaurentScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPrepairing" options={{presentation:'fullScreenModal'}} component={OrderPrepairing} />
        <Stack.Screen name="DeliveryScreen" options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
