import React from "react";
import { View, Text, Button } from "react-native";

export default ({navigation}) => (
  <View>
    <Text>Movies</Text>
    <Button onPress={() => navigation.navigate("Detail")} title="movie"></Button>
  </View>
);
