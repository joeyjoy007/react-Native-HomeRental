import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header } from "../../components";
import { useFonts } from "expo-font";
import { IL_House_01, IL_User_01 } from "../../res/images/Illustration";
import { IC_Call, IC_Chat, IC_Star, IC_Star_Half } from "../../res/images/Icon";

const Detail = ({ navigation }) => {
  const [loaded] = useFonts({
    SemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    Regular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    Medium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
    <ScrollView>
      <Header
        type="transparent-with-back"
        onPress={() => navigation.goBack()}
      />
      <Image
        source={IL_House_01}
        style={{
          height: 300,
          width: "100%",
          resizeMode: "stretch",
          zIndex: -1,
        }}
      />
      <View
        style={{
          top: -50,
          width: "100%",
          backgroundColor: "yellow",
          zIndex: 99,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
              Modern House
            </Text>
            <Text
              style={{ fontSize: 14, fontFamily: "Regular", color: "#afafaf" }}
            >
              Indore
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star_Half />
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 14, fontFamily: "SemiBold" }}>
            Listing Agent
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20,paddingVertical:10,flexDirection:'row',justifyContent:"space-between",alignItems:"center" }}>
          <Image
            source={IL_User_01}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View style={{flex:1,paddingLeft:15}}>
          <Text style={{fontSize:14,fontFamily:"Medium"}}>Caroline</Text>
          <Text style={{fontSize:10,fontFamily:"Regular",color:"#afafaf"}}>House Owner</Text>
          </View>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity>
          <IC_Chat/>
          </TouchableOpacity>
          <TouchableOpacity>
          <IC_Call/>
          </TouchableOpacity>
        
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
