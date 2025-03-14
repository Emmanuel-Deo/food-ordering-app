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
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', margin: 10 }
});

export default PaymentScreen;
