import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ConfirmaCompraViewModel() {
  const { register, setValue, handleSubmit } = useForm();
  const [cartao, setCartao] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("1");
  const [custoTempo, setCustoTempo] = useState({
    custo: 10,
    tempo: 1
  })

  
  useEffect(() => {
    if(formaPagamento == "1"){
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
  }, [formaPagamento]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
  };

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit,
    cartao,
    setCartao,
    formaPagamento,
    setFormaPagamento
  };
}
