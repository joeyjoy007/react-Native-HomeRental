import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ListItems } from "../../components";
import { fonts } from "../../res/fonts/index";
import { useFonts } from "expo-font";
import { IC_Search } from "../../res/images/Icon";
import { colors } from "../../res/colors";
import { IL_House_01, IL_House_02, IL_House_03, IL_House_04, IL_House_05 } from "../../res/images/Illustration";

const Home = ({navigation}) => {
  const [loaded] = useFonts({
    SemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    Regular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.wrapperWelcome}>
          <Text style={styles.textWelcome}>Find</Text>
          <Text style={styles.textWelcome}>Your Dream Home</Text>
        </View>

        {/**search section */}
        <View style={styles.wrapperSearch}>
          <View style={styles.search}>
            <TextInput
              placeholder="Find your dream home"
              style={{ fontSize: 14, fontFamily: "Regular", width: "100%" }}
            />
            <View style={styles.searchIcon}>
              <TouchableOpacity>
                <IC_Search />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:30,paddingLeft:20,flexDirection:"row",paddingVertical:10}}>
        <ListItems type="main" onPress={()=>navigation.navigate('Detail')}  name="Modern house" city="Indore" image={IL_House_01}/>
        <ListItems  type="main" name="White House" city="Indore" image={IL_House_02}/>
        <ListItems  type="main" name="Wooden House" city="Indore" image={IL_House_03}/>
        
        </ScrollView>
        </View>
        {/**Recommended for you */}
        <View style={{marginTop:30,paddingHorizontal:20}}>
        <Text style={{fontSize:16,fontFamily:"SemiBold"}}>Recommended For You</Text>
        <ListItems onPress={()=>navigation.navigate('Detail')} name="Wooden House" city="Indore" image={IL_House_04}/>
        <ListItems name="Traingle House" city="Indore" image={IL_House_05}/>
        <ListItems name="Cube House" city="Indore" image={IL_House_03}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapperWelcome: {
    paddingHorizontal: 20,
  },
  textWelcome: {
    fontSize: 30,
    fontFamily: "SemiBold",
  },
  search: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 55,
    width: "100%",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  searchIcon: {
    backgroundColor: colors.primary,
    height: 39,
    width: 39,
    borderRadius: 39 / 2,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft:-25
  },
  wrapperSearch: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
