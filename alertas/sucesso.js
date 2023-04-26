import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import styles from "./stylesAlertas.js";

export default function Sucesso({ navigation }) {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <Image style={styles.image} source={require("../assets/sucesso.png")} />

        <View style={styles.cabecalho}>
          <Text style={[styles.titulo, styles.cor, styles.font]}>
            Senha recuperada com sucesso!
          </Text>
        </View>

        <Button
          tintColor="#fff"
          style={[styles.buttonSucess, styles.cadastro, styles.font]}
          onPress={() => navigation.navigate("Login")}
          title="Entrar no Aplicativo"
        />
      </ImageBackground>
    </View>
  );
}
