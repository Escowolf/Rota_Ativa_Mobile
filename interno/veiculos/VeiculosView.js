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
import VeiculosViewModel from "./veiculosViewModel";
import styles from "./veiculosStyles.js";
import { useState } from "react";
import { HStack, NativeBaseProvider, Spinner } from "native-base";

export default function VeiculosView({ navigation, route }) {
  const [visible1, setVisible1] = useState();

  const {
    loading,
    veiculos,
    veiculo,
    setVeiculo,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit,
    getValues,
  } = VeiculosViewModel(route);

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
              Veiculos Cadastrados
              <Image source={require("../../assets/car.png")} />
            </Text>
          </View>

          {loading ? (
            <>
              {veiculos.map((x, k) => {
                return (
                  <Pressable
                    key={k}
                    style={{
                      width: 300,
                      height: 200,
                      backgroundColor: "#fff",
                      marginBottom: 20,
                      borderRadius: 10,
                    }}
                    onPress={() => {
                        setVeiculo(x);
                        setVisible1(true);
                        setValue("placa", x.placa);
                        setValue("modelo", x.modelo);
                        setValue("cor", x.cor);
                    }}
                  >
                    <Stack fill center spacing={4}>
                      <Flex direction="row" w={230}>
                        <Text style={[styles.titulo, styles.cor, styles.font]}>
                          Placa
                        </Text>
                        <Button
                          style={{
                            width: 140,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#bbb",
                          }}
                          title={x.placa}
                          disabled
                        />
                      </Flex>
                      <Flex direction="row" w={230}>
                        <Text style={[styles.titulo, styles.cor, styles.font]}>
                          Modelo
                        </Text>
                        <Button
                          style={{
                            width: 140,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#bbb",
                          }}
                          title={x.modelo}
                          disabled
                        />
                      </Flex>
                      <Flex direction="row" w={230}>
                        <Text style={[styles.titulo, styles.cor, styles.font]}>
                          Cor
                        </Text>
                        <Button
                          style={{
                            width: 140,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#bbb",
                          }}
                          title={x.cor}
                          disabled
                        />
                      </Flex>
                    </Stack>
                  </Pressable>
                );
              })}

              <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <DialogHeader title="Novo Veiculo" />
                <DialogContent>
                  <Stack spacing={1}>
                    <TextInput
                      placeholder={"Placa"}
                      onChangeText={(text) => setValue("placa", text)}
                      variant="standard"
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <TextInput
                      placeholder={"Modelo"}
                      onChangeText={(text) => setValue("modelo", text)}
                      variant="standard"
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <TextInput
                      placeholder={"Cor"}
                      onChangeText={(text) => setValue("cor", text)}
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
                    title="Salvar"
                    compact
                    variant="text"
                    onPress={handleSubmit(onSubmit)}
                  />
                </DialogActions>
              </Dialog>

              <Dialog visible={visible1} onDismiss={() => setVisible1(false)}>
                <DialogHeader title="Editar" />
                <DialogContent>
                  <Stack spacing={1}>
                    <TextInput
                      placeholder={getValues("placa")}
                      onChangeText={(text) =>
                        text != null
                          ? setValue("placa", text)
                          : getValues("placa")
                      }
                      variant="standard"
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <TextInput
                      placeholder={getValues("modelo")}
                      onChangeText={(text) =>
                        text != null
                          ? setValue("modelo", text)
                          : getValues("modelo")
                      }
                      variant="standard"
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <TextInput
                      placeholder={getValues("cor")}
                      onChangeText={(text) =>
                        text != null ? setValue("cor", text) : getValues("cor")
                      }
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
                    title="Salvar"
                    compact
                    variant="text"
                    onPress={handleSubmit(onSubmit)}
                  />
                  <Button
                    title="Excluir"
                    compact
                    variant="text"
                    onPress={handleSubmit(onSubmit)}
                  />
                </DialogActions>
              </Dialog>
            </>
          ) : (
            <NativeBaseProvider>
              <HStack space={8} justifyContent="center" alignItems="center">
                <Spinner size="lg" color="emerald.500" />
              </HStack>
            </NativeBaseProvider>
          )}
        </ScrollView>

        <Button
          style={[styles.button, styles.font]}
          title="Adicionar veiculos"
          loadingIndicatorPosition="overlay"
          onPress={() => setVisible(true)}
        />
      </ImageBackground>
    </View>
  );
}
