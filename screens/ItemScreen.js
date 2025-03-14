import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Install via `expo install @expo/vector-icons`

const ItemScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={30} color="black"/>
      </TouchableOpacity>

      <Image source={{ uri: item.image }} style={styles.image}/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Sh {item.price}</Text>

      <Button title="Add to Cart" onPress={() => navigation.navigate("Cart", { item })}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 200, height: 200, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold" },
  price: { fontSize: 20, color: "green", marginVertical: 10 },
  closeButton: {
    position: "absolute",
    top: 50, // Adjust for iOS notch
    right: 20,
  },
});

export default ItemScreen;