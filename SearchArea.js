import React, { useState} from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";

 export default function SearchArea(){
    const [value, onChangeText] = React.useState("");
    return(
        <View style={{backgroundColor:"#97e0d9",height:45,paddingBottom:10}}>
        <View style={styles.search}>
        <MaterialIcons
        style={{
          padding: 5,
        }}
        name="search"
        size={20}
        color="#000"
      />
      <TextInput
        placeholder="What are your looking for?"
        style={styles.seachInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <MaterialIcons
        style={{
          padding: 5,
        }}
        name="photo-camera"
        size={20}
        color="#c3c3c3"
      />
    </View>
    </View>
    )
  }
  const styles = StyleSheet.create({
      search: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 10,
      marginBottom: 5,
      paddingTop:20,
      paddingBottom:20,
      
    },
    seachInput: {
      flex: 1,
      paddingTop: 5,
      paddingRight: 10,
      paddingBottom: 5,
      paddingLeft: 0,
      backgroundColor: "#fff",
      color: "#424242",
    },
  });