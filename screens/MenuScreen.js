import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const dummyMenu = [
  {
    id: "1",
    name: "Hot Pizza",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs7RrslNWaoTmXVw_0ghb08meCz9tthocKg&s",
  },
  {
    id: "2",
    name: "Burger",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_4wmXirYrbq9GbjLf_zhQgZFdhcD7yD8sg&s",
  },
  {
    id: "3",
    name: "Lasagna",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kya-SqJ_wdoYsXiz6EcNdD0n8CH-aNRBMQ&s",
  },
  {
    id: "4",
    name: "Hot Pizza",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs7RrslNWaoTmXVw_0ghb08meCz9tthocKg&s",
  },
  {
    id: "5",
    name: "Burger",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_4wmXirYrbq9GbjLf_zhQgZFdhcD7yD8sg&s",
  },
  {
    id: "6",
    name: "Lasagna",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kya-SqJ_wdoYsXiz6EcNdD0n8CH-aNRBMQ&s",
  },
  {
    id: "7",
    name: "Hot Pizza",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs7RrslNWaoTmXVw_0ghb08meCz9tthocKg&s",
  },
  {
    id: "8",
    name: "Burger",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_4wmXirYrbq9GbjLf_zhQgZFdhcD7yD8sg&s",
  },
  {
    id: "9",
    name: "Lasagna",
    description: "Mushrooms and chili",
    price: "100",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kya-SqJ_wdoYsXiz6EcNdD0n8CH-aNRBMQ&s",
  },

];


const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Food</Text>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1750976481851813888/Z1XHE-mU_400x400.jpg",
          }}
          style={styles.profilePic}
        />
      </View>


      {/* Title */}
      <Text style={styles.heroTitle}>Let's eat {'\n'}Healthy Food <Text style={styles.emoji}>🍔</Text>
      </Text>




        {/* Search Bar */}
        <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput placeholder="Search Food..." style={styles.searchInput} />
        <Ionicons name="options-outline" size={20} color="gray" />
       </View>
      
 

        {/* Food List */}
        <FlatList
        data={dummyMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.foodCard}
            onPress={() => navigation.navigate("Item", { item })}
          >
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <View>
              <Text style={styles.foodTitle}>{item.name}</Text>
              <Text style={styles.foodDescription}>{item.description}</Text>
              <Text style={styles.foodPrice}>
                {typeof item.price === "number" ? `Sh ${item.price.toFixed(2)}` : item.price}
              </Text>
            </View> 
          </TouchableOpacity>
        )}
      />
            
    </View>
  );
};

const styles = StyleSheet.create({

  container: { 
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff' 
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profilePic: {
    width: 42,
    height: 42,
    borderRadius: 22,
  },
  heroTitle: {
    paddingTop: "16",
    fontSize: 32,
    color: "#777",
    fontWeight: "bold",
  },
 
  emoji: {
    fontSize: 28,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 7,
    borderRadius: 40,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
 
  foodCard: {
    marginLeft: 7,
    marginRight: 7,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  foodImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodDescription: {
    color: "gray",
  },
  foodPrice: {
    color: "green",
    fontWeight: "bold",
  },
 

});

export default MenuScreen;