import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Flex,
  Icon,
  IconComponentProvider,
  Pressable,
  Button,
  Stack,
} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TextField from "../components/TextField";

export default function Historico({ navigation }) {
  return (
    <ScrollView style={styles.con}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text Text style={[styles.titulo, styles.cor]}>
            Histórico de estacionamento
          </Text>
        </View>
        <Flex style={styles.cabecalho1} center>
          <Flex direction="row" center h={50}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="map-marker" size={24} color="#263238" />
            </IconComponentProvider>
            <Text>Floriano Peixoto, 123 - Centro</Text>
          </Flex>
          <Flex style={styles.cabecalho2} w={300} center direction="row">
            <Flex center w={100}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon name="calendar" size={24} color="#263238" />
              </IconComponentProvider>
              <Text style={[styles.subTitulo, styles.cor]}>02/05/2022</Text>
            </Flex>

            <Flex center w={100}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon name="clock" size={24} color="#263238" />
              </IconComponentProvider>
              <Text style={[styles.subTitulo, styles.cor]}>02:00:00</Text>
            </Flex>

            <Flex center w={100}>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon name="cash" size={24} color="#263238" />
              </IconComponentProvider>
              <Text style={[styles.subTitulo, styles.cor]}>R$ 4,00</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex style={styles.cabecalho1} center>
          <Flex center>
            <TextField
              placeholder={"Placa"}
              onChangeText={(text) => setValue("nome", text)}
              icon={"car"}
            />
            <TextField
              placeholder={"Renavan"}
              onChangeText={(text) => setValue("nome", text)}
              icon={"car"}
            />

            <TextField
              placeholder={"Ano"}
              onChangeText={(text) => setValue("nome", text)}
              icon={"car"}
            />

            <TextField
              placeholder={"Cor"}
              onChangeText={(text) => setValue("nome", text)}
              icon={"car"}
            />
          </Flex>
        </Flex>

        <Pressable
          style={{ width: 300, height: 300, backgroundColor: "#F2E7DC" }}
        >
          <Stack fill center spacing={3}>
            <Flex direction="row" w={200} >
              <Text style={[styles.titulo, styles.cor]}>
                Placa
              </Text>
              <Button title="Placa" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>
              Renavan
              </Text>
              <Button title="Renavan" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>
              Ano
              </Text>
              <Button title="Ano" disabled />
            </Flex>
            <Flex direction="row" w={200}>
              <Text style={[styles.titulo, styles.cor]}>
              Cor
              </Text>
              <Button title="Cor" disabled />
            </Flex>
          </Stack>
        </Pressable>
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
  },
  cor: {
    color: "#027373",
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },
});
