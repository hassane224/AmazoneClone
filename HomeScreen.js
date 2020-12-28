import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import FoodScreen from "./FoodsScreen";
import Drawer from "./Drawer";
import Header from './Header'
import SearchArea from './SearchArea'
const { width, height } = Dimensions.get("screen");
 
export default function Home({ navigation }) {
    const [etat, setetat] = useState(false);
     const Listnav = [
      "Wholes foods",
      "Fresh",
      "Alexa list",
      "Prime",
      "Video",
      "Wholes foods",
      "Fresh",
      "Alexa list",
      "Prime",
      "Video",
    ];
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#66ccce" />
        <View>
          <Header />
            {etat ? <Drawer DrawerState={etat} setState={setetat} /> : null}

          <SearchArea/>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#97e0d9",
                  }}
                >
                  {Listnav.map((List, index) => (
                    <View
                      key={index}
                      style={{
                        marginLeft: 7,
                        marginRight: 7,
                        marginTop: 12,
                        marginBottom: 12,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          alert(List.toString());
                        }}
                      >
                        <Text>{List}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>

     <FoodScreen navigation={navigation}/>
      </ScrollView>
        </View>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    
  });
  