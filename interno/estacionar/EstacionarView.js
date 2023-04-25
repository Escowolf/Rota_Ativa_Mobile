import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import TextField from "../../components/TextField";
import { Button } from "@react-native-material/core";
import VagasService from "../../service/vagasService/vagasService";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import EstacionarViewModel from "./EstacionarViewModel";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import Constants from "expo-constants";
import {
  Flex,
  Icon,
  IconComponentProvider,
} from "@react-native-material/core";

export default function EstacionarView({ navigation }) {
  const { setValue, handleSubmit, onSubmit} =
    EstacionarViewModel();

  const [dados, setDados] = useState();  
  const [veiculo, setVeiculo] = useState("");
  const [credito, setCredito] = useState("one");

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
          <Text style={[styles.titulo, styles.cor, styles.font]}>Estacionar</Text>
        </View>
        <NativeBaseProvider>
          <Select selectedValue={veiculo} minWidth="200" accessibilityLabel="Escolha o veiculo" placeholder="Escolha o veiculo" _selectedItem={{
          bg: "gray.300",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setVeiculo(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </NativeBaseProvider>

        <Flex direction="row" center h={50}>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="map-marker" size={24} color="#263238" />
          </IconComponentProvider>
          <Text style={styles.font}>Localização</Text>
          <Text style={styles.font}>Rua x, Aldeota</Text>
        </Flex>

        <NativeBaseProvider>
          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={credito} onChange={nextValue => { setCredito(nextValue);}}>
            <Radio value="1" my={1}>
              1 cartão
            </Radio>
            <Radio value="2" my={1}>
              2 cartões
            </Radio>
          </Radio.Group>
        </NativeBaseProvider>

        <Button
          tintColor="#535353"
          style={[styles.button, styles.font]}
          onPress={handleSubmit(onSubmit)}
          title="Estacionar"
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
