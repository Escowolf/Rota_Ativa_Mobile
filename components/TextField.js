import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function TextField({ label, icon, ...inputProps }) {

  let [fontLoaded] = useFonts({
    'Poppins-Regular' : require('../fonts/Poppins/Poppins-Regular.ttf')
  })


  if(!fontLoaded){
    return(<AppLoading/>)
  }

  return (
    <View style={styles.textField}>
      <Text style={[styles.text, styles.font]}>{label}</Text>
      <TextInput
        leading={(props) => <Icon name={icon} {...props} />}
        style={styles.textInput}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    width: 300,
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 17
  },
  font:{
    fontFamily: 'Poppins-Regular'
  }
});
