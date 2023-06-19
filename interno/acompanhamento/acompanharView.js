import { Text, View, ImageBackground, ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Button, Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AcompanharViewModel from "./acompanharViewModel";
import styles from './acompanharStyles'

export default function AcompanharView({ navigation }) {
  const {     
    onSubmit,
    loading,
    setLoading 
  } = AcompanharViewModel(navigation);

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
            <Text style={[styles.titulo, styles.cor]}>
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
                  <Text style={[styles.subTitulo, styles.cor]}> Veiculo</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo]}>RXJ5248</Text>
                </Flex>
            </Flex>

            
            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="map-marker" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor]}> Local</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo]}>Rua x, Aldeota</Text>
                </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="clock" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor]}> Tempo restante</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo]}>01:00:00</Text>
                </Flex>
            </Flex>

            <Flex style={[styles.margin]} direction="column" h={50}>
              <Flex direction="row">
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                  <Icon name="cash" size={24} color="#fff" />
                </IconComponentProvider>
                <Flex>
                  <Text style={[styles.subTitulo, styles.cor]}> Custo</Text>
                </Flex>
              </Flex>
                <Flex>
                  <Text style={[styles.subTitulo, styles.corInfo]}>R$ 20,00</Text>
                </Flex>
            </Flex>
            

          </NativeBaseProvider>

        <Button 
          tintColor="#fff" 
          style={[styles.button, styles.sair]} 
          onPress={() => onSubmit({vaga, veiculo})} 
          title="Sair da vaga"
        />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
