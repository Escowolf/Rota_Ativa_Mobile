import { useEffect, useState } from "react";
import EstacionarService from "../../service/estacionarService/estacionarService";

export default function EstacionarViewModel(navigation) {

  const estacionarService = new EstacionarService();

  const [veiculoSelecionado, setVeiculoSelecionado] = useState();
  const [veiculo, setVeiculo] = useState("");
  const [credito, setCredito] = useState("1");
  const [custoTempo, setCustoTempo] = useState({
    custo: 10,
    tempo: 1,
  });

  useEffect(() => {
    if (credito == "1") {
      setCustoTempo({
        custo: 10,
        tempo: 1,
      });
    } else {
      setCustoTempo({
        custo: 20,
        tempo: 2,
      });
    }
  }, [credito]);

  const onSubmit = (data) => {
    console.log(data);
    if(data.veiculo != undefined && data.ticket != undefined){
      estacionarService.estacionar(data.ticket, data.vaga, data.veiculo[0]).then((resp) => {
        console.log(resp.status);
        data.veiculo != undefined
          ? navigation.navigate("Sucesso", {
              page: "Map",
              mensagem: "Voltar",
              button: "Voltar",
            })
          : "";
      })
    }

  };

  return {
    veiculoSelecionado,
    setVeiculoSelecionado,
    onSubmit,
    veiculo,
    setVeiculo,
    credito,
    setCredito,
    custoTempo,
    setCustoTempo,
  };
}
