import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { IC_ArrowLeftBlack, IC_Drawer } from '../../../res/images/Icon/index'

const Header = ({type,onPress}) => {

  if(type == "transparent-with-back"){
    return (
      <TouchableOpacity onPress={onPress} style={{
        height:30,
        width:30,
        backgroundColor:"#ffffff",
        borderRadius:30/2,
        position:"absolute",
        top:50,
        left:20,
        justifyContent:"center",
        alignItems:"center",
        zIndex:99
      }}>
      <IC_ArrowLeftBlack/>
      </TouchableOpacity>
    )
  }


  return (
      <View>
   <TouchableOpacity style={{padding:20}}>
    <IC_Drawer/>
   </TouchableOpacity>
   
   </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
