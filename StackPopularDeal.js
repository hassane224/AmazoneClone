import React from 'react';
import Details from './Details';
import PopularDeal from './PopularDeal';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function StackPopularDeal() {
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="PopularDeal">

       <Stack.Screen name="PopularDeal" component={PopularDeal}/>
       <Stack.Screen name="Details" component={Details}/>
     

     </Stack.Navigator>
   
  );
}