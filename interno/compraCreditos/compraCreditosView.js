import { Text, View, ScrollView, ImageBackground, Image } from "react-native";
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
import styles from "./stylesCompraCreditos.js";
import CompraCreditosViewModel from "./compraCreditosViewModel.js";

export default function CompraCreditosView({ navigation }) {
  const {
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit,
    isLoading,
    setIsLoading,
  } = CompraCreditosViewModel();

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
            <Pressable
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => setVisible(true)}
            >
              <Stack fill center spacing={4}>
                <Flex direction="row" w={300} center>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    R$ 2,00
                  </Text>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    1 Cartão
                  </Text>
                </Flex>
              </Stack>
            </Pressable>

            <Pressable
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => setVisible(true)}
            >
              <Stack fill center spacing={4}>
                <Flex direction="row" w={230} center>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    R$ 4,00
                  </Text>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    2 Cartão
                  </Text>
                </Flex>
              </Stack>
            </Pressable>

            <Pressable
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => setVisible(true)}
            >
              <Stack fill center spacing={4}>
                <Flex direction="row" w={230} center>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    R$ 10,00
                  </Text>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    5 Cartão
                  </Text>
                </Flex>
              </Stack>
            </Pressable>

            <Pressable
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => setVisible(true)}
            >
              <Stack fill center spacing={4}>
                <Flex direction="row" w={230} center>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    R$ 4,00
                  </Text>
                  <Text style={[styles.titulo, styles.cor, styles.font]}>
                    2 Cartão
                  </Text>
                </Flex>
              </Stack>
            </Pressable>

            <Pressable
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => navigation.navigate('AcompanharView', {name: 'Jane'})}
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
              <Text>Comprar 1 cartão?</Text>
              <Text>Valor: R$ 2,00</Text>
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
                onPress={() => navigation.navigate('ConfirmarCompraView', {name: 'Jane'})}
              />
            </DialogActions>
          </Dialog>
        </ScrollView>

        <Button
          style={[styles.button, styles.font]}
          title="Suporte"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          onPress={() => navigation.navigate('SuporteView', {name: 'Jane'})}
        />
      </ImageBackground>
    </View>
  );
}
