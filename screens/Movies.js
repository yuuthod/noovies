import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";


export default ({navigation}) => {
  const getData = async() => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    console.log(nowPlaying, error);
  };
  useEffect(() => {
    getData();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movies</Text>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="movie"
      ></Button>
    </View>
  );
}
