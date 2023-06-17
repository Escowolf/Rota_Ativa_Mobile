import { useEffect, useState } from "react";

export default function ConfirmaCompraViewModel(navigation) {
  const [cartao, setCartao] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("1");
  
  useEffect(() => {
    if(formaPagamento == "1"){
      console.log("1");
    }else{
      console.log("2");
    }
  }, [formaPagamento]);

  const onSubmit = (data) => {
    console.log(data)
    // navigation.navigate('Sucesso', {page: 'Map', mensagem: "Pagamento Realizado com sucesso", button:"Voltar"})
  };

  return {
    cartao,
    setCartao,
    formaPagamento,
    setFormaPagamento,
    onSubmit
  };
}
