import {
  ScrollView,
  View,
  ImageBackground,
  Text
} from "react-native";
import { Button } from "@react-native-material/core";
import TextField from "../../components/TextField";
import LoginViewModel from "./LoginViewModel";
import styles from './LoginStyles.js'

export default function LoginView({ navigation }) {
  const {validate, setValue, handleSubmit, onSubmit } = LoginViewModel(navigation);

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
              onChangeText={(text) => { validate(text)}}
              icon={"account"}
              keyboardType="email-address"
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
