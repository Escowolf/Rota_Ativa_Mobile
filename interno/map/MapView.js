import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import dados from "../../dados/pontos.json";
import dados2 from "../../dados/areas.json";
import { Button, Card, IconButton, List } from "react-native-paper";
import MapViewModel from "./MapViewModel";

export default function Map({ navigation }) {

  const {
    regiao, 
    origem, 
    setOrigem, 
    destino, 
    setDestino, 
    card, 
    setCard, 
    styleMap, 
    setStyleMap,
    userLocation
  } = MapViewModel();

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

  const GOOGLE_MAPS_APIKEY = "AIzaSyDBscTlHcyJ5FTZ5Dlw7-ojc3LPhFfbAuY";

  function closeCard(e){
    if (e.nativeEvent.action !== 'marker-press') {
      setOrigem(null);
      setCard(false);
      setStyleMap({
        width: "100%",
        height: "100%",
      })
    } else {
      
    }
  }

  function renderCard(){
    return (
      <Card style={{ height:"20%"}}>
        <Card.Content>
          <List.Item
            title="Vaga 1"
            description="Regra vaga ...."
            left={() => <IconButton icon="car" size={30} />}
            right={() => 
                    <View>
                      <Button onPress={() => novaRota()}>
                        Rota
                      </Button>
                      <Button  onPress={() => navigation.navigate('VeiculosView', {name: 'Jane'})} 
                               mode="contained"
                      >
                        Estacionar
                      </Button>
                    </View>
            }
          />
        </Card.Content>
      </Card>
    )
  }

  function renderMarkers() {
    return dados.map((x, i) => (
      <Marker
        image={require("../../assets/gps.png")}
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
        show
        onPress={(e) => closeCard(e)}
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
        card ? renderCard() : null
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
