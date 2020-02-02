import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailsScreen screen!</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goToTop();
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

export default MealDetailsScreen;
