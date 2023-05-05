import { StyleSheet, Text, View } from "react-native";
export default function MenuItem() {
  return (
    <View style={styles.container}>
      <Text>MenuItem</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  