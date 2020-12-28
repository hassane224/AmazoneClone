import React, { useState} from "react";
import {
    View,
    StyleSheet,
    Dimensions,
   } from 'react-native';
 import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
  const { width, height } = Dimensions.get("screen");
 
 export default function Header() {
  const [etat, setetat] = useState(false);
  return (
    <View style={styles.header}>
      <View removeClippedSubviews style={{ flex: 1, flexDirection: "row" }}>
        <MaterialIcons
          name="menu"
          size={24}
          color="black"
          onPress={() => {
            setetat(true);
          }}
          style={{ marginLeft: 5 }}
        />
        <MaterialCommunityIcons name="amazon" size={24} color="black" />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 15,
          }}
        >
          <MaterialCommunityIcons
            name="amazon-alexa"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
          <MaterialIcons name="shopping-cart" size={24} color="black" />
        </View>
      </View>
    
      
    </View>
  );
}
const styles = StyleSheet.create({
    header: {
    paddingTop: 30,
    backgroundColor: "#97e0d9",
    width: width,
    height: 85,
  },
  
});
