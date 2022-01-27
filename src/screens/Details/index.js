import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header, ListItems } from "../../components";
import { useFonts } from "expo-font";
import {
  IL_House_01,
  IL_User_01,
  IL_BedRoom,
  IL_Garage,
  IL_Pool,
} from "../../res/images/Illustration";
import { IC_Call, IC_Chat, IC_Star, IC_Star_Half } from "../../res/images/Icon";
import { Gap } from "../../components/atoms/index";
import { Button } from "../../components/atoms/index";
import { colors } from "../../res/colors";

const Detail = ({ navigation }) => {
  const [loaded] = useFonts({
    SemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    Regular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    Medium: require("../../../assets/fonts/Poppins-Medium.ttf"),
    Bold: require("../../../assets/fonts/Poppins-Bold.ttf"),
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
            backgroundColor: "white",
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
                style={{
                  fontSize: 14,
                  fontFamily: "Regular",
                  color: "#afafaf",
                }}
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
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={IL_User_01}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ flex: 1, paddingLeft: 15 }}>
              <Text style={{ fontSize: 14, fontFamily: "Medium" }}>
                Caroline
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Regular",
                  color: "#afafaf",
                }}
              >
                House Owner
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <IC_Chat />
              </TouchableOpacity>
              <Gap width={10} />
              <TouchableOpacity>
                <IC_Call />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{ paddingLeft: 20, fontSize: 14, fontFamily: "SemiBold" }}
            >
              House Facilities
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 10, paddingLeft: 20 }}
          >
            <ListItems
              type="house-facilities"
              image={IL_BedRoom}
              name="4 Bedroom"
            />
            <ListItems
              type="house-facilities"
              image={IL_Garage}
              name="Garage"
            />
            <ListItems type="house-facilities" image={IL_Pool} name="Pool" />
            <ListItems
              type="house-facilities"
              image={IL_Pool}
              name="Swimming Pool"
            />
          </ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 14, fontFamily: "SemiBold" }}>
              Description
            </Text>
            <Text
              style={{ fontSize: 12, fontFamily: "Regular", color: "#afafaf" }}
            >
              Luxury home at affordable prices available here for more enquiry
              contact here
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ height: 100, width: "100%", position: "absolute", bottom: 0 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            alignItems: "center",
          }}
        >
        <View>
          <Text
            style={{ fontSize: 12, fontFamily: "SemiBold", color: "#afafaf" }}
          >
            Price
          </Text>
          <Text
            style={{ fontFamily: "Bold", fontSize: 20, color: colors.primary }}
          >
            $7,500
          </Text>
          </View>
         {/** Button */}
         <Button text = "Book Now"/>
        </View>
     
        
        
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
