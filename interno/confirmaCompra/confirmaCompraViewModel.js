import { useEffect, useState } from "react";

export default function ConfirmaCompraViewModel({ route, navigation }) {
  const [cartao, setCartao] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("1");
  const [ticket, setTicket] = useState({ preco: "", cartao: "" });

  
  useEffect(() => {
    setTicket(route.params.ticket)
  }, [formaPagamento]);

  const onSubmit = (data) => {
    console.log(data)
    // navigation.navigate('Sucesso', {page: 'Map', mensagem: "Pagamento Realizado com sucesso", button:"Voltar"})
  };

  return {
    ticket,
    cartao,
    setCartao,
    formaPagamento,
    setFormaPagamento,
    onSubmit
  };
}
