import { SafeAreaView, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import dados from "../../dados/areas.json";
import { Button, Card, IconButton, List } from "react-native-paper";
import styles from "./mapAllStyles.js";
import MapAllViewModel from "./mapAllViewModel";

export default function MapAll({ navigation, route }) {
  const {
    vagas,
    vaga,
    setVaga,
    user,
    regiao,
    origem,
    setOrigem,
    destino,
    setDestino,
    card,
    setCard,
    regra,
    setRegra,
    styleMap,
    setStyleMap,
    userLocation,
    endereco,
    setEndereco,
  } = MapAllViewModel(route);

  function novaRota() {
    userLocation();
  }

  function rota(destino, vaga) {
    setVaga(vaga);
    setEndereco(`${vaga.logradouro} - ${vaga.bairro}`);
    setDestino(destino.coordinate);
    setRegra(`Horario: ${vaga.horarioUsoInicial.split(":")[0]}hrs - ${vaga.horarioUsoFinal.split(":")[0]}hrs`);
    setCard(true);
    setStyleMap({
      width: "100%",
      height: "80%",
    });
  }

  const GOOGLE_MAPS_APIKEY = "AIzaSyAo26qJLabyNucUAufrsrKBraSv4ir3sFo";

  function closeCard(e) {
    if (e.nativeEvent.action !== "marker-press") {
      setOrigem(null);
      setCard(false);
      setStyleMap({
        width: "100%",
        height: "100%",
      });
    } else {
      ("");
    }
  }

  function renderCard() {
    return (
      <Card style={{ height: "20%" }}>
        <Card.Content>
          <List.Item
            title={endereco}
            description={regra}
            left={() => <IconButton icon="car" size={30} />}
            right={() => (
              <View>
                <Button onPress={() => novaRota()}>Rota</Button>
              </View>
            )}
          />
        </Card.Content>
      </Card>
    );
  }

  function renderMarkers() {
    return vagas.map((x, i) => (
      <Marker
        image={require("../../assets/gps-red.png")}
        key={i}
        coordinate={{
          latitude: x.latitudeInicial,
          longitude: x.longitudeInicial,
        }}
        onPress={(e) => rota(e.nativeEvent, x)}
      />
    ));
  }

  function renderAreas() {
    return vagas.map((d, x) => {
      return (
        <Polyline
          key={x}
          coordinates={[
            { latitude: d.latitudeInicial, longitude: d.longitudeInicial },
            { latitude: d.latitudeFinal, longitude: d.longitudeFinal },
          ]}
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

      {card ? renderCard() : null}
    </SafeAreaView>
  );
}
