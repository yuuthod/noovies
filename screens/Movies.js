import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";


export default ({navigation}) => {
  const [nowPlaying, setNowPlaying] = useState({
    movies: [],
    error: null
  })
  const getData = async() => {
    try {
      const {
        data: { results },
      } = await movieApi.nowPlaying();
      setNowPlaying({
        movies: results,
        error: null,
      });
    } catch(error) {
      setNowPlaying({
        error
      })
    }
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
