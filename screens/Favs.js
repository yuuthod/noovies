import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [discover, setDiscover] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setDiscover({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{discover.results.length}</Text>
    </View>
  );
};
