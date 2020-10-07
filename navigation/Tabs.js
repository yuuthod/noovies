import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeScreen} />
  </Tabs.Navigator>
); 
