import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button, Flex } from "@react-native-material/core";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import styles from "./confirmaCompraStyles.js";
import pessoa from "../../dados/pessoas.json";
import ConfirmaCompraViewModel from "./confirmaCompraViewModel";

export default function ConfirmarCompraView({ route, navigation }) {
  const {ticket, cartao, setCartao, formaPagamento, setFormaPagamento, onSubmit } =
    ConfirmaCompraViewModel({ route, navigation });

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
              Confirmar compra
            </Text>
          </View>
          <NativeBaseProvider>
            <Text
              style={[styles.subTitulo, styles.cor, styles.margin]}
            >
              Escolha o cartão
            </Text>
            <Select
              selectedValue={cartao}
              minWidth="200"
              accessibilityLabel="Escolha o veiculo"
              placeholder="Escolha o cartão"
              _selectedItem={{
                bg: "gray.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              style={{ backgroundColor: "#fff" }}
              onValueChange={(itemValue) => setCartao(itemValue)}
            >
              {pessoa[0].cartões.map((x, k) => {
                return (
                  <Select.Item
                    key={k}
                    label={`Numero: ${x.numero}`}
                    value={x.numero}
                  />
                );
              })}
            </Select>

            <Text
              style={[styles.subTitulo, styles.cor, styles.margin]}
            >
              Forma de pagamento
            </Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={formaPagamento}
              onChange={(nextValue) => {
                setFormaPagamento(nextValue);
              }}
              display="flex"
              flexDirection="row"
            >
              <Flex direction="row" w={300} justify="around">
                <Flex
                  style={[styles.margin, styles.backgroundCard]}
                  direction="row"
                >
                  <Radio accessibilityLabel="Credito" value="1" my={1} />
                  <Text
                    nativeID="Credito"
                    style={[styles.subTitulo, styles.cor]}
                  >
                    {" "}
                    Credito
                  </Text>
                </Flex>
                <Flex
                  style={[styles.margin, styles.backgroundCard]}
                  direction="row"
                >
                  <Radio accessibilityLabel="Debito" value="2" my={1} />
                  <Text
                    nativeID="Debito"
                    style={[styles.subTitulo, styles.corInfo]}
                  >
                    {" "}
                    Debito
                  </Text>
                </Flex>
              </Flex>
            </Radio.Group>
            <Text
              style={[styles.subTitulo, styles.cor, styles.margin]}
            >
              Valor
            </Text>
            <Text
              style={[styles.subTitulo, styles.cor, styles.margin]}
            >
              R$ {ticket.preco},00
            </Text>

          </NativeBaseProvider>

          <Button
            tintColor="#fff"
            style={[styles.button]}
            onPress={() =>
              cartao != ""
                ? navigation.navigate("Sucesso", {
                    page: "PerfilView",
                    mensagem: "Pagamento Realizado com sucesso",
                    button: "Voltar",
                  })
                : ""
            }
            title="Confirmar pagamento"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
