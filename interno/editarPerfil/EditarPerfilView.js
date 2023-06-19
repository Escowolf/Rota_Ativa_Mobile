import { Text, View, ScrollView, ImageBackground } from "react-native";
import TextField from "../../components/TextField";
import { Button } from "@react-native-material/core";
import EditarPerfilViewModel from "./EditarPerfilViewModel";
import styles from "./editarPerfilStyles.js";

export default function EditarPerfilView({ navigation, route }) {
  const { setValue, handleSubmit, onSubmit } = EditarPerfilViewModel(route);

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
            <Text style={[styles.titulo, styles.cor]}>
              Edite seu Perfil
            </Text>
          </View>
          <TextField
            label={"Nome Completo"}
            placeholder={route.params.user.nome}
            onChangeText={(text) => setValue("nome", text)}
            icon={"account"}
          />
          <TextField
            label={"Email"}
            placeholder={route.params.user.email}
            onChangeText={(text) => setValue("email", text)}
            icon={"email"}
            keyboardType="email-address"
          />
          <TextField
            label={"CPF"}
            placeholder={route.params.user.cpf}
            onChangeText={(text) => setValue("cpf", text)}
            icon={"account"}
            keyboardType="numeric"
          />
          <TextField
            label={"Nova senha"}
            placeholder={"Informe sua nova senha"}
            onChangeText={(text) => setValue("senhaConfirma", text)}
            secureTextEntry={true}
            icon={"lock"}
          />
          <TextField
            label={"Confirme sua senha"}
            placeholder={"Repita nova senha"}
            onChangeText={(text) => setValue("senhaConfirma", text)}
            secureTextEntry={true}
            icon={"lock"}
          />
          <Button
            tintColor="#535353"
            style={[styles.button]}
            onPress={handleSubmit(onSubmit)}
            title="Atualizar"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
