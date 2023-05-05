import { View } from "react-native";
import MyHorizontalScrollView from "../../components/scrollview";
const Categories = () => {
  const categ = [
    {
      name: "Beef",
      img: "../../assets/images/categories/beef.jpg",
    },
    {
      name: "Chicken",
      img: "../../assets/images/categories/chicken2.jpg",
    },
    {
      name: "Pork",
      img: "../../assets/images/categories/pork.jpg",
    },
    {
      name: "Salad",
      img: "../../assets/images/categories/pork.jpg",
    },
    {
      name: "Desserts",
      img: "../../assets/images/categories/pork.jpg",
    },
  ];
  return (
    <View style={{height:100}}>
      <MyHorizontalScrollView content={categ} direction={true} />
    </View>
  );
};
export default Categories;
