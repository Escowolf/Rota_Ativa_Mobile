import { Text, View, ScrollView, ImageBackground } from "react-native";
import {
  Flex,
  Pressable,
  Button,
  Stack,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  IconComponentProvider,
  Icon,
} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./stylesPerfil";
import InicioViewModel from "./perfilViewModel.js";

export default function PerfilView({ navigation }) {


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
              Configuração
            </Text>
          </View>

        <Button
        style={[styles.buttonCommon, styles.font]}
        title="Editar Perfil"
        loadingIndicatorPosition="overlay"
        onPress={() => navigation.navigate("EditarPerfilView")}
        />
         
        <Button
          style={[styles.buttonCommon, styles.font]}
          title="Veiculos"
          loadingIndicatorPosition="overlay"
          onPress={() => navigation.navigate("VeiculosView")}
        />

        <Button
          style={[styles.buttonCommon, styles.font]}
          title="Historico"
          loadingIndicatorPosition="overlay"
          onPress={() => navigation.navigate("HistoricoView")}
        />

        <Button
          style={[styles.buttonCommon, styles.font]}
          title="Pagamento"
          loadingIndicatorPosition="overlay"
          onPress={() => navigation.navigate("PagamentoView")}
        />

        <Button
        style={[styles.buttonCommon, styles.font]}
        title="Suporte"
        loadingIndicatorPosition="overlay"
        onPress={() => navigation.navigate("SuporteView")}
        />

        </ScrollView>

      </ImageBackground>
    </View>
  );
}
