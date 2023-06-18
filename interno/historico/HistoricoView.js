import { Text, View, ScrollView, ImageBackground } from "react-native";
import { Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./historicoStyles.js";
import HistoricoViewModel from "./historicoViewModel";
import { HStack, NativeBaseProvider, Spinner } from "native-base";

export default function HistoricoView({ navigation, route }) {
  const { loading, historico } = HistoricoViewModel(route);

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
            <Text Text style={[styles.titulo, styles.font]}>
              Histórico de estacionamento
            </Text>
          </View>

          {loading ? (
            <>
              {historico.map((h, k) => {
                return (
                  <Flex key={k} style={styles.cabecalho1} center>
                    <Flex direction="row" center h={50}>
                      <IconComponentProvider
                        IconComponent={MaterialCommunityIcons}
                      >
                        <Icon name="map-marker" size={24} color="#263238" />
                      </IconComponentProvider>
                      <Text style={styles.font}>
                        {h.vaga.logradouro}, {h.vaga.bairro}
                      </Text>
                    </Flex>
                    <Flex
                      style={styles.cabecalho2}
                      w={300}
                      center
                      direction="row"
                    >
                      <Flex center w={100}>
                        <IconComponentProvider
                          IconComponent={MaterialCommunityIcons}
                        >
                          <Icon name="calendar" size={24} color="#263238" />
                        </IconComponentProvider>
                        <Text
                          style={[styles.subTitulo, styles.cor, styles.font]}
                        >
                          {h.entrada}
                        </Text>
                      </Flex>

                      <Flex center w={100}>
                        <IconComponentProvider
                          IconComponent={MaterialCommunityIcons}
                        >
                          <Icon name="clock" size={24} color="#263238" />
                        </IconComponentProvider>
                        <Text
                          style={[styles.subTitulo, styles.cor, styles.font]}
                        >
                          {h.vaga.tempoUso}:00:00
                        </Text>
                      </Flex>

                      <Flex center w={100}>
                        <IconComponentProvider
                          IconComponent={MaterialCommunityIcons}
                        >
                          <Icon name="cash" size={24} color="#263238" />
                        </IconComponentProvider>
                        <Text
                          style={[styles.subTitulo, styles.cor, styles.font]}
                        >
                          R$ {h.ticketUsado}0,00
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                );
              })}
            </>
          ) : (
            <NativeBaseProvider>
              <HStack space={8} justifyContent="center" alignItems="center">
                <Spinner size="lg" color="emerald.500" />
              </HStack>
            </NativeBaseProvider>
          )}
          
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
