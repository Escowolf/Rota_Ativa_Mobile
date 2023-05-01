import { useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import EstacionarViewModel from "./EstacionarViewModel";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import { Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import styles from "./stylesEstacionar.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EstacionarView({ navigation }) {
  const { setValue, handleSubmit, onSubmit } = EstacionarViewModel();

  const [dados, setDados] = useState();
  const [veiculo, setVeiculo] = useState("");
  const [credito, setCredito] = useState("1");

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require("../../assets/backgroundImage.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={styles.cabecalho}>
            <Text style={[styles.titulo, styles.cor, styles.font]}>
              Estacionar
            </Text>
          </View>
          <NativeBaseProvider>
            <Select
              selectedValue={veiculo}
              minWidth="200"
              accessibilityLabel="Escolha o veiculo"
              placeholder="Escolha o veiculo"
              _selectedItem={{
                bg: "gray.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              style={{backgroundColor: '#fff'}} 
              onValueChange={(itemValue) => setVeiculo(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>

            
            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="map-marker" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Local</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>Rua x, Aldeota</Text>
                </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="clock" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Tempo de Uso</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>2:00hr</Text>
                </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="cash" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Valor</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>R$ 20,00</Text>
                </Flex>
            </Flex>
            
            <Text  style={[styles.subTitulo, styles.cor, styles.font, styles.margin]}>Quantos cartões você deseja usar?</Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={credito}
              onChange={(nextValue) => {
                setCredito(nextValue);
              }}
              display="flex" flexDirection="row" 
              
            >
              <Flex direction="row" w={300} justify="around">
                <Flex style={[styles.margin, styles.backgroundCard]} direction="row" >
                  <Radio value="1" my={1}/>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}>  1 Cartão</Text>
                </Flex>
                <Flex style={[styles.margin, styles.backgroundCard]} direction="row" >
                  <Radio value="2" my={1}/>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>  2 Cartões</Text>
                </Flex>
              </Flex>
            </Radio.Group>

            <Flex style={[styles.margin, styles.backgroundCard]} direction="row" >
              <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>  1 Cartão = 1 Hora </Text>
            </Flex>
          </NativeBaseProvider>

          <Button
            tintColor="#fff"
            style={[styles.button, styles.font]}
            onPress={handleSubmit(onSubmit)}
            title="Estacionar"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
