import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  Flex,
  Icon,
  IconComponentProvider,
} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import HistoricoService from "../../service/historicoService/historicoService";
import AppLoading from "expo-app-loading";

export default function HistoricoView({ navigation }) {
  let [fontLoaded] = useFonts({
      'Poppins-Regular' : require('../../fonts/Poppins/Poppins-Regular.ttf')
  })  

  const [historico, setHistorico] = useState([]);

  const historicoService = new HistoricoService();
  useEffect(() => {
    historicoService.historico().then((resp) => {
      console.log(resp.data);
      setHistorico(resp.data);
    })
  }, [])
  

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
          contentContainerStyle={styles.container}
        >
          <View style={styles.cabecalho}>
            <Text Text style={[styles.titulo, styles.font]}>
              Histórico de estacionamento
            </Text>
          </View>

          {historico.map((h) =>{
            return (
              <Flex style={styles.cabecalho1} center>
                <Flex direction="row" center h={50}>
                  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <Icon name="map-marker" size={24} color="#263238" />
                  </IconComponentProvider>
                  <Text style={styles.font}>{h.vaga.logradouro}, {h.vaga.bairro}</Text>
                </Flex>
                <Flex style={styles.cabecalho2} w={300} center direction="row">
                  <Flex center w={100}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                      <Icon name="calendar" size={24} color="#263238" />
                    </IconComponentProvider>
                    <Text style={[styles.subTitulo, styles.cor, styles.font]}>{h.entrada}</Text>
                  </Flex>

                  <Flex center w={100}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                      <Icon name="clock" size={24} color="#263238" />
                    </IconComponentProvider>
                    <Text style={[styles.subTitulo, styles.cor, styles.font]}>{h.vaga.tempoUso}:00:00</Text>
                  </Flex>

                  <Flex center w={100}>
                    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                      <Icon name="cash" size={24} color="#263238" />
                    </IconComponentProvider>
                    <Text style={[styles.subTitulo, styles.cor, styles.font]}>R$ {h.ticketUsado}0,00</Text>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}

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
  },
  background: {
    flex: 1,
    alignItems: 'center'
  },
  cabecalho: {
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
  },
  cabecalho1: {
    backgroundColor: "#F2E7DC",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cabecalho2: {
    marginTop: 10,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 25,
    color: "#fff",
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },
  font:{
    fontFamily: 'Poppins-Regular'
  }
});
