import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const dummyMenu = [
  { id: '1', name: 'Burger', price: 5.99, image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Pizza', price: 8.99, image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Sushi', price: 12.99, image: 'https://via.placeholder.com/100' },
];

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={dummyMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Item', { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemName}>{item.name} - ${item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  itemName: { fontSize: 18, marginLeft: 10 },
  image: { width: 50, height: 50, borderRadius: 10 },
});

export default MenuScreen;
