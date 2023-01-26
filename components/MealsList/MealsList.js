import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderItem({ item }) {
    return (
      <MealItem 
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});