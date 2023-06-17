import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import styles from './stylesAlertas.js'

export default function Erro({route, navigation }) {

  const [page, setPage] = useState();
  const [mensagem, setMensagem] = useState();
  const [button, setButton] = useState();

  useEffect(() => {
    setPage(route.params.page);
    setMensagem(route.params.mensagem);
    setButton(route.params.button);
  }, [route])


  return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../assets/backgroundImage.png')}
        resizeMode="cover"
        style={styles.background}>

        <Image style={styles.image} source={require('../assets/erro.png')}/>

        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo, styles.cor, styles.font]}>
            {mensagem}
          </Text>
        </View>

        <Button 
          tintColor="#FF647C" 
          style={[styles.buttonErro, styles.cadastro, styles.font]} 
          onPress={() => navigation.navigate(page)}
          title={button}
        />
        
        </ImageBackground>
      </View>
  );
}
