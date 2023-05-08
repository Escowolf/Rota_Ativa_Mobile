import {
  Text,
  View,
  ScrollView,
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
import styles from './stylesVeiculos.js'
import pessoa from "../../dados/pessoas.json";

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

          {
            pessoa[0].veiculos.map((x, k) =>{
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
                onPress={() => setVisible(true)}
              >
                <Stack fill center spacing={4}>
                  <Flex direction="row" w={230}>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Placa</Text>
                    <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title={x.placa} disabled />
                  </Flex>
                  <Flex direction="row" w={230}>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Renavam</Text>
                    <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title={x.renavan} disabled />
                  </Flex>
                  <Flex direction="row" w={230}>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Ano</Text>
                    <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title={x.ano} disabled />
                  </Flex>
                  <Flex direction="row" w={230}>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Cor</Text>
                    <Button style={{ width: 140, backgroundColor:"#fff", borderWidth:1, borderColor:"#bbb" }} title={x.cor} disabled />
                  </Flex>
                </Stack>
              </Pressable>
    
              )
            })
          }

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
