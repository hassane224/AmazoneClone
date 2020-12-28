import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from "react-native";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default function Details({ navigation, route }) {
  const { produit, description, imagelink, price } = route.params;
  const [value, onChangeText] = React.useState("");
  const [searchVisible, setsearchVisible] = useState(false);
  const [etat, setetat] = useState(false);
  const [item, setItem] = useState();
  const [nom, onChangenom] = React.useState();

  var Panier=[]

  var ProductData = {
    id: produit,
    nomProduit: produit,
    descriptionProduit: description,
    priceProduit: price,
    imagelinkProduit: imagelink,
  };

  
  //var NewData=panier.push(JSON.stringify(ProductData))
   
  // const storeData = async () => {
  //   try { 
  //     Panier = await AsyncStorage.getItem('test')
  //     Panier= Panier.push(ProductData)

  //     const jsonValue = JSON.stringify(Panier)
  //     await AsyncStorage.setItem('test', jsonValue)
  //     console.log('succes')      
  //   } catch(e) {
  //      console.log('erreur '+ e)
  //   }
  // }

   async function storeData(data)
  {
    var OldData = [];
        console.log('storedata '+JSON.stringify(data)); 
        console.log('initiet oldata '+OldData); 
      
      try { 
        console.log('val aync '+await AsyncStorage.getItem('mytest')); 
        OldData=JSON.parse(await AsyncStorage.getItem('mytest'));
        console.log('odldata first '+JSON.stringify(OldData));
        if (JSON.stringify(OldData).includes('null')){
          console.log('old est vide'); 
          OldData=[data];
              
       } 
       else{
        console.log('old non vide'); 
        console.log('old valeur '+JSON.stringify(OldData)); 
        OldData.push(data);
        console.log('odldata pushed '+OldData); 
         }
         
      console.log('storedata A '+JSON.stringify(OldData));  
      AsyncStorage.setItem('mytest', JSON.stringify(OldData));
      } catch(e) {
        console.log('erreur '+e)
      }
     
  }



  const getAll = async () => {
      try {
         const Data = await AsyncStorage.getItem('mytest')
         //return Value
       //  console.log('mon panier ' + JSON.parse(Value).id)
         console.log('ma liste panier ' +JSON.parse(Data))
         var JsonData=JSON.parse(Data)
         var elm2=JSON.parse(Data)[0]
         JsonData.map((prod)=>{
          const{id,nomProduit,descriptionProduit,priceProduit,imagelinkProduit}=prod
          console.log('id:' +id+'\n nom :'+nomProduit+'\n Prix :'+priceProduit+'\n description :'+descriptionProduit)
         })
        
          } catch(e) {
             console.log("erreur de recup "+e)
      }
    
    }
 
     const remove = async () => {
      try {
        await AsyncStorage.removeItem('mytest')
      } catch(e) {
          console.log('error to remove '+e)
      }
    
      console.log('Done.')
    }
    




  // const storeData = async () => {
  //   try {
  //     const jsonValue = JSON.stringify(DataToStore);
  //     await AsyncStorage.setItem("cart", panier);
  //   } catch (e) {
  //     console.log("Erreur d'enregistrement" + e);
  //   }
  // };
  // const storeData = async () => {
  //   try {
  //     const jsonValue = JSON.stringify(DataToStore);
  //     await AsyncStorage.setItem("id400", jsonValue);
  //   } catch (e) {
  //     console.log("Erreur d'enregistrement" + e);
  //   }
  // };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
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
            <MaterialIcons
              name="search"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => {
                setsearchVisible(true);
              }}
            />
            <MaterialIcons
              name="shopping-cart"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Panier")}
            />
          </View>
        </View>
      </View>

      <View style={searchVisible == true ? styles.show : styles.hide}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#97e0d9",
            maxHeight: 50,
          }}
        >
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
              name="clear"
              size={20}
              color="#c3c3c3"
              onPress={() => {
                setsearchVisible(false);
              }}
            />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={imagelink}
            style={{
              height: 180,
              width: 200,
              resizeMode: "stretch",
            }}
          />
          <Text>{produit}</Text>
          <Text>{description}</Text>
          <Text>Prix :$ {price}</Text>
        </View>

        <View>
          <View style={{ marginBottom: 50 }}>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  storeData(ProductData);
                }}
              >
                <Text>Ajouter au panier</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  getAll();
              }}
               >
                <Text>Acheter cet article</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  remove();
              }}
               >
                <Text>remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text>{item}</Text>
          <Text>{nom}</Text>
        </View>
      </ScrollView>
    </View>
  );
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
  header: {
    paddingTop: 30,
    backgroundColor: "#97e0d9",
    width: width,
    height: 85,
  },
  show: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#97e0d9",
    maxHeight: 50,
  },
  hide: {
    display: "none",
  },

  btn: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f3d078",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 9,
    paddingBottom: 9,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    margin: 15,
  },
});
