import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Install via `expo install @expo/vector-icons`



const CartScreen = ({ route, navigation }) => {
  const [cart, setCart] = useState(route.params ? [{ ...route.params.item }] : []);
  const [promoCode, setPromoCode] = useState("");
  const deliveryCharge = 2;
  const discount = 2;

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryCharge - discount;

  return (
    <View style={styles.container}>
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryLabel}>Deliver to</Text>
        <TouchableOpacity style={styles.deliveryBox}>
          <Text style={styles.deliveryText}>Jacaranda House 207, Kilimani Road, Nairobi</Text>
          <AntDesign name="down" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                  <AntDesign name="minus" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                  <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.paymentContainer}>
        <TextInput style={styles.promoInput} placeholder="Promo Code" value={promoCode} onChangeText={setPromoCode} />
        <View style={styles.paymentRow}><Text>Subtotal</Text><Text>${subtotal.toFixed(2)}</Text></View>
        <View style={styles.paymentRow}><Text>Delivery Charge</Text><Text>${deliveryCharge.toFixed(2)}</Text></View>
        <View style={styles.paymentRow}><Text>Discount</Text><Text>-${discount.toFixed(2)}</Text></View>
        <View style={styles.paymentRowTotal}><Text style={styles.totalText}>Total</Text><Text style={styles.totalText}>${total.toFixed(2)}</Text></View>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate("Payment")}>
        <Text style={styles.orderButtonText}>Place my order</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: "#fff",
     padding: 20 ,   
     paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,},

  deliveryContainer: { 
    marginBottom: 20 
  },

  deliveryLabel: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginBottom: 5 
  },

  deliveryBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFE4B5",
    padding: 12,
    borderRadius: 10,
  
  },
  deliveryText: { fontSize: 14, color: "#000" },
  
  // Cart Item Card
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "#888" },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  quantityText: { fontSize: 16, marginHorizontal: 10 },
  itemTotal: { fontSize: 16, fontWeight: "bold", color: "#000" },

  // Payment Section
  paymentContainer: { backgroundColor: "#F9F9F9", padding: 15, borderRadius: 10, marginTop: 10 },
  promoInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderColor: "#DDD",
    borderWidth: 1,
    marginBottom: 10,
  },
  paymentRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
  paymentRowTotal: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  totalText: { fontSize: 18, fontWeight: "bold" },

  // Place Order Button
  orderButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  orderButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});

export default CartScreen;