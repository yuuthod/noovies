import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
  useEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
      // 조건에 따라 네비게이션을 숨길 수 있다.
      headerShown: name !== "TV",
      // 조건에 따라 스타일 변경도 가능
      headerStyle: {
        backgroundColor: name === "TV" ? "blue" : "white",
      },
    });
  }, [route]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
