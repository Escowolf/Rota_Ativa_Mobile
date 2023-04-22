import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import Constants from 'expo-constants';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Erro({ navigation }) {

  let [fontLoaded] = useFonts({
    'Poppins-Regular' : require('../../fonts/Poppins/Poppins-Regular.ttf')
  })


  if(!fontLoaded){
    return(<AppLoading/>)
  }

  return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../assets/backgroundImage.png')}
        resizeMode="cover"
        style={styles.background}>

        <Image style={styles.image} source={require('../assets/erro.png')}/>

        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo, styles.cor, styles.font]}>
            Erro ao tentar recuperar senha, tente novamente
          </Text>
        </View>

        <Button 
          tintColor="#FF647C" 
          style={[styles.button, styles.cadastro, styles.font]} 
          onPress={() =>
            navigation.navigate('Cadastro')
          } 
          title="Tente Novamente"
        />
        
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#027373",
    alignItems: "center",
  },
  image:{
    marginTop: Constants.statusBarHeight + 40
  },
  button:{
    backgroundColor: '#D9D9D9',
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
    fontFamily: 'Poppins-Regular'
  }
});
