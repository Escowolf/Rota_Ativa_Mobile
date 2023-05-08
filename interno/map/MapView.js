import { SafeAreaView, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import dados from "../../dados/areas.json";
import { Button, Card, IconButton, List } from "react-native-paper";
import MapViewModel from "./MapViewModel";
import styles from './stylesMap.js'

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
    userLocation,
    endereco,
    setEndereco
  } = MapViewModel();

  function novaRota(){
    userLocation();
  }
  
  function rota(destino, vaga) {
    setEndereco(`${vaga.rua_avenida} - ${vaga.Bairro}`)
    setDestino(destino.coordinate);
    setCard(true);
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
            title={endereco}
            description="Regra vaga ...."
            left={() => <IconButton icon="car" size={30} />}
            right={() => 
                    <View>
                      <Button onPress={() => novaRota()}>
                        Rota
                      </Button>
                      <Button  onPress={() => navigation.navigate('EstacionarView', {vaga:endereco })} 
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
        coordinate={x.path[0]}
        onPress={(e) => rota(e.nativeEvent, x)}
      />
    ));
  }

  function renderAreas() {
    return dados.map((d, x) => {
      return (
        <Polyline
          key={x}
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
