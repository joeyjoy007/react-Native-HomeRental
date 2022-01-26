import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../../res/colors/index";
import { useFonts } from "expo-font";
import { IC_Star, IC_Star_Half } from "../../../res/images/Icon";

const ListItems = ({ type, onPress ,image,name,city}) => {

    const [loaded] = useFonts({
        SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
      });
    
      if (!loaded) {
        return null;
      }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ height: 209, width: 231, backgroundColor: "#ffffff",borderRadius:20,marginRight:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,}}
    >
      <Image source={image} style={{
          height:150,
          width:"100%",
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          resizeMode:"stretch"
      }}/>
      <View>
      <Text style={{fontSize:14,fontFamily:"SemiBold"}}>{name}</Text>
      <Text style={{fontSize:10,fontFamily:"Regular",color:"#afafaf"}}>{city}</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <IC_Star/>
      <IC_Star/>
      <IC_Star/>
      <IC_Star_Half/>
      </View>
    </TouchableOpacity>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
