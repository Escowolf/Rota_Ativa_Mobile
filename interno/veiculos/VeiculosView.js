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
    <ScrollView contentContainerStyle={styles.con}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.container}
      >
        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo1, styles.cor]}>
            Veiculos Cadastrados
          </Text>
        </View>

        <Pressable
          style={{ width: 300, height: 200, backgroundColor: "#BBBBBB", marginBottom: 20, borderRadius: 10 }}
          onPress={() => setVisible(true)}
        >
          <Stack fill center spacing={4}>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Placa</Text>
              <Button style={{width: 140}} title="AXE7531" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Renavam</Text>
              <Button style={{width: 140}} title="95476219843" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Ano</Text>
              <Button style={{width: 140}} title="2014" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Cor</Text>
              <Button style={{width: 140}} title="Vermelho" disabled />
            </Flex>
          </Stack>
        </Pressable>
      
        <Pressable
          style={{ width: 300, height: 200, backgroundColor: "#BBBBBB", marginBottom: 20, borderRadius: 10 }}
          onPress={() => setVisible(true)}
        >
          <Stack fill center spacing={4}>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Placa</Text>
              <Button style={{width: 140}} title="AXE7531" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Renavam</Text>
              <Button style={{width: 140}} title="95476219843" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Ano</Text>
              <Button style={{width: 140}} title="2014" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Cor</Text>
              <Button style={{width: 140}} title="Vermelho" disabled />
            </Flex>
          </Stack>
        </Pressable>

        <Pressable
          style={{ width: 300, height: 200, backgroundColor: "#BBBBBB", marginBottom: 20, borderRadius: 10 }}
          onPress={() => setVisible(true)}
        >
          <Stack fill center spacing={4}>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Placa</Text>
              <Button style={{width: 140}} title="AXE7531" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Renavam</Text>
              <Button style={{width: 140}} title="95476219843" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Ano</Text>
              <Button style={{width: 140}} title="2014" disabled />
            </Flex>
            <Flex direction="row" w={230}>
              <Text style={[styles.titulo, styles.cor]}>Cor</Text>
              <Button style={{width: 140}} title="Vermelho" disabled />
            </Flex>
          </Stack>
        </Pressable>

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
      </ScrollView>
      <Button
          style={styles.button}
          title="Adicionar veiculos"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          onPress={() => setVisible(true)}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: 'center'
  },
  container: {
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
    fontSize: 22,
    width: 100,
  },
  titulo1: {
    fontSize: 25,
  },
  cor: {
    color: "#212121",
  },
  button: {
    backgroundColor: "#1CA9A9",
    width: 300,
    position:"absolute",
    bottom: 20
  },
});
