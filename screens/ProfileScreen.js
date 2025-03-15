import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const user = {
    name: "Emmanuel Kipngetich",
    email: "emmanuel.kipngetich.ngeno@gmail.com",
    phone: "+252 746 505 040",
    profilePic: "https://pbs.twimg.com/profile_images/1750976481851813888/Z1XHE-mU_400x400.jpg",
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={{ uri: user.profilePic }} style={styles.profileImage} />

      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>{user.email}</Text>
      <Text style={styles.info}>{user.phone}</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={[styles.buttonText, { color: "#fff" }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: "#ff4b5c",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
