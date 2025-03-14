import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const [cart, setCart] = useState(route.params ? [route.params.item] : []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - ${item.price.toFixed(2)}
          </Text>
        )}
      />
      <Button title="Proceed to Payment" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
   },
  title: { fontSize: 24, fontWeight: 'bold', margin: 10 }
})

export default CartScreen;