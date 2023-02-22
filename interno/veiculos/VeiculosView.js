import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
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
import VeiculosViewModel from "./VeiculosViewModel";

export default function VeiculosView({ navigation }) {
  const {
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit,
    isLoading,
    setIsLoading
  } = VeiculosViewModel();

  return (
    <ScrollView style={styles.con}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo1, styles.cor]}>
            Veiculos Cadastrados
          </Text>
        </View>

        <Pressable
          style={{ width: 300, height: 300, backgroundColor: "#F2E7DC", marginBottom: 20 }}
          onPress={() => setVisible(true)}
        >
          <Stack fill center spacing={3}>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Placa</Text>
              <Button title="Placa" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Renavan</Text>
              <Button title="Renavan" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Ano</Text>
              <Button title="Ano" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Cor</Text>
              <Button title="Cor" disabled />
            </Flex>
          </Stack>
        </Pressable>

        <Pressable
          style={{ width: 300, height: 300, backgroundColor: "#F2E7DC", marginBottom: 20 }}
          onPress={() => setVisible(true)}
        >
          <Stack fill center spacing={3}>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Placa</Text>
              <Button title="Placa" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Renavan</Text>
              <Button title="Renavan" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Ano</Text>
              <Button title="Ano" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>Cor</Text>
              <Button title="Cor" disabled />
            </Flex>
          </Stack>
        </Pressable>

        <Button
          title="Adicionar veiculos"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          onPress={() => setVisible(true)}
        />

        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <DialogHeader title="Dialog Header" />
          <DialogContent>
            <Stack spacing={1}>
              <TextInput placeholder={"Placa"} onChangeText={(text) => setValue("placa", text)}  variant="standard" />
            </Stack>
            <Stack spacing={1}>
              <TextInput placeholder={"Renavan"} onChangeText={(text) => setValue("renavan", text)}  variant="standard" />
            </Stack>
            <Stack spacing={1}>
              <TextInput placeholder={"Ano"} onChangeText={(text) => setValue("ano", text)} variant="standard" />
            </Stack>
            <Stack spacing={1}>
              <TextInput placeholder={"Cor"} onChangeText={(text) => setValue("cor", text)} variant="standard" />
            </Stack>
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
              onPress={handleSubmit(onSubmit)}
            />
          </DialogActions>
        </Dialog>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 100,
  },
  cabecalho: {
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
  },
  cabecalho1: {
    backgroundColor: "#F2E7DC",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cabecalho2: {
    marginTop: 10,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 25,
    width: 120,
  },
  titulo1: {
    fontSize: 25,
  },
  cor: {
    color: "#027373",
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },
});
