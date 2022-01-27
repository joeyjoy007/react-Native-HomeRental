import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useFonts } from "expo-font";
import { colors } from '../../../res/colors';

const Button = ({text}) => {
    const [loaded] = useFonts({
        SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        Medium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
        Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
      });
    
      if (!loaded) {
        return null;
      }

  return (
    <TouchableOpacity style={{backgroundColor:colors.primary,paddingHorizontal:58,paddingVertical:15,borderRadius:30}}>
       <Text style={{fontFamily:"SemiBold",fontSize:16,color:colors.white}}>{text}</Text>
       </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
