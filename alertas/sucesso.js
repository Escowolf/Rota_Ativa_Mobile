import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import styles from "./stylesAlertas.js";
import { useEffect, useState } from "react";

export default function Sucesso({route, navigation }) {

  const [page, setPage] = useState();
  const [mensagem, setMensagem] = useState();

  useEffect(() => {
    setPage(route.params.page);
    setMensagem(route.params.mensagem);
  }, [route])

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
          onPress={() => navigation.navigate(page)}
          title={mensagem}
        />
      </ImageBackground>
    </View>
  );
}
