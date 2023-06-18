import { useEffect, useState } from "react";

export default function ConfirmaCompraViewModel(navigation) {
  const [cartao, setCartao] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("1");
  
  useEffect(() => {
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
