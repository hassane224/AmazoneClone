import React, { Component } from 'react';
import {
    View,
    Image,
} from 'react-native';

 export default function Banner(props) {
    return (
        <View 
        style={{
           height:50
        }}>
           <Image
             source={props.image}
             style={{ height:50, resizeMode:'stretch'}}
          />
          </View>
    );
  
  }