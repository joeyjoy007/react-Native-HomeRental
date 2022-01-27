import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../../res/colors/index";
import { useFonts } from "expo-font";
import { IC_ArrowRightBlack, IC_Star, IC_Star_Half } from "../../../res/images/Icon";

const ListItems = ({ type, onPress, image, name, city }) => {
  const [loaded] = useFonts({
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  if(type=="house-facilities"){
    return (
      <View style={{backgroundColor:"white",height:110,width:100,borderRadius:20,marginRight:20, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,}}> 
      <Image source={image} style={{height:80,width:100,resizeMode:"stretch",borderTopLeftRadius:20,borderTopRightRadius:20}}/>

      <View style={{justifyContent:"center",alignItems:"center",height:110-80}}>
      <Text style={{fontSize:12,fontFamily:"Medium"}}>{name}</Text>
      </View>
      
      </View>
    )
  }

  if(type== "main"){

    return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 209,
            width: 231,
            backgroundColor: "#ffffff",
            borderRadius: 20,
            marginRight: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
    
            elevation: 3,
          }}
        >
          <Image
            source={image}
            style={{
              height: 150,
              width: "100%",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              resizeMode: "stretch",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
              paddingVertical: 10,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 14, fontFamily: "SemiBold" }}>{name}</Text>
              <Text
                style={{ fontSize: 10, fontFamily: "Regular", color: "#afafaf" }}
              >
                {city}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star_Half />
          </View>
          
          </View>
          
        </TouchableOpacity>
      );
    

     


  }
  return (
    <TouchableOpacity onPress={onPress} style={{marginVertical:10,backgroundColor:"#ffffff",borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,}}>
    <View style={{flexDirection:"row",height:100,width:"100%",justifyContent:"space-between",alignItems:"center",paddingHorizontal:20}}>
    
    <View>
    <Image source={image} style={{height:60,width:60,borderRadius:10,resizeMode:"stretch"}}/>
    </View>
    <View style={{flex:1,paddingLeft:20}}>
    <Text style={{ fontSize: 14, fontFamily: "SemiBold" }}>{name}</Text>
    <Text
      style={{ fontSize: 10, fontFamily: "Regular", color: "#afafaf" }}
    >
      {city}
    </Text>
    <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
    <IC_Star/>
    <IC_Star/>
    <IC_Star/>
    <IC_Star/>
    <IC_Star_Half/>
    </View>
    </View>
    <TouchableOpacity>
          <IC_ArrowRightBlack/>
          </TouchableOpacity>
    </View>
    
    </TouchableOpacity>
)

  };

export default ListItems;

const styles = StyleSheet.create({});
