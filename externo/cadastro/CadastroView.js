import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TextField from "../../components/TextField";
import { Button } from "@react-native-material/core";
import CadastroViewModel from "./CadastroViewModel";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function CadastroView({ navigation }) {
  const { setValue, handleSubmit, onSubmit, isLoading, setIsLoading } = CadastroViewModel();

  let [fontLoaded] = useFonts({
    'Poppins-Regular' : require('../../fonts/Poppins/Poppins-Regular.ttf')
  })


  if(!fontLoaded){
    return(<AppLoading/>)
  }
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require("../../assets/backgroundImage.png")}
        resizeMode="cover"
        style={styles.background}
      >
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.container}
          >
            <View style={styles.cabecalho}>
              <Text Text style={[styles.titulo, styles.cor, styles.font]}>
                Abra sua Conta
              </Text>
              <Text style={[styles.subTitulo, styles.cor, styles.font]}>
                Abra sua conta com alguns detalhes
              </Text>
            </View>
            <TextField
              label={"Nome Completo"}
              placeholder={"Digite seu nome completo"}
              onChangeText={(text) => setValue("nome", text)}
              icon={"account"}
            />
            <TextField
              label={"Email"}
              placeholder={"Digite seu email"}
              onChangeText={(text) => setValue("email", text)}
              icon={"email"}
            />
            <TextField
              label={"CPF"}
              placeholder={"Digite seu cpf"}
              onChangeText={(text) => setValue("cpf", text)}
              icon={"account"}
            />
            <TextField
              label={"Senha"}
              placeholder={"Digite sua senha"}
              onChangeText={(text) => setValue("senha", text)}
              secureTextEntry={true}
              icon={"lock"}
            />
            <TextField
              label={"Confirme sua senha"}
              placeholder={"Digite sua senha novamente"}
              onChangeText={(text) => setValue("senhaConfirma", text)}
              secureTextEntry={true}
              icon={"lock"}
            />
            <Button
              tintColor="#fff"
              style={[styles.button, styles.font]}
              onPress={handleSubmit(onSubmit)}
              title="Crie sua conta"
            />
          </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: 'Poppins-Regular'
  }
});
