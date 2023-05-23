import {  StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    con: {
      backgroundColor: "#027373",
      flex:1
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      margin: 100,
    },
    background: {
      flex: 1,
      alignItems: "center",
    },
    cabecalho: {
      marginTop: Constants.statusBarHeight + 20,
      marginBottom: Constants.statusBarHeight + 20,
      borderRadius: 10,
      width: 300,
    },
    titulo: {
      fontSize: 40,
    },
    subTitulo: {
      fontSize: 20,
    },
    cor: {
      color: "white",
    },
    button: {
      backgroundColor: "#1CA9A9",
      marginBottom: 20,
      width:300,
    },
    font:{
    }
  });
  