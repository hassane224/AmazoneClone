import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import {
  StyleSheet,
  Dimensions,
  
} from "react-native";

import FoodScreen from "./pages/FoodsScreen";
import Details from "./pages/Details";
import Testpage from "./pages/Testpage";
import  Panier from './pages/Panier'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './pages/HomeScreen';



const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen}
       />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="TestPage" component={Testpage} />
      <Stack.Screen name="Panier" component={Panier} />
   </Stack.Navigator>
  );
}
{/*const StackFoods = createStackNavigator();
function StackFoodScreen() {
  return (
    <StackFoods.Navigator
      screenOptions={{
        headerShown: false,
      }}
     initialRouteName={FoodScreen}>
      <StackFoods.Screen name="FoodScreen" component={FoodScreen} />
      <StackFoods.Screen name="Details" component={Details} />
    </StackFoods.Navigator>
  );
}
*/}





export default function App({ navigation }) {
  return (
    <NavigationContainer>
         <HomeStack />
         
    </NavigationContainer>
  );
}

