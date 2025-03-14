import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Button title="Confirm Payment" onPress={() => alert("Payment Successful!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 }
});

export default PaymentScreen;
