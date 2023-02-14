import { SafeAreaView, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps";
import { useState } from "react";
import MapViewDirections from 'react-native-maps-directions';

export default function Map({ navigation }) {
  const [regiao, setRegiao]= useState({
    latitude:-3.731862,
    longitude:-38.526669,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const origin = {latitude: -3.731862, longitude: -38.526669};
  const destination = {latitude: -3.767522, longitude: -38.481988};
  // const GOOGLE_MAPS_APIKEY = 'AIzaSyDBscTlHcyJ
  // 5FTZ5Dlw7-ojc3LPhFfbAuY';


  return (
    <SafeAreaView style={styles.container}>
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
        <MapViewDirections
          strokeWidth={3}
          strokeColor="#027373"
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
