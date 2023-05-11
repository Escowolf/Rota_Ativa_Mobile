import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import Constants from 'expo-constants';

export default function Index({ navigation }) {
  
  return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../assets/backgroundImage.png')}
        resizeMode="cover"
        style={styles.background}>

        <Image style={styles.image} source={require('../assets/logo.png')}/>

        <View style={styles.cabecalho}>
          <Text style={[styles.titulo, styles.cor, styles.font]}>
            Bem-vindo(a) ao RotaAtiva
          </Text>
          <Text style={[styles.subTitulo, styles.cor, styles.font]}>
            O aplicativo para todos
          </Text>
        </View>

        <Button 
          tintColor="#fff" 
          style={[styles.button, styles.login, styles.font]} 
          onPress={() =>
            navigation.navigate('Sucesso', {page: "Login", mensagem: "Continue a logar", button:"Login"})
          } 
          title="Entrar"
          />

        <Button 
          tintColor="#fff" 
          style={[styles.button, styles.cadastro, styles.font]} 
          onPress={() =>
            navigation.navigate('Erro')
          } 
          title="Cadastrar"
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
    backgroundColor: '#1CA9A9',
    marginBottom:10,
    width: 300,
    position:"absolute"
  },
  background: {
    flex: 1,
    alignItems: "center",
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
