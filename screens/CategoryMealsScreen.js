import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedItem = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedItem.title
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
