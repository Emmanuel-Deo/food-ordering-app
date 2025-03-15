import React, {useState} from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Install via `expo install @expo/vector-icons`

const ItemScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  console.log("Price:", item?.price, "Quantity:", quantity);


  return (
    <View style={styles.container}>
       {/* Back Button */}
       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>


        {/* Item Image */}
        <Image source={{ uri: item.image }} style={styles.image} />

        {/* Item Name */}
        <Text style={styles.name}>{item.name}</Text>

              {/* Quantity Selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
          <AntDesign name="minus" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <AntDesign name="plus" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

           {/* Estimated Time & Price */}
           <View style={styles.infoContainer}>
        <Text style={styles.timeText}>15-20 min</Text>
        <Text style={styles.price}>Sh {Number(item.price) * quantity}</Text>
      </View>

       {/* Add to Cart Button */}
       <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Cart", { item, quantity })}>
        <Text style={styles.cartButtonText}>Add to Cart</Text>
        <AntDesign name="shoppingcart" size={24} color="white" />
      </TouchableOpacity>

       {/* Short Paragraph Description */}
       <Text style={styles.description}>{item.details}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    backgroundColor: "#fff", 
    padding: 20 
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  image: { 
    width: 250, 
    height: 250, 
    borderRadius: 125, 
    marginTop: 80,
  },
  name: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginVertical: 10 
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFA500",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 15,
  },
  icon: {
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 15,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },
  timeText: {
    fontSize: 18,
    color: "#555",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFA500",
  },
  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  cartButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },

  description: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    paddingHorizontal: 30,
  },
});

export default ItemScreen;