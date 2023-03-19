import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
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
    setIsLoading,
  } = VeiculosViewModel();

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
              <Image source={require('../../assets/car.png')}/>
            </Text>
          </View>

          <Pressable
            style={{
              width: 300,
              height: 200,
              backgroundColor: "#fff",
              marginBottom: 20,
              borderRadius: 10,
            }}
            onPress={() => setVisible(true)}
          >
            <Stack fill center spacing={4}>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor, styles.font]}>Placa</Text>
                <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title="AXE7531" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor, styles.font]}>Renavam</Text>
                <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title="95476219843" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor, styles.font]}>Ano</Text>
                <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title="2014" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor, styles.font]}>Cor</Text>
                <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title="Vermelho" disabled />
              </Flex>
            </Stack>
          </Pressable>

          <Pressable
            style={{
              width: 300,
              height: 200,
              backgroundColor: "#BBBBBB",
              marginBottom: 20,
              borderRadius: 10,
            }}
            onPress={() => setVisible(true)}
          >
            <Stack fill center spacing={4}>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Placa</Text>
                <Button style={{ width: 140 }} title="AXE7531" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Renavam</Text>
                <Button style={{ width: 140 }} title="95476219843" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Ano</Text>
                <Button style={{ width: 140 }} title="2014" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Cor</Text>
                <Button style={{ width: 140 }} title="Vermelho" disabled />
              </Flex>
            </Stack>
          </Pressable>

          <Pressable
            style={{
              width: 300,
              height: 200,
              backgroundColor: "#BBBBBB",
              marginBottom: 20,
              borderRadius: 10,
            }}
            onPress={() => setVisible(true)}
          >
            <Stack fill center spacing={4}>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Placa</Text>
                <Button style={{ width: 140 }} title="AXE7531" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Renavam</Text>
                <Button style={{ width: 140 }} title="95476219843" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Ano</Text>
                <Button style={{ width: 140 }} title="2014" disabled />
              </Flex>
              <Flex direction="row" w={230}>
                <Text style={[styles.titulo, styles.cor]}>Cor</Text>
                <Button style={{ width: 140 }} title="Vermelho" disabled />
              </Flex>
            </Stack>
          </Pressable>

          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <DialogHeader title="Dialog Header" />
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
                  placeholder={"Renavan"}
                  onChangeText={(text) => setValue("renavan", text)}
                  variant="standard"
                />
              </Stack>
              <Stack spacing={1}>
                <TextInput
                  placeholder={"Ano"}
                  onChangeText={(text) => setValue("ano", text)}
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
            style={[styles.button, styles.font]}
            title="Adicionar veiculos"
            loading={isLoading}
            loadingIndicatorPosition="overlay"
            onPress={() => setVisible(true)}
          />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#027373",
    flex: 1,
  },
  container: {
    alignItems: "center",
  },
  background: {
    flex: 1,
    alignItems: 'center'
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
    fontSize: 18,
    width: 100,
  },
  cor: {
    color: "#333",
  },
  titulo1: {
    fontSize: 25,
    color: "#fff",
    height: 48,
  },
  button: {
    backgroundColor: "#1CA9A9",
    width: 300,
    position:"absolute",
    bottom: 20,
    alignSelf:"center"
  },
  font:{
    fontFamily: 'Poppins-Regular'
  }
});
