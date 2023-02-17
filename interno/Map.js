import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import dados from "../dados/pontos.json";
import dados2 from "../dados/areas.json";
import { Button, Card, IconButton, List } from "react-native-paper";
import { set } from "react-hook-form";

export default function Map({ navigation }) {
  const [regiao, setRegiao] = useState({
    latitude: -3.731862,
    longitude: -38.526669,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();
  const [card, setCard] = useState(false);
  const [styleMap, setStyleMap] = useState({
    width: "100%",
    height: "100%",
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setOrigem({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  function novaRota(){
    userLocation();
  }
  
  function rota(destino) {
    setCard(true);
    setDestino(destino.coordinate);
    setStyleMap({
      width: "100%",
      height: "80%",
    })
  }

  //const GOOGLE_MAPS_APIKEY = "AIzaSyDBscTlHcyJ5F
  //TZ5Dlw7-ojc3LPhFfbAuY";

  function renderMarkers() {
    return dados.map((x, i) => (
      <Marker
        image={require("../assets/gps.png")}
        key={i}
        coordinate={{
          latitude: x.latitude,
          longitude: x.longitude,
        }}
        onPress={(e) => rota(e.nativeEvent)}
      />
    ));
  }

  function renderAreas() {
    return dados2.map((d) => {
      return (
        <Polyline
          coordinates={d.path}
          strokeColor="#027373"
          strokeWeight={10}
        />
      );
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        region={regiao}
        style={styleMap}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onPress={(e) => {
          if (e.nativeEvent.action !== 'marker-press') {
            setOrigem(null);
            setCard(false);
            // pressed a marker
            setStyleMap({
              width: "100%",
              height: "100%",
            })
          } else {
            
          }
        }}
      >
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
      {
        card ?
                <Card style={{
                  height:"20%"
                }}>
                  <Card.Content>
                    <List.Item
                      title="Vaga 1"
                      description="Regra vaga ...."
                      left={() => <IconButton icon="car" size={30} />}
                      right={() => 
                              <View>
                                <Button onPress={() => novaRota()}>Rota</Button>
                                <Button mode="contained">Estacionar</Button>
                              </View>
                      }
                    />
                  </Card.Content>
                </Card>
              : 
                null
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  map: {
    width: "100%",
    height: "80%",
  },
});
