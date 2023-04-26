import {  useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import EstacionarViewModel from "./EstacionarViewModel";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import {
  Flex,
  Icon,
  IconComponentProvider,
} from "@react-native-material/core";
import styles from './stylesEstacionar.js'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EstacionarView({ navigation }) {
  const { setValue, handleSubmit, onSubmit} =
    EstacionarViewModel();

  const [dados, setDados] = useState();  
  const [veiculo, setVeiculo] = useState("");
  const [credito, setCredito] = useState("one");

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
