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
import styles from './stylesSuporte.js'
import SuporteViewModel from "./suporteViewModel.js";
  
  export default function SuporteView({ navigation }) {
  
  
    const {
      setValue,
      handleSubmit,
      visible,
      setVisible,
      onSubmit,
      isLoading,
      setIsLoading,
    } = SuporteViewModel();
  
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
  
            <Flex style={{
									width: 400,
									backgroundColor: "#1CA9A9",
									borderRadius: 10,
									paddingBottom:20,
								}}
								center
								>

              <Pressable
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#146464",
                  marginTop: 20,
                  borderRadius: 10,
                }}
                onPress={() => setVisible(true)}
              >
                <Stack fill center spacing={1}>
                  <Flex direction="row" w={230} center>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Como comprar credito ? </Text>
                  </Flex>
                </Stack>
              </Pressable>

              <Pressable
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#146464",
                  marginTop: 20,
                  borderRadius: 10,
                }}
                onPress={() => setVisible(true)}
              >
                <Stack fill center spacing={1}>
                  <Flex direction="row" w={230} center>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Como comprar credito ? </Text>
                  </Flex>
                </Stack>
              </Pressable>

              <Pressable
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#146464",
                  marginTop: 20,
                  borderRadius: 10,
                }}
                onPress={() => setVisible(true)}
              >
                <Stack fill center spacing={1}>
                  <Flex direction="row" w={230} center>
                    <Text style={[styles.titulo, styles.cor, styles.font]}>Como comprar credito ? </Text>
                  </Flex>
                </Stack>
              </Pressable>
    
            </Flex>
  
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
              <DialogHeader title="Pergunta 1" />
              <DialogContent>
              <Text style={[styles.perguntaTitulo]}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                  eligendi inventore?
              </Text>
              <Text  style={[styles.perguntaResposta]}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                  eligendi inventore, laboriosam laudantium minima minus nesciunt
                  pariatur sequi.
              </Text>
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
  