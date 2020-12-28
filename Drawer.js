import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,StatusBar
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("window")

export default function Drawer({DrawerState, setState}) {
      return (
    <View  style={ styles.visible }>
              <StatusBar backgroundColor="#66ccce" />

       <View style={{}}>
           <TouchableOpacity 
             onPress={() => {
              setState(!DrawerState);
              }}>
               <Text
               style={{
                   color: "white", 
                    position: "relative",
                    marginLeft: width-40,
                    marginTop:20
               }}
               >X</Text>
             </TouchableOpacity>
             </View>
       <View style={{}}>
      <ScrollView style={{
          width: .55*width,
          marginLeft: 30,
          backgroundColor: "white",
          alignContent:'space-around',
          }}
          contentContainerStyle={{margin:25}}>
         <View>
         <TouchableOpacity onPress={() => {
                         alert('Accueil');
                          }} >
              <Text>Accueil</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.elments}>
         <TouchableOpacity onPress={() => {
                         alert('Vos commandes');
                          }} >
              <Text>Vos commandes</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.elments}>
         <TouchableOpacity onPress={() => {
                         alert(" Votre liste d'envies");
                          }} >
              <Text>Votre liste d'envies</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.elments}>
         <TouchableOpacity onPress={() => {
                         alert('Votre compte');
                          }} >
              <Text>Votre compte</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.elments}>
         <TouchableOpacity onPress={() => {
                         alert(" Votre liste d'envies");
                          }} >
              <Text>Votre liste d'envies</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.elments}>
         <TouchableOpacity onPress={() => {
                         alert('Votre compte');
                          }} >
              <Text>Votre compte</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
   visible: {
    flex: 1,
    display:'flex', 
    flexDirection:'column',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    width: width, 
    height: height,
    backgroundColor: "rgba(0,0,0,.4)", 
    position: 'absolute', 
    zIndex: 30,
   
  },
  nonvisible: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center', 
    justifyContent: 'center',
    display:'none'
  },
     elments:{
       marginTop:15
    }

})