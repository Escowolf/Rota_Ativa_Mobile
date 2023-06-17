import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import { NativeBaseProvider } from "native-base";
import { Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AcompanharViewModel from "./acompanharViewModel";
import styles from './acompanharStyles'

export default function AcompanharView({ navigation }) {
  const { setValue, handleSubmit, onSubmit } = AcompanharViewModel();

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require("../../assets/backgroundImage.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={styles.cabecalho}>
            <Text style={[styles.titulo, styles.cor, styles.font]}>
              Acompanhe seu veiculo
            </Text>
          </View>
          <NativeBaseProvider>
            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="car" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Veiculo</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>RXJ5248</Text>
                </Flex>
            </Flex>

            
            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="map-marker" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Local</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>Rua x, Aldeota</Text>
                </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="clock" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Tempo restante</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>01:00:00</Text>
                </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="cash" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor, styles.font]}> Custo</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo, styles.font]}>R$ 20,00</Text>
                </Flex>
            </Flex>
            

          </NativeBaseProvider>

        <Button 
          tintColor="#fff" 
          style={[styles.button, styles.sair, styles.font]} 
          onPress={() => navigation.navigate('Sucesso', {page: "PagamentoView", mensagem: "Tudo OK", button:"Voltar"})} 
          title="Sair da vaga"
        />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
