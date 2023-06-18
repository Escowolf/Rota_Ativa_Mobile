import { Text, View, ScrollView, ImageBackground } from "react-native";
import {
  Flex,
  Pressable,
  Button,
  Stack,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  TextInput,
} from "@react-native-material/core";
import styles from "./compraCreditosStyles.js";
import CompraCreditosViewModel from "./compraCreditosViewModel.js";
import creditos from "../../dados/creditos.json";

export default function CompraCreditosView({ navigation, route }) {
  const {
    ticket,
    setTicket,
    visibleCodigo,
    setVisibleCodigo,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit,
  } = CompraCreditosViewModel(navigation);

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
            <Text Text style={[styles.titulo1, styles.font]}>
              Comprar Créditos: (CADs)
            </Text>
          </View>

          <Flex
            style={{
              width: 400,
              backgroundColor: "#1CA9A9",
              borderRadius: 10,
              paddingBottom: 20,
            }}
            center
          >
            {creditos.map((x, y) => {
              return (
                <Pressable
                  key={y}
                  style={{
                    width: 300,
                    height: 50,
                    backgroundColor: "#146464",
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    setVisible(true);
                    setTicket(x);
                  }}
                >
                  <Stack fill center spacing={4}>
                    <Flex direction="row" w={300} center>
                      <Text style={[styles.titulo, styles.cor, styles.font]}>
                        R$ {x.preco},00
                      </Text>
                      <Text style={[styles.titulo, styles.cor, styles.font]}>
                        {x.cartao} Cartão
                      </Text>
                    </Flex>
                  </Stack>
                </Pressable>
              );
            })}

            <Pressable
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => setVisibleCodigo(true)}
            >
              <Stack fill center spacing={4}>
                <Flex direction="row" w={230} center>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    Resgatar Código
                  </Text>
                </Flex>
              </Stack>
            </Pressable>
          </Flex>

          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <DialogHeader title="Comprar Cartão" />
            <DialogContent>
              <Text>Comprar {ticket.cartao} cartão?</Text>
              <Text>Valor: R$ {ticket.preco},00</Text>
            </DialogContent>
            <DialogActions>
              <Button
                title="Cancel"
                compact
                variant="text"
                onPress={() => setVisible(false)}
              />
              <Button
                title="Ok"
                compact
                variant="text"
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("ConfirmarCompraView", {
                    user: route.params.user,
                  });
                }}
              />
            </DialogActions>
          </Dialog>

          <Dialog
            visible={visibleCodigo}
            onDismiss={() => setVisibleCodigo(false)}
          >
            <DialogHeader title="Resgatar Codigo" />
            <DialogContent>
              <Stack spacing={1}>
                <TextInput
                  placeholder="Informe o codigo"
                  onChangeText={(text) => setValue("codigo", text)}
                  variant="standard"
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button
                title="Cancelar"
                compact
                variant="text"
                onPress={() => setVisible(false)}
              />
              <Button
                title="Enviar"
                compact
                variant="text"
                onPress={handleSubmit(onSubmit)}
              />
            </DialogActions>
          </Dialog>
        </ScrollView>

        <Button
          style={[styles.button, styles.font]}
          title="Suporte"
          loadingIndicatorPosition="overlay"
          onPress={() =>
            navigation.navigate("SuporteView", { user: route.params.user })
          }
        />
      </ImageBackground>
    </View>
  );
}
