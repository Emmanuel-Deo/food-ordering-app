import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MenuStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const PaymentStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Payment" component={PaymentScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Menu') {
              iconName = 'restaurant';
            } else if (route.name === 'Cart') {
              iconName = 'cart';
            } else if (route.name === 'Payment') {
              iconName = 'cash';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Menu" component={MenuStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Payment" component={PaymentStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
