import React, { useState,useEffect } from "react";

import {
  View,
  Text,
  Button,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import image from "../assets/image3.jpg";
import { ScrollView } from "react-native-gesture-handler";




export default function Panier() {
  const [ListPanier, setListPanier] = useState();
  const [AllItems, setAllItems] = useState();
  const [Qte, setQte] = useState(0);
 

  useEffect(() => {
   getAll()
   test()
    },[]);

  
  function QteAdd() {
    setQte(Qte + 1);
  }
  function QteSus() {
    setQte(Qte - 1);
    console.log("qte :" + Qte);
  }
//   var mylist=[]
//   var JsonData=()=>{
//     setTimeout(()=>{
//       AllItems.map((elm)=>{
//         const{id,nomProduit,descriptionProduit,priceProduit,imagelinkProduit}=elm
//             ///console.log('id:' +id+'\n nom :'+nomProduit+'\n Prix :'+priceProduit+'\n description :'+descriptionProduit)
//              return(
//              <Text>non : {nomProduit}</Text>
//              )
//            }  
//       )   
//     },2000)

// }
 
  const getAll = async () => {
    try {
       const Data = await AsyncStorage.getItem('mytest')
       if (Data !== null) {
        var  JsonData= JSON.parse(Data)
          setListPanier(JsonData)
        // JsonData.map((prod)=>{
        // const{id,nomProduit,descriptionProduit,priceProduit,imagelinkProduit}=prod
        // console.log('id:' +id+'\n nom :'+nomProduit+'\n Prix :'+priceProduit+'\n description :'+descriptionProduit)
       
        // })
       }
      
      
        console.log('all'+JsonData[0].nomProduit)
      
        console.log('the state'+ListPanier)
        } catch(e) {
          console.log("erreur de recup "+e)
    }
    
    
  }
 
  
   function test(){
        var list=['sow','barry','diallo','bah','balde']
        setAllItems(list)
        // AsyncStorage.getItem('mytest', (err, Data) => {
        //   console.log('resulta '+JSON.parse(Data));
        //   if (Data !== null) {
        //     var  JsonData= JSON.parse(Data)
        //      ///setAllItems(JsonData)
        //      return JsonData
        //     }
          //  })
       
   }




// function lapsList() {

//  AllItems.map((item) => {
//     const{id,nomProduit,descriptionProduit,priceProduit,imagelinkProduit}=item
//     return (
//       <View>
//            <Text>{nomProduit}</Text>
//          <Text>{descriptionProduit}</Text>
//       <Image
//         source={imagelinkProduit}
//         style={{ height: 100, width: 100, resizeMode: 'stretch' }}
//         />
//       </View>
//     )
//   })

// }
   
 
  return (
     <View style={{ flex: 1, backgroundColor: "white",paddingTop:50 }}>
        <Text>Sous-total(articles):{}</Text>
    {  
    
    //console.log('from render : '+ JSON.stringify(ListPanier))
   console.log(' test from render test : '+ListPanier)
      }
   
     <Text>{JSON.stringify(ListPanier)}</Text>
     <Text>{ListPanier}</Text>
         
     {/* {
          ListPanier.map((item, index) => {
            return(
             <Text key={index}>
                  {JSON.stringify(item)}
             </Text>
            )
              })}
        } */}
       <Button title='getAllkeys'
          onPress={() => {
            getAllKeys();
           }}
      />
      <Button title='RemoveAll'
          onPress={() => {
            fetchAllItems();
            
          }}
      />
        <Button title='getAllItems'
          onPress={() => {
            getAll();
            
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f3d078",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    margin: 15,
  },
  smallbtnm: {
    backgroundColor: "#f2f3f5",
    width: 45,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  smallbtnp: {
    backgroundColor: "#f2f3f5",
    width: 45,
    height: 28,
    alignItems: "center",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  Qte: {
    width: 60,
    height: 28,
    alignItems: "center",
    position: "absolute",
    right: 45,
    justifyContent: "center",
    maxHeight: 30,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 30,
    //justifyContent:'center',
    maxHeight: 30,
    maxWidth: 150,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
  },
   deletbtn: {
    backgroundColor:"#f2f3f5",
    maxHeight:25,
    margin:20,
    padding:10,
    justifyContent:'center',
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
  },
});
