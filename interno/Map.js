import { SafeAreaView, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps";
import { useState } from "react";
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import dados from "./dados.json";

export default function Map({ navigation }) {
  const [regiao, setRegiao]= useState({
    latitude:-3.731862,
    longitude:-38.526669,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();

  const userLocation = async()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      setOrigem({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

  }

  function rota(destino){
    userLocation();
    setDestino(destino.coordinate);
  }

  //const GOOGLE_MAPS_APIKEY = 'AIzaSyDBscTlHcyJ5FTZ
  //5Dlw7-ojc3LPhFfbAuY';

  function renderMarkers() {
    return dados.map((x, i) => (
      <Marker
        key={i}
        coordinate={{
          latitude: x.latitude,
          longitude: x.longitude 
        }}
        onPress={e => rota(e.nativeEvent)}
      />
    ));
  }

  function renderAreas() {
    return dados2.map((d) => {
      return (
        <Polyline coordinates={d.path} strokeColor="#027373" strokeWeight={10} />
      );
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        region={regiao}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {renderMarkers()}
        {renderAreas()}
        <MapViewDirections
          strokeWidth={3}
          strokeColor="#027373"
          origin={origem}
          destination={destino}
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
