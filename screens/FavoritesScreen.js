import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((mealItem) => ids.includes(mealItem.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.contaiter}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  contaiter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
