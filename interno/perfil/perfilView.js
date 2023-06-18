import { Text, View, ScrollView, ImageBackground } from "react-native";
import { Button } from "@react-native-material/core";
import styles from "./perfilStyles";
import PerfilViewModel from "./perfilViewModel";
import { HStack, NativeBaseProvider, Spinner } from "native-base";

export default function PerfilView({ navigation, route }) {
  const { user, loading } = PerfilViewModel(route);

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
            <Text Text style={[styles.titulo1]}>
              Configuração
            </Text>
          </View>

          {loading ? (
            <>
              <Button
                style={[styles.buttonCommon]}
                title="Editar Perfil"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("EditarPerfilView", { user: user })
                }
              />

              <Button
                style={[styles.buttonCommon]}
                title="Acompanhar veiculo"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("AcompanharView", { user: user })
                }
              />

              <Button
                style={[styles.buttonCommon]}
                title="Veiculos"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("VeiculosView", { user: user })
                }
              />

              <Button
                style={[styles.buttonCommon]}
                title="Historico"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("HistoricoView", { user: user })
                }
              />

              <Button
                style={[styles.buttonCommon]}
                title="Pagamento"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("PagamentoView", { user: user })
                }
              />

              <Button
                style={[styles.buttonCommon]}
                title="Suporte"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("SuporteView", { user: user })
                }
              />

              <Button
                style={[styles.buttonCommon2]}
                title="Sair"
                loadingIndicatorPosition="overlay"
                onPress={() =>
                  navigation.navigate("SuporteView", { user: user })
                }
              />
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
