import {  useState } from "react";
import {Text, View, ScrollView } from "react-native";
import TextField from "../../components/TextField";
import { Button } from "@react-native-material/core";
import EditarPerfilViewModel from "./EditarPerfilViewModel";
import VagasService from "../../service/vagasService/vagasService";
import styles from './stylesEditarPerfil.js'

export default function EditarPerfilView({ navigation }) {
  const { setValue, handleSubmit, onSubmit, isLoading, setIsLoading } =
    EditarPerfilViewModel();

  const [dados, setDados] = useState();  

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