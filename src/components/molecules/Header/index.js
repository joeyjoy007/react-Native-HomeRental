import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { IC_Drawer } from '../../../res/images/Icon/index'

const Header = () => {
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
