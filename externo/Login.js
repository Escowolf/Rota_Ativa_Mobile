import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Button } from "@react-native-material/core";
import TextField from "../components/TextField";

export default function Login({ navigation }) {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register("email");
    register("senha");
  }, [register]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
    navigation.navigate('Home', { senha: data.senha, email: data.email });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#027373",
    alignItems: "center",
  },
  image: {
    margin: 100,
  },
  button:{
    backgroundColor: '#A9D9D0',
    marginBottom:10
  }
});
