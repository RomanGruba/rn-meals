import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMeals screen!</Text>
      <Button
        title="Go to meal details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetails" });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
