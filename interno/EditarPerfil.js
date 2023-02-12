import { useEffect } from "react";
import {Alert, Image, StyleSheet, Text, View, ScrollView } from "react-native";
import TextField from "../components/TextField";
import { useForm } from "react-hook-form";
import { Button } from "@react-native-material/core";

export default function EditarPerfil({ navigation }) {

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register("nome");
    register("email");
    register("cpf");
    register("senha");
    register("senhaConfirma");
  }, [register]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.con}>
      <View style={styles.container}>
      <View style={styles.cabecalho}>
          <Text style={[styles.titulo, styles.cor]}>
              Edite seu Perfil
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
  },
});
