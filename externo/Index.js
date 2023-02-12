import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";

export default function Index({ navigation }) {
  return (
      <View style={styles.container}>

        <Image style={styles.image} source={require('../assets/logo.png')}/>

        <Button 
          tintColor="#535353" 
          style={styles.button} 
          onPress={() =>
            navigation.navigate('Login')
          } 
          title="Entrar"
        />

        <Button 
          tintColor="#535353" 
          style={styles.button} 
          onPress={() =>
            navigation.navigate('Cadastro')
          } 
          title="Cadastrar"
        />
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#027373",
    alignItems: "center",
    justifyContent: "center"
  },
  image:{
    margin:100
  },
  button:{
    backgroundColor: '#A9D9D0',
    marginBottom:10
  }
});
