import React, { Component } from "react";
import hbo from "../assets/hbo.jpeg";
import dsmyle from "../assets/dsmyle.jpeg";
import Caroussel from "./Caroussel";
import PopularDeal from "./PopularDeal";
import Banner from "./Banner";
import img1 from "../assets/image1.jpg";
import S10 from "../assets/S10.png";
import banner2 from "../assets/banner2.jpg";
import banner1 from "../assets/banner1.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";

import { ScrollView, View, Text, Image, TouchableOpacity, Button } from "react-native";

function Start() {
  return (
    <Icon.Button
      name="star-outline"
      size={20}
      backgroundColor="white"
      iconStyle={{
        color: "#998047",
        marginRight: 0.5,
      }}
    />
  );
}
export default function FoodsScreen({ navigation }) {
  const Productions = [
    {
      produit: "Rice cokker",
      image: require("../assets/image1.jpg"),
      price: "100",
      description: "rice cooker de 1000w",
    },
    {
      produit: "Assiettes",
      image: require("../assets/image2.jpg"),
      price: "150",
      description: "Assiette en or"
    },
    {
      produit: "Tasse caffe",
      image: require("../assets/image3.jpg"),
      price: "50",
      description: "Tasse caffe en ceramique",
    },
    {
      produit: "Villa",
      image: require("../assets/image4.jpg"),
      price: "100000",
      description: "Villa de luxe ",
    },
  ];
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              height: 25,
              justifyContent: "center",
              backgroundColor: "#b8e9ed",
            }}
          >
            <Text
              style={{
                fontSize: 10,
                marginLeft: 15,
              }}
            >
              Deliver for thibaut - Laham 201706
            </Text>
          </View>
          <View
            style={{
              height: 140,
            }}
          >
            <Caroussel />
          </View>
          <Banner image={banner2} />
          <Banner image={banner1} />
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#e9edee",
                height: 220,
                marginBottom: 15,
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  marginLeft: 5,
                  marginBottom: 5,
                }}
              >
                Popular deal
              </Text>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {Productions.map((Produit, index) => {
                  return (
                    <TouchableOpacity
                    key={index}
                    onPress={() => {
                      return navigation.navigate("Details",{produit:Produit.produit,price:Produit.price,imagelink:Produit.image,description:Produit.description})}}
                    >
  
                      <View
                      
                        style={{
                          backgroundColor: "white",
                          height: 150,
                          width: 150,
                          alignItems: "center",
                          marginRight: 10,
                        }}
                       
                      >
                       <Image
                         source={Produit.image}
                          style={{
                            height: 100,
                            width: 100,
                            resizeMode: "stretch",
                          }}
                        />
                        <View style={{ marginLeft: 5 }}>
                          <Text>{Produit.produit}</Text>
                          <Text>${Produit.price}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
              <Text
                style={{
                  marginLeft: 5,
                  color: "green",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                See all deals
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Banner image={dsmyle} />
          </View>
          <View
            style={{
              paddingTop: 10,
              paddingBotom: 10,
              backgroundColor: "white",
            }}
          >
            <Text style={{ paddingLeft: 18 }}>
              What did you think of the item
            </Text>
            <Text
              style={{ paddingLeft: 18, marginBottom: 10, color: "#818181" }}
            >
              Rate you purchase
            </Text>
            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 0.5,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                padding: 18,
              }}
            >
              <View>
                <Image source={img1} style={{ height: 60, width: 60 }} />
              </View>
              <View
                style={{ alignItems: "flex-start", width: 200, marginLeft: 2 }}
              >
                <Text>Wilton icing color</Text>
                <View style={{ flexDirection: "row" }}>
                  <Start />
                  <Start />
                  <Start />
                  <Start />
                  <Start />
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 10,
                  color: "blue",
                  marginBottom: 10,
                }}
              >
                Rate more production
              </Text>
            </View>
          </View>
          <Banner image={hbo} />
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Deal of the day</Text>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={S10} style={{ height: 200, width: 100 }} />
            </View>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text>Up to 20% off Samsungs10+</Text>
              <Text>$549.99 - $799.99</Text>
              <Text style={{ marginTop: 4 }}>End in 20:42:56</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  color: "blue",
                  marginBottom: 10,
                }}
              >
                See more deals
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
