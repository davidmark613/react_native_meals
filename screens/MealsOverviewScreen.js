import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const paramId = route.params.categoryId;

  const displayedMeal = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(paramId) >= 0;
  });

  useLayoutEffect(() => {
    const categotyTitle = CATEGORIES.find(category => category.id === paramId).title;
    navigation.setOptions({ title: categotyTitle });
  }, [paramId, navigation]);

  function pressHandler(itemId) {
    navigation.navigate("MealDetails", { mealId: itemId })
  }

  function renderItem({ item }) {
    return (
      <MealItem 
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={pressHandler.bind(this, item.id)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeal}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});