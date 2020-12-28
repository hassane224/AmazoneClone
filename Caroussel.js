import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import img5 from '../assets/image5.jpg'
import img6 from '../assets/image6.jpg'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';

export default function Caroussel() {
  var images2 = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]
  const [activeDot, setactiveDot] = useState(0);
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    //const slide=Math.ceil(nativeEvent.contentOffset.x/320);
    if (slide != activeDot) {
      setactiveDot(slide);
      console.log('slide ' + slide)
     setTimeout(()=>{
      console.log('state ' + activeDot)
     },2000)
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView
        style={{
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={change}
      >
        {
          images2.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{ height:'auto', width: 320, resizeMode: 'stretch', marginRight: 15, }}
            />
          ))
        }
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        position: 'absolute', bottom: 0
      }}>
        {
          images2.map((img, k) => (
            <Text
              style={k === { activeDot } ? styles.activedote : styles.dot}
              key={k}>●</Text>
          ))
        }

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  activedote: {
    margin: 2,
    color: 'white',
    alignItems: "center",
  },
  dot: {
    margin: 2,
    color: 'grey',
    alignItems: "center",
  }
})