import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EstacionarViewModel() {
  const { register, setValue, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState();

  const [dados, setDados] = useState();
  const [veiculo, setVeiculo] = useState("");
  const [credito, setCredito] = useState("1");
  const [custoTempo, setCustoTempo] = useState({
    custo: 10,
    tempo: 1
  })

  
  useEffect(() => {
    if(credito == "1"){
      setCustoTempo({
        custo: 10,
        tempo: 1
      })
    }else{
      setCustoTempo({
        custo: 20,
        tempo: 2
      })
    }
  }, [credito]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
  };

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading,
    dados,
    setDados,
    veiculo,
    setVeiculo,
    credito,
    setCredito,
    custoTempo,
    setCustoTempo
  };
}
