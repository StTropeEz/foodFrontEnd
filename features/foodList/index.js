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
    name: "Spaghetti Bolognese",
    img: "",
    price: 8,
  },
  {
    name: "Chips and Chicken",
    img: "",
    price: 6,
  },
  {
    name: "Steak and Chips",
    img: "",
    price: 12,
  },
  {
    name: "Pork and Rice",
    img: "",
    price: 6,
  },
  {
    name: "Chicken and Salad",
    img: "",
    price: 4.5,
  },
  {
    name: "Chicken Caesar Salad",
    img: "",
    price: 8,
  },
];
const FoodList = () => {
  const [displayedFood, setDisplayedFood] = useState(food);
  const renderItem = ({ item }) => {
    return (
      <View key={item.name} style={styles.listItem}>
        <Image
          source={require("../../assets/images/categories/pork.jpg")}
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
