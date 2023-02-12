import { StyleSheet, Text, View} from "react-native";
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

export default function Localizacao({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 100,
  },
  cabecalho: {
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
  },
  cabecalho1: {
    backgroundColor: "#F2E7DC",
    borderRadius: 10,
    padding: 10,
  },
  cabecalho2: {
    marginTop: 10,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 25,
  },
  cor: {
    color: "#027373",
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
