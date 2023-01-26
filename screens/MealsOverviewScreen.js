import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const paramId = route.params.categoryId;

  const displayedMeal = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(paramId) >= 0;
  });

  useLayoutEffect(() => {
    const categotyTitle = CATEGORIES.find(category => category.id === paramId).title;
    navigation.setOptions({ title: categotyTitle });
  }, [paramId, navigation]);

  return <MealsList items={displayedMeal} />
}

export default MealsOverviewScreen;