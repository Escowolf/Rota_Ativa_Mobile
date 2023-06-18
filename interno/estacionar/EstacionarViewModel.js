import { useEffect, useState } from "react";

export default function EstacionarViewModel(navigation) {
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
    data.veiculo != undefined
      ? navigation.navigate("Sucesso", {
          page: "Map",
          mensagem: "Voltar",
          button: "Voltar",
        })
      : "";
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
