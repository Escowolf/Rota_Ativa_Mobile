import {  StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#027373",
      alignItems: "center",
    },
    image:{
      marginTop: Constants.statusBarHeight + 40
    },
    buttonErro:{
      backgroundColor: '#D9D9D9',
      marginBottom:10,
      width: 300,
      position:"absolute"
    },
    buttonSucess:{
      backgroundColor: '#16BE81',
      marginBottom:10,
      width: 300,
      position:"absolute"
    },
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: '100%'
    },
    cabecalho: {
      margin: 30,
      borderRadius: 10,
    },
    titulo: {
      fontSize: 25,
    },
    subTitulo: {
      fontSize: 20,
    },
    cor: {
      color: "white",
    },
    login:{
      bottom: 75
    },
    cadastro: {
      bottom: 25
    },
    font:{
    }
  });
  