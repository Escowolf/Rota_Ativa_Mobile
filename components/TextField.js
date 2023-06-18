import {  Text, View } from "react-native";
import { TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from './stylesComponents.js'

export default function TextField({ label, icon, ...inputProps }) {

  return (
    <View style={styles.textField}>
      <Text style={[styles.text]}>{label}</Text>
      <TextInput
        leading={(props) => <Icon name={icon} {...props} />}
        style={styles.textInput}
        {...inputProps}
      />
    </View>
  );
}
