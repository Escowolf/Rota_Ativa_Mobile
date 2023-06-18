import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import EstacionarViewModel from "./estacionarViewModel";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import { Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import styles from "./estacionarStyles.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EstacionarView({ route, navigation }) {
  const {
    veiculoSelecionado,
    setVeiculoSelecionado,
    veiculo,
    setVeiculo,
    credito,
    setCredito,
    custoTempo,
    onSubmit,
  } = EstacionarViewModel(navigation);

  const { vaga, user, regra } = route.params;
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
            <Text style={[styles.titulo, styles.cor]}>
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
              style={{ backgroundColor: "#fff" }}
              onValueChange={(itemValue) => {
                setVeiculo(itemValue);
                setVeiculoSelecionado(
                  user.veiculos.filter((v) => v.placa == itemValue)
                );
              }}
            >
              {user.veiculos.map((x, k) => {
                return (
                  <Select.Item
                    key={k}
                    label={`Placa: ${x.placa}`}
                    value={x.placa}
                  />
                );
              })}
            </Select>

            <Flex style={[styles.margin]} direction="column" h={100}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="map-marker" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor]}>
                    {" "}
                    Local
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Text style={[styles.subTitulo, styles.corInfo]}>
                  {vaga.rua_avenida} - {vaga.Bairro}
                </Text>
                <Text style={[styles.subTitulo, styles.corInfo]}>
                  {regra}
                </Text>
              </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="clock" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor]}>
                    {" "}
                    Tempo de Uso
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Text style={[styles.subTitulo, styles.corInfo]}>
                  {custoTempo.tempo}:00hr
                </Text>
              </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor]}>
                    Quantidade de Cartões Disponiveis
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Text style={[styles.subTitulo, styles.corInfo]}>
                  {" "}
                  {user.ticket}
                </Text>
              </Flex>
            </Flex>

            <Text
              style={[styles.subTitulo, styles.cor, styles.margin]}
            >
              Quantos cartões você deseja usar?
            </Text>

            {user.ticket >= 1 ? (
              <Radio.Group
                name="cartões"
                accessibilityLabel="cartões"
                value={credito}
                onChange={(nextValue) => {
                  setCredito(nextValue);
                }}
                display="flex"
                flexDirection="row"
              >
                <Flex direction="row" w={300} justify="around">
                  <Flex
                    style={[styles.margin, styles.backgroundCard]}
                    direction="row"
                  >
                    <Radio accessibilityLabel="cartao 1" value="1" my={1} />
                    <Text
                      nativeID="cartao 1"
                      style={[styles.subTitulo, styles.cor]}
                    >
                      {" "}
                      1 Cartão
                    </Text>
                  </Flex>
                  {user.ticket >= 2 ? (
                    <Flex
                      style={[styles.margin, styles.backgroundCard]}
                      direction="row"
                    >
                      <Radio accessibilityLabel="cartao 2" value="2" my={1} />
                      <Text
                        nativeID="cartao 2"
                        style={[styles.subTitulo, styles.corInfo]}
                      >
                        {" "}
                        2 Cartões
                      </Text>
                    </Flex>
                  ) : (
                    ""
                  )}
                </Flex>
              </Radio.Group>
            ) : (
              <Flex
                style={[styles.margin, styles.backgroundCard]}
                direction="row"
              >
                <Text style={[styles.subTitulo, styles.corInfo]}>
                  {" "}
                  Quantidade de tickets invalido
                </Text>
              </Flex>
            )}
            <Flex
              style={[styles.margin, styles.backgroundCard]}
              direction="row"
            >
              <Text style={[styles.subTitulo, styles.corInfo]}>
                {" "}
                1 Cartão = 1 Hora{" "}
              </Text>
            </Flex>
          </NativeBaseProvider>

          <Button
            tintColor="#fff"
            style={[styles.button]}
            onPress={() =>
              onSubmit({ vaga: vaga, veiculo: veiculoSelecionado })
            }
            title="Estacionar"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
