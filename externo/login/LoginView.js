import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { Button } from "@react-native-material/core";
import TextField from "../../components/TextField";
import LoginViewModel from "./LoginViewModel";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function LoginView({ navigation }) {
  const { setValue, handleSubmit, onSubmit, isLoading, setIsLoading } = LoginViewModel(navigation);

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
         contentContainerStyle={{flex:1}}
        >
          <View style={styles.cabecalho}>
            <Text Text style={[styles.titulo, styles.cor, styles.font]}>
              Login
            </Text>
            <Text style={[styles.subTitulo, styles.cor, styles.font]}>
              Faça login na sua Conta
            </Text>
          </View>

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
          </View>
          <Button
            tintColor="#fff"
            style={[styles.button, styles.font]}
            onPress={handleSubmit(onSubmit)}
            title="Logar"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#027373",
    flex: 1,
  },
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1CA9A9",
    width: 300,
    position:"absolute",
    bottom: 20
  },
  background: {
    flex: 1,
    alignItems: 'center'
  },
  cabecalho: {
    marginTop: Constants.statusBarHeight + 50,
    marginBottom: Constants.statusBarHeight + 50,
    borderRadius: 10,
    width: 300
  },
  titulo: {
    fontSize: 45,
  },
  subTitulo: {
    fontSize: 20,
  },
  cor: {
    color: "white",
  },
  font:{
    fontFamily: 'Poppins-Regular'
  }
});
