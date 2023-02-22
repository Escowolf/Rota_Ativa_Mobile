import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "@react-native-material/core";
import TextField from "../../components/TextField";
import LoginViewModel from "./LoginViewModel";

export default function LoginView({ navigation }) {
 
  const {
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading
  } = LoginViewModel(navigation);


  return (
    <ScrollView style={styles.con}>
    <View style={styles.container}>
      <TextField
        label={"Email"}
        placeholder={"Digite seu email"}
        onChangeText={(text) => setValue("email", text)}
        icon={"account"}
      />
      <TextField
        label={"Senha"}
        placeholder={"Digite sua senha"}
        onChangeText={(text) => setValue("senha", text)}
        secureTextEntry={true}
        icon={"lock"}
      />
      <Button tintColor="#535353" style={styles.button} onPress={handleSubmit(onSubmit)} title="Logar" />
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
    marginTop: 20
  },
  button:{
    backgroundColor: '#A9D9D0',
    marginBottom:10
  }
});
