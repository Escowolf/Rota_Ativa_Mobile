import { useEffect, useState } from "react";
import * as Location from "expo-location";
import VagasService from "../../service/vagasService/vagasService";

export default function MapAllViewModel(route) {

  const vagasService = new VagasService();

  const [vaga, setVaga] = useState({
    acessibilidade: false,
    bairro: "",
    credito: 0,
    disponibilidade: true,
    horarioUsoFinal: "",
    horarioUsoInicial: "",
    id: 2,
    latitudeFinal: "",
    latitudeInicial: "",
    logradouro:" ",
    longitudeFinal: "",
    longitudeInicial: "",
    nome: "",
    ocupacao: 0,
    tempoUso: 0,
    totalVeiculos: 0
});
  const [user, setUser] = useState();
  const regiao = {
    latitude: -3.731862,
    longitude: -38.526669,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();
  const [regra, setRegra] = useState();
  const [card, setCard] = useState(false);
  const [styleMap, setStyleMap] = useState({
    width: "100%",
    height: "100%",
  });
  const [endereco, setEndereco] = useState();
  const [vagas, setVagas] = useState([]);


  useEffect(() => {
    setUser(route.params.user);
    vagasService.getVagasAll().then((resp) => {
      console.log(resp.data);
      setVagas(resp.data)
    })
  }, []);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("A permissão para acessar o local foi negada");
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

  return {
    vagas, 
    setVagas,
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
  };
}
