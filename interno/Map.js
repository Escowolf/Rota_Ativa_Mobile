import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, FAB, Flex, Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {PROVIDER_GOOGLE} from "react-native-maps";
import MapView, {Marker} from "react-native-maps";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";

export default function Map({ navigation }) {
  const [regiao, setRegiao]= useState({
    latitude:-3.731862,
    longitude:-38.526669,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const userLocation = async()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      setRegiao({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      });
  }

  useEffect(() => {
    // userLocation();
  }, [])

  return (
    <View style={styles.container}>
      <MapView region={regiao} style={styles.map}>

        <Marker coordinate={regiao} title='Marker'/>
      </MapView>
      <View
        style={{
            position: 'absolute',//use absolute position to show button on top of the map
            top: '90%',
            left: '30%',   //for center align
            alignSelf: 'flex-end' //for align to right
        }}
    >
       <Button title='Sua localização' onPress={userLocation}/>
    </View>
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
