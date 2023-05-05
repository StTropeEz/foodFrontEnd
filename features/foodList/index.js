import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
const food = [
  {
    name: "Spaghetti and Meatballs",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/spaghettimeatballs.jpg",
    price: 8,
  },
  {
    name: "Rice, Chips and Chicken",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/ricechips.jpg",
    price: 6,
  },
  {
    name: "Steak and Chips",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/chicken2.jpg",
    price: 12,
  },
  {
    name: "Rice and Beef",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/ricebeef.jpg",
    price: 6,
  },
  {
    name: "Chicken and Salad",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/chicken2.jpg",
    price: 4.5,
  },
  {
    name: "Chicken Fruit Salad",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/saladw.jpg",
    price: 8,
  },
  {
    name: "Noodles",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/noodle.jpg",
    price: 3,
  },
  {
    name: "Chicken Soup",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/chickensoup.jpg",
    price: 3,
  },
  {
    name: "Pork",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/pork3.jpg",
    price: 3,
  },
  {
    name: "Beef and Salad",
    img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/beef2.jpg",
    price: 3,
  },
];
const FoodList = () => {
  const [displayedFood, setDisplayedFood] = useState(food);
  const renderItem = ({ item }) => {
    return (
      <View key={item.name} style={styles.listItem}>
        <Image
        source={{ uri: item.img }}
          style={styles.image}
        />
        <Text style={{ fontWeight: 600, marginTop: 10 }}>{item.name}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 6,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FF6961", fontWeight: 600 }}>$</Text>
          <Text
            style={{ fontWeight: 600, padding: 2 }}
          >{`${item.price}.00`}</Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={displayedFood}
      keyExtractor={(food) => food.name}
      numColumns={2}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FoodList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  item: {
    flex: 1,
    height: 100,
    margin: 5,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  listItem: {
    flex: 1,
    padding: 8,
    width: "50%",
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
