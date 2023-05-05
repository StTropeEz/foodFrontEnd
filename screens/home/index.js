import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Categories from "../../features/categories";
import FoodList from "../../features/foodList";
export default function HomeScreen() {
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBE7C6", "#fff", "#fff"]}
        style={styles.button}
      >
        <View style={styles.section}>
          <View style={styles.profileSection}>
            <View>
              <Text style={{ fontWeight: "600" }}>Delivery</Text>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Text style={{ paddingTop: 5, marginRight: 10 }}>
                  Blah blah Address
                </Text>
                <Fontisto name="caret-down" size={12} color="black" />
              </View>
            </View>
            <View>
              <Image
                source={require("../../assets/images/incog.jpg")}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
            </View>
          </View>
          <View style={styles.searchArea}>
            <Feather name="search" size={24} color="black" />
            <TextInput
              style={{
                paddingLeft: 5,
                color: "gray",
                fontSize: 16,
                borderLeftColor: "gray",
                borderLeftWidth: 1,
                paddingLeft: 10,
                marginLeft: 10,
              }}
              onChangeText={setText}
              value={text}
              placeholder="What would you like to eat?"
            />
          </View>
          <View style={styles.categoryArea}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Choose Category
              </Text>
              <Text style={{ color: "#FF6961", fontWeight: 600, fontSize: 16 }}>
                See All
              </Text>
            </View>
            <Categories />
          </View>
          <View style={styles.foodListArea}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom:10
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Main Course
              </Text>
              <Text style={{ color: "#FF6961", fontWeight: 600, fontSize: 16 }}>
                See All
              </Text>
            </View>
            <View style={{overflow:'scroll', height:500}}>
            <FoodList />
            </View>
          </View>

          <StatusBar style={statusBarStyle} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "flex-start",
  },
  section: {
    
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginHorizontal: 0,
    marginVertical: 20,
  },
  searchArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  categoryArea: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginHorizontal: 0,
    marginTop: 40,
  },
  foodListArea: {
    width: "100%",
    marginHorizontal: 0,
    marginTop: 40,
  },
  pofileImage: {},
  profileAddress: {},
});
