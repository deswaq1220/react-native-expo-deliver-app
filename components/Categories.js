import React, { useEffect } from "react";
import { Text } from "react-native";
import { getCategories } from "../api";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15, paddingTop:15}}>
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
