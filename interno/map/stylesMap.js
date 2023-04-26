import {  StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
      flex: 1,    
      position: "relative",
      paddingTop: Constants.statusBarHeight
    },
    map: {
      width: "100%",
      height: "80%",
    },
  });
  