import React, { Component } from 'react';
//import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WithPrice(props,{navigation}) {
    //const navigation = useNavigation();
     
    return (
         <View style={{ backgroundColor: "white", height: 150, width: 150, alignItems: "center", marginRight: 10 }}>
                    {/* <TouchableOpacity
                             // onPress={() => navigation.navigate('Details', { price: props.price, description: props.description, imagelink: props.imageId })}                           
                              onPress={() => navigation.navigate('Details', { price: '1000', description: 'test', imagelink: 'sow' })}                           
                    >
                    */}
                  <Image
                        //source={require('../assets/'+image1+'.jpg')}
                        source={props.imageId}
                        
                        style={{ height: 100, width: 100, resizeMode: 'stretch' }}
                    /> 
                
                     <View style={{ marginLeft: 5 }}>
                         <Text>${props.price}</Text>
                         
                         <Text>{props.description}</Text>
                     </View> 
                
        </View>
    );
}
