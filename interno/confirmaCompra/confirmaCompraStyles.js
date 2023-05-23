import {  StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    con: {
      backgroundColor: "#027373",
      flex: 1,
    },
    container: {
      alignItems: "center",
      marginTop: 20,
    },
    button: {
      backgroundColor: "#1CA9A9",
      width: 300,
      position:"absolute",
      bottom: 20
    },
    background: {
      flex: 1,
      alignItems: 'center'
    },
    cabecalho: {
      marginTop: Constants.statusBarHeight + 50,
      borderRadius: 10,
      width: 300
    },
    titulo: {
      fontSize: 45,
    },
    subTitulo: {
      fontSize: 20,
    },
    cor: {
      color: "white",
    },
    font:{
    },
    margin:{
      marginTop: 20
    },
    backgroundCard:{
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      backgroundColor: "#464646"
    },
    corInfo:{
      color:"#BEBEBE"
    }
  });
  