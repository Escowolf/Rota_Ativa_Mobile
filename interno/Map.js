import { StyleSheet, View} from "react-native";
import { Button } from "@react-native-material/core";
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
      <MapView 
        region={regiao} 
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker 
          coordinate={regiao} 
          title='Principal'
          description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawwwwwwwwbn"
          image={require('../assets/gps.png')}
        />
      </MapView>
      <View style={styles.button}>
        <Button title='Sua localização' onPress={userLocation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: 'absolute',
    top: '90%',
    left: '30%', 
    alignSelf: 'flex-end' 
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
