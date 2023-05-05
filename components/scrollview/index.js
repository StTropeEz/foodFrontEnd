import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const MyHorizontalScrollView = ({ direction, content }) => {
  const colors = [
    "#FDE9D9", // light peach
    "#F8D7A8", // light apricot
    "#FFEDB6", // light yellow
    "#FCE2C4", // light coral
    "#D1E0E3", // light blue-gray
    "#E2E7D8", // light green-gray
    "#F3D6E4", // light pink
    "#F5E3B9", // light beige
    "#CBDEE2", // light aqua
    "#E6E6E6", // light gray
  ];
  return (
    <ScrollView horizontal={direction} showsHorizontalScrollIndicator={false}>
      {content.map((item) => (
        <View
          key={item.name}
          style={{
            ...styles.categoryCard,
            backgroundColor: colors[getRandomNumber(0, 9)],
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 12 }}>{item.name}</Text>
          <View>
            <Image
              source={{ uri: item.img }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MyHorizontalScrollView;
const styles = StyleSheet.create({
  categoryCard: {
    marginTop: 20,
    backgroundColor: "pink",
    height: 70,
    borderRadius: 20,
    width: 100,
    marginRight: 10,
    paddingTop: 12,
    paddingLeft: 12,
    overflow: "hidden",
  },
});
