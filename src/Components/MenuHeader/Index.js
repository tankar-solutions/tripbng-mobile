import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';

const MenuHeader = ({ authTitle, backImg, onPress, rightIcon }) => {
  return (
    <View style={styles.headerTitle}>
      <TouchableOpacity style={styles.backIconImgView} onPress={onPress}>
        <Image style={styles.backIconImg} source={backImg} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{authTitle}</Text>
    </View>
  );
};

export default MenuHeader;
