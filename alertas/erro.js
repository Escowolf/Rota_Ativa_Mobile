import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import styles from './stylesAlertas.js'

export default function Erro({ navigation }) {

  return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../assets/backgroundImage.png')}
        resizeMode="cover"
        style={styles.background}>

        <Image style={styles.image} source={require('../assets/erro.png')}/>

        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo, styles.cor, styles.font]}>
            Erro ao tentar recuperar senha, tente novamente
          </Text>
        </View>

        <Button 
          tintColor="#FF647C" 
          style={[styles.buttonErro, styles.cadastro, styles.font]} 
          onPress={() =>
            navigation.navigate('Cadastro')
          } 
          title="Tente Novamente"
        />
        
        </ImageBackground>
      </View>
  );
}
