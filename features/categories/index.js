import { View } from "react-native";
import MyHorizontalScrollView from "../../components/scrollview";
const Categories = () => {
  const categ = [
    {
      name: "Beef",
      img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/beef.jpg",
    },
    {
      name: "Chicken",
      img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/chicken.jpg",
    },
    {
      name: "Pork",
      img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/pork.jpg",
    },
    {
      name: "Salad",
      img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/chicken2.jpg",
    },
    {
      name: "Desserts",
      img: "https://cdn.rawgit.com/StTropeEz/foodFrontEnd/main/assets/images/categories/beef2.jpg",
    },
  ];
  return (
    <View style={{height:100}}>
      <MyHorizontalScrollView content={categ} direction={true} />
    </View>
  );
};
export default Categories;
