import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TextField from "../../components/TextField";
import {
  Button,
} from "@react-native-material/core";
import CadastroViewModel from "./CadastroViewModel";

export default function CadastroView({ navigation }) {

  const {
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading
  } = CadastroViewModel();


  return (
    <ScrollView style={styles.con}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo, styles.cor]}>
            Seja bem-vindo(a)!
          </Text>
          <Text style={[styles.subTitulo, styles.cor]}>
            Faça seu cadastro
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
          tintColor="#535353"
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          title="Cadastrar"
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 100,
  },
  cabecalho: {
    margin: 50,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 35,
  },
  subTitulo: {
    fontSize: 20,
  },
  cor: {
    color: "white",
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },
});
