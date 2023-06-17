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
} from "@react-native-material/core";
import styles from "./suporteStyles.js";
import SuporteViewModel from "./suporteViewModel.js";
import duvidas from "../../dados/duvidas.json";

export default function SuporteView({ navigation, route }) {

  const {pergunta, setPergunta, visible, setVisible } = SuporteViewModel();

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
              Qual sua duvida?
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
            {duvidas.map((x, y) => {
              return (
                <Pressable
                  key={y}
                  style={{
                    width: 300,
                    height: 50,
                    backgroundColor: "#146464",
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    setPergunta(x), setVisible(true);
                  }}
                >
                  <Stack fill center spacing={1}>
                    <Flex direction="row" w={230} center>
                      <Text style={[styles.titulo, styles.cor, styles.font]}>
                        {x.pergunta}
                      </Text>
                    </Flex>
                  </Stack>
                </Pressable>
              );
            })}
          </Flex>

          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <DialogHeader />
            <DialogContent>
              <Text style={[styles.perguntaTitulo]}>{pergunta.pergunta}</Text>
              <Text style={[styles.perguntaResposta]}>{pergunta.resposta}</Text>
            </DialogContent>
            <DialogActions>
              <Button
                title="Ok"
                compact
                variant="text"
                onPress={() => setVisible(false)}
              />
            </DialogActions>
          </Dialog>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
