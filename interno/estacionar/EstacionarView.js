import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import EstacionarViewModel from "./estacionarViewModel";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import { Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import styles from "./estacionarStyles.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import pessoa from "../../dados/pessoas.json";

export default function EstacionarView({route, navigation }) {
  const { 
    register,
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading,
    dados,
    setDados,
    veiculo,
    setVeiculo,
    credito,
    setCredito,
    custoTempo,
    setCustoTempo} = EstacionarViewModel();

    const {vaga} = route.params 
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

              {pessoa[0].veiculos.map((x,k) => {
                return (
                  <Select.Item key={k} label={`Placa: ${x.placa}`} value= {x.placa} />
                )
              })}
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
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>{vaga}</Text>
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
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>{custoTempo.tempo}:00hr</Text>
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
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>R$ {custoTempo.custo},00</Text>
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
            onPress={() => navigation.navigate('Sucesso', {page: 'Map', mensagem: "Voltar"})}
            title="Estacionar"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
