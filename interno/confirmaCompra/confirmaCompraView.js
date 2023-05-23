import { useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import { Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import styles from "./stylesconfirmaCompra.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import pessoa from "../../dados/pessoas.json";
import ConfirmaCompraViewModel from "./confirmaCompraViewModel";

export default function ConfirmarCompraView({route, navigation }) {
  const { 
    register,
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading,
    dados,
    setDados,
    cartao,
    setCartao,
    formaPagamento,
    setFormaPagamento,
    custoTempo,
    setCustoTempo} = ConfirmaCompraViewModel();

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
              Confirmar compra
            </Text>
          </View>
          <NativeBaseProvider>
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
              style={{backgroundColor: '#fff'}} 
              onValueChange={(itemValue) => setCartao(itemValue)}
            >

              {pessoa[0].cartões.map((x,k) => {
                return (
                  <Select.Item key={k} label={`Numero: ${x.numero}`} value= {x.numero} />
                )
              })}
            </Select>

            
            <Text  style={[styles.subTitulo, styles.cor, styles.font, styles.margin]}>Forma de pagamento</Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={formaPagamento}
              onChange={(nextValue) => {
                setFormaPagamento(nextValue);
              }}
              display="flex" flexDirection="row" 
              
            >
              <Flex direction="row" w={300} justify="around">
                <Flex style={[styles.margin, styles.backgroundCard]} direction="row" >
                  <Radio value="1" my={1}/>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}>  Credito</Text>
                </Flex>
                <Flex style={[styles.margin, styles.backgroundCard]} direction="row" >
                  <Radio value="2" my={1}/>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>  Debito</Text>
                </Flex>
              </Flex>
            </Radio.Group>

          </NativeBaseProvider>

          <Button
            tintColor="#fff"
            style={[styles.button, styles.font]}
            onPress={() => navigation.navigate('Sucesso', {page: 'Map', mensagem: "Voltar"})}
            title="Confirmar pagamento"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
