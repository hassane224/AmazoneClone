import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    View,
    Text,
    Image
 } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PopularDeals({navigation}) {
    const Productions = [
        { produit:'Rice cokker', image: require('../assets/image1.jpg'),price:"100",description:'rice cooker de 1000w'},
        { produit:'Assiettes', image: require('../assets/image2.jpg'),price:"50",description:'rice cooker de 1000w'},
        { produit:'Tasse caffe', image: require('../assets/image3.jpg'),price:"10",description:'rice cooker de 1000w'},
        { produit:'Villa', image: require('../assets/image4.jpg'),price:"100000",description:'rice cooker de 1000w'}
       ];
    return (
        <View  style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#e9edee',
            height: 220,
            marginBottom: 15,
            paddingTop:10
          }}>
                <Text
                style={{
                  marginLeft: 5,
                  marginBottom:5
                }}>
                Popular deal
              </Text>

                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                 {
                     Productions.map((Produit,index)=>{
                       
                   return(
                      <TouchableOpacity 
                      onPress={() => navigation.navigate('Details')}>
                        <View style={{ backgroundColor: "white", height: 150, width: 150, alignItems: "center", marginRight: 10 }}
                        key={index}>
                        <Image
                            source={Produit.image}
                            style={{ height: 100, width: 100, resizeMode: 'stretch' }}
                        /> 
                         <View style={{ marginLeft: 5 }}>
                             <Text>{Produit.produit}</Text>
                             <Text>${Produit.price}</Text>
                         </View> 
                      </View>
                     </TouchableOpacity>
                         )
                     })

                  
                    } 
            </ScrollView>
            <Text
                style={{
                    marginLeft: 5,
                    color: 'green',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                See all deals
            </Text>
           
           
        
        </View>

    );
}
