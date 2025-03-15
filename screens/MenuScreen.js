import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const dummyMenu = [
  // Main Dishes
  {
    id: "1",
    name: "Nyama Choma with Ugali",
    description: "Grilled beef served with ugali and kachumbari.",
    details: "A Kenyan favorite—succulent grilled meat paired with a hearty serving of ugali and fresh tomato-onion salad.",
    price: "700",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/2a/39/c0/3f/caption.jpg",
  },
  {
    id: "2",
    name: "Pilau with Kachumbari",
    description: "Spiced rice with beef and side salad.",
    details: "Aromatic spiced rice cooked with tender beef chunks, served with fresh kachumbari.",
    price: "600",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvG1RneypMxSIMf1o1MPFRJEsiUCk-pcmEow&s",
  },
  {
    id: "3",
    name: "Samaki wa Kupaka",
    description: "Grilled fish in coconut sauce.",
    details: "Freshly grilled fish coated in a rich, flavorful coconut sauce, served with rice or ugali.",
    price: "850",
    image: "https://weeatatlast.com/wp-content/uploads/2022/03/swahili-samaki-wa-kupaka.jpg",
  },
  {
    id: "4",
    name: "Matoke Stew",
    description: "Plantain banana stew with beef or chicken.",
    details: "Soft-cooked bananas simmered in a tasty stew with your choice of beef or chicken.",
    price: "500",
    image: "https://healthiersteps.com/wp-content/uploads/2018/01/matoke-overlay-2-500x375.jpg",
  },
  {
    id: "5",
    name: "Mukimo with Beef Stew",
    description: "Mashed potatoes, maize, and greens with stew.",
    details: "A nutritious dish of mashed potatoes, maize, and greens, served with a savory beef stew.",
    price: "550",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u-oYeqk_GYB3Vbqsnn1mTDMwhV9ooL2QgA&s",
  },
  {
    id: "6",
    name: "Chicken Biryani",
    description: "Spiced rice with marinated chicken.",
    details: "Richly flavored rice cooked with marinated chicken, blended with exotic spices.",
    price: "750",
    image: "https://t4.ftcdn.net/jpg/09/12/10/25/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg",
  },
  {
    id: "7",
    name: "Chapati with Ndengu",
    description: "Soft chapati with green grams stew.",
    details: "Soft, flaky chapati served with nutritious ndengu (green gram stew).",
    price: "400",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBZZ-7-l0z_7YXpSRkwybNJvQ9V6CGu8FkQ&s",
  },
  {
    id: "8",
    name: "Beef Fry with Rice",
    description: "Pan-fried beef with white rice.",
    details: "Tender beef chunks fried with onions and spices, served with steamed rice.",
    price: "650",
    image: "https://png.pngtree.com/background/20230426/original/pngtree-beef-curry-on-rice-with-rice-picture-image_2487366.jpg",
  },
  {
    id: "9",
    name: "Sukuma Wiki with Ugali",
    description: "Kale stir-fry with ugali.",
    details: "A simple yet delicious combination of sautéed sukuma wiki (kale) served with a hot plate of ugali.",
    price: "250",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg",
  },
  {
    id: "10",
    name: "Fish and Chips",
    description: "Deep-fried fish fillet with fries.",
    details: "Crispy deep-fried fish fillet served with golden fries and tartar sauce.",
    price: "800",
    image: "https://t3.ftcdn.net/jpg/02/06/81/46/360_F_206814646_CmvG1Siwa7kZSHbse5jaFxLhU9IcO3kR.jpg",
  },

  // Snacks
  {
    id: "11",
    name: "Samosa (2 pcs)",
    description: "Crispy triangular beef or veggie pockets.",
    details: "Crispy deep-fried samosas filled with either minced beef or spiced vegetables.",
    price: "150",
    image: "https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0=",
  },
  {
    id: "12",
    name: "Mandazi (4 pcs)",
    description: "Soft, fluffy deep-fried dough.",
    details: "A delicious tea-time snack—lightly sweet, deep-fried dough pastries.",
    price: "100",
    image: "https://happybutchery.co.ke/wp-content/uploads/2021/07/Mandazi.png",
  },
  {
    id: "13",
    name: "Bhajia",
    description: "Spiced potato fritters.",
    details: "Crispy, golden-brown potato slices coated in spiced gram flour batter, served with chutney.",
    price: "300",
    image: "https://t3.ftcdn.net/jpg/03/17/96/00/360_F_317960020_dZQlGEjGYPLcItTZfvfEP3AwTMrA7MZb.jpg",
  },

  // Drinks
  {
    id: "14",
    name: "Masala Chai",
    description: "Spiced Kenyan tea.",
    details: "A warm, aromatic cup of Kenyan tea brewed with milk and rich spices like cardamom and cinnamon.",
    price: "100",
    image: "https://thumbs.dreamstime.com/b/indian-masala-chai-tea-spiced-tea-milk-rustic-wooden-table-63636581.jpg",
  },
  {
    id: "15",
    name: "Dawa",
    description: "Honey, lemon, and ginger drink.",
    details: "A soothing hot drink made with honey, fresh lemon, and ginger, perfect for colds or a refreshing boost.",
    price: "150",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYUCy02AJqoza_HrBkCzmEGPyWd8K4polpQ&s",
  },
  {
    id: "16",
    name: "Fresh Mango Juice",
    description: "Chilled mango juice with no sugar added.",
    details: "A refreshing glass of pure mango juice, freshly blended with no added sugar.",
    price: "250",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7N8d1b5t5pGDgwLiGC7WXpxlhU9Jbq_N7ew&s",
  },
  {
    id: "17",
    name: "Passion Fruit Juice",
    description: "Chilled, fresh passion juice.",
    details: "A refreshing, tangy glass of fresh passion fruit juice, served ice cold.",
    price: "200",
    image: "https://t3.ftcdn.net/jpg/03/29/11/70/360_F_329117040_Wxgekt6QecxnrWgOrLY1HypnJSL7P2Xm.jpg",
  },
  {
    id: "18",
    name: "Cold Soda (500ml)",
    description: "Choice of Coca-Cola, Fanta, Sprite.",
    details: "A chilled bottle of your favorite soft drink to keep you refreshed.",
    price: "100",
    image: "https://media.istockphoto.com/id/509894197/photo/coca-cola-fanta-and-sprite-bottles-on-the-white-background.webp?s=2048x2048&w=is&k=20&c=qks9YqokuTLeTBP-CSFQ7tHTxJ7fVnwBr18ly6XQqOI=",
  },
  {
    id: "19",
    name: "Bottled Water (500ml)",
    description: "Chilled drinking water.",
    details: "Pure, refreshing bottled water to keep you hydrated.",
    price: "70",
    image: "https://img.freepik.com/free-photo/transparent-water-bottle-studio_23-2151049056.jpg",
  },
  {
    id: "20",
    name: "Mala (Fermented Milk)",
    description: "Traditional Kenyan fermented milk.",
    details: "A creamy, probiotic-rich drink enjoyed on its own or with ugali.",
    price: "200",
    image: "https://t4.ftcdn.net/jpg/12/14/92/01/360_F_1214920179_sFZ8v7hAae0T4p78l0Hu8FBVAgcDJBaW.jpg",
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