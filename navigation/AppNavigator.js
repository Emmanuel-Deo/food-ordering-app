import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ItemScreen from '../screens/ItemScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SetDeliveryLocation from '../screens/SetDeliveryLocation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MenuStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MenuScreen" component={MenuScreen} />
    <Stack.Screen name="Item" component={ItemScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="SetDeliveryLocation" component={SetDeliveryLocation} /> 
  </Stack.Navigator>
);

const OrderStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PaymentScreen" component={OrdersScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
            } else if (route.name === 'Orders') {
              iconName = 'list';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Menu" component={MenuStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Orders" component={OrderStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
