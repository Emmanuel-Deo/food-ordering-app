import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Hardcoded orders with multiple food items
const orders = [
  {
    id: "JDORD20250314123045",
    user: "John Doe",
    placedAt: "March 14, 2025, 12:30:45 PM",
    items: [
      { name: "Pepperoni Pizza", quantity: 1 },
      { name: "Garlic Bread", quantity: 2 },
      { name: "Coke", quantity: 1 }
    ],
    status: "Received",
    destination: "123 Main St, New York, NY",
  },
  {
    id: "AMORD20250314123110",
    user: "Alice Morgan",
    placedAt: "March 14, 2025, 12:31:10 PM",
    items: [
      { name: "Burger & Fries", quantity: 1 },
      { name: "Vanilla Shake", quantity: 1 }
    ],
    status: "Preparing",
    destination: "45 Sunset Blvd, Los Angeles, CA",
  },
  {
    id: "BKORD20250314123322",
    user: "Brian King",
    placedAt: "March 14, 2025, 12:33:22 PM",
    items: [
      { name: "Chicken Biryani", quantity: 1 },
      { name: "Tandoori Roti", quantity: 3 }
    ],
    status: "Out for Delivery",
    destination: "88 Ocean Drive, Miami, FL",
  },
];


const getStatusColor = (status) => {
  switch (status) {
    case "Received":
      return "#FFA500"; // Orange
    case "Preparing":
      return "#1E90FF"; // Blue
    case "Out for Delivery":
      return "#32CD32"; // Green
    case "Delivered":
      return "#808080"; // Gray
    default:
      return "#000";
  }
};

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
            <View style={styles.orderDetails}>
              <Text style={styles.orderId}>Order ID: {item.id}</Text>
              <Text style={styles.orderStatus}>Status: {item.status}</Text>
              <Text style={styles.orderDate}>Placed At: {item.placedAt}</Text>
              <Text style={styles.destination}>Delivering To: {item.destination}</Text>
              <Text style={styles.itemsTitle}>Items:</Text>
              {item.items.map((food, index) => (
                <Text key={index} style={styles.foodItem}>
                  - {food.name} (x{food.quantity})
                </Text>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,   paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  orderCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
    marginTop: 5,
  },
  orderDetails: { flex: 1 },
  orderId: { fontSize: 16, fontWeight: "bold", color: "#333" },
  orderStatus: { fontSize: 14, color: "#1E90FF", fontWeight: "bold" },
  orderDate: { fontSize: 12, color: "#666" },
  destination: { fontSize: 12, color: "#444", fontStyle: "italic" },
  itemsTitle: { marginTop: 5, fontWeight: "bold", color: "#222" },
  foodItem: { fontSize: 14, color: "#555" },
});

export default OrdersScreen;
