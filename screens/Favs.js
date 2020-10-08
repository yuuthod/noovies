import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [discover, setDiscover] = useState({
    discover: [],
    error: null,
  });
  const getData = async () => {
    const [discover, error] = await movieApi.discover();
    setDiscover({
      discover,
      error
    });
    console.log(discover.length);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{discover.length}</Text>
    </View>
  );
};
