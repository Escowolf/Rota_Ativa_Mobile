import { Text, View, ScrollView, ImageBackground } from "react-native";
import {
  Flex,
  Pressable,
  Button,
  Stack,
  IconComponentProvider,
  Icon,
} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./inicioStyles.js";
import InicioViewModel from "./inicioViewModel.js";
import { HStack, NativeBaseProvider, Spinner } from "native-base";

export default function InicioView({ navigation, route }) {
  const {
    loading,
    historico,
    user
  } = InicioViewModel(route);

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

        { loading ?
          <>
          <View style={styles.cabecalho}>
            <Text Text style={[styles.titulo1]}>
              Olá  {user != undefined ? user.nome : ""}
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

            <Text Text style={[styles.titulo1]}>
              Ultimos lugares estacionados
            </Text>
              

            {historico.map((h, k) => {
              return (
                <Flex key={k} style={styles.cabecalho1} center>
                  <Flex direction="row"  center h={50}>
                    <IconComponentProvider
                      IconComponent={MaterialCommunityIcons}
                    >
                      <Icon name="map-marker" size={24} color="#fff" />
                    </IconComponentProvider>
                    <Text style={[styles.font, styles.cor]}>
                      {h.vaga.logradouro}, {h.vaga.bairro}
                    </Text>
                  </Flex>
                </Flex>
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
              onPress={() => navigation.navigate('HistoricoView', {user: user})}
            >
              <Stack fill center spacing={4}>
                <Flex direction="row" w={500} center>
                  <Text style={[styles.titulo, styles.cor]}>
                    Mostrar historico
                  </Text>
                </Flex>
              </Stack>
            </Pressable>
          </Flex>

          <Button
          style={[styles.buttonCommon]}
          title="Veiculos"
          loadingIndicatorPosition="overlay"
          onPress={() => navigation.navigate("VeiculosView", { user: user })}
        />
          </>
          :
          (
            <NativeBaseProvider>
              <HStack  style={styles.cabecalho} space={15} justifyContent="center" alignItems="center">
                <Spinner size="lg" color="emerald.500"  />
              </HStack>
            </NativeBaseProvider>
          )
        }

          

        </ScrollView>

        <Button
          style={[styles.button]}
          title="Suporte"
          loadingIndicatorPosition="overlay"
          onPress={() => navigation.navigate("SuporteView")}
        />
      </ImageBackground>
    </View>
  );
}
