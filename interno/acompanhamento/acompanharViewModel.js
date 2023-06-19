import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import EstacionarService from "../../service/estacionarService/estacionarService";

export default function AcompanharViewModel(navigation) {
  const estacionarService = new EstacionarService();

  const [loading, setLoading] = useState();

  useEffect(() => {

  }, []);

  const onSubmit = (data) => {
    estacionarService.sairVaga(data.vaga, data.veiculo).then((resp) => {
      console.log(resp.status);
      navigation.navigate('Sucesso', {page: "PagamentoView", mensagem: "Tudo OK", button:"Voltar"})
    })
  };

  return {
    onSubmit,
    loading,
    setLoading
  };
}
