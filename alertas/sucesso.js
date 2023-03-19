import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import Constants from 'expo-constants';

export default function Sucesso({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground
    source={require('../assets/backgroundImage.png')}
    resizeMode="cover"
    style={styles.background}>

        <Image style={styles.image} source={require('../assets/sucesso.png')}/>

        <View style={styles.cabecalho}>
          <Text style={[styles.titulo, styles.cor, styles.font]}>
            Senha recuperada com sucesso!
          </Text>
        </View>

        <Button 
          tintColor="#fff" 
          style={[styles.button, styles.cadastro, styles.font]} 
          onPress={() =>
            navigation.navigate('Login')
          } 
          title="Entrar no Aplicativo"
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
    marginTop: Constants.statusBarHeight + 40,
  },
  button:{
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
    fontFamily: 'Poppins-Regular'
  }
});
