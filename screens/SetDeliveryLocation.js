import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const SetDeliveryLocation = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: -1.286389,
    longitude: 36.817223,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [address, setAddress] = useState("");

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter delivery address"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={handleRegionChange}
      >
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          draggable
          onDragEnd={(e) => setRegion(e.nativeEvent.coordinate)}
        />
      </MapView>

      {/* Address Details */}
      <View style={styles.addressBox}>
        <Text style={styles.label}>Delivery Address</Text>
        <TextInput style={styles.input} value={address} editable={false} />
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={() => navigation.goBack()} // Navigate back with selected address
        >
          <Text style={styles.saveButtonText}>Save This Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetDeliveryLocation;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0, // Fix for Android status bar overlap
  },
  searchContainer: { 
    position: "absolute",
    top: 50, // Adjust for visibility
    left: "5%",
    right: "5%",
    backgroundColor: "#fff",
    padding: 0,
    borderRadius: 10,
    zIndex: 1, // Ensure it stays above the map
    elevation: 5, // Shadow effect for Android
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchInput: { 
    height: 40, 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    backgroundColor: "#f5f5f5" 
  },
  map: { flex: 1 },
  addressBox: { 
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    padding: 20, 
    backgroundColor: "#fff", 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20 
  },
  label: { fontSize: 16, fontWeight: "bold" },
  input: { marginTop: 5, padding: 10, backgroundColor: "#f5f5f5", borderRadius: 10 },
  saveButton: { marginTop: 15, backgroundColor: "#FFA500", padding: 15, borderRadius: 10, alignItems: "center" },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});
