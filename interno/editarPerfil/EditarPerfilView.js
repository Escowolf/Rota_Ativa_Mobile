import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View, ScrollView } from "react-native";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { Button } from "@react-native-material/core";
import EditarPerfilViewModel from "./EditarPerfilViewModel";
import VagasService from "../../service/vagasService/vagasService";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function EditarPerfilView({ navigation }) {
  const { setValue, handleSubmit, onSubmit, isLoading, setIsLoading } =
    EditarPerfilViewModel();

  const [dados, setDados] = useState();  

  let [fontLoaded] = useFonts({
    'Poppins-Regular' : require('../../fonts/Poppins/Poppins-Regular.ttf')
  })


  if(!fontLoaded){
    return(<AppLoading/>)
  }
  return (
    <ScrollView style={styles.con}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={[styles.titulo, styles.cor, styles.font]}>Edite seu Perfil</Text>
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
        <Button title="000.000.000-00" disabled />
        <TextField
          label={"Confirme sua senha"}
          placeholder={"Digite sua senha novamente"}
          onChangeText={(text) => setValue("senhaConfirma", text)}
          secureTextEntry={true}
          icon={"lock"}
        />
        <Button
          tintColor="#535353"
          style={[styles.button, styles.font]}
          onPress={handleSubmit(onSubmit)}
          title="Atualizar"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#027373",
  },
  container: {
    flex: 1,
    backgroundColor: "#027373",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 100,
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },cabecalho: {
    margin: 50,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 35,
  },
  cor: {
    color: "white",
  },
  font:{
    fontFamily: 'Poppins-Regular'
  }
});
