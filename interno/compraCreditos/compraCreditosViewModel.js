import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CompraCreditosViewModel(navigation) {
    const [visible, setVisible] = useState(false);
    const { register, setValue, handleSubmit } = useForm();
    const [ticket, setTicket] = useState({ preco: "", cartao: "" });
    const [visibleCodigo, setVisibleCodigo] = useState(false);
  
    useEffect(() => {
      register("codigo");
  }, [register]);
  
    const onSubmit = (data) => {
      setVisible(false)
      setVisibleCodigo(false)
      navigation.navigate('Sucesso', {page: 'Map', mensagem: "Pagamento Realizado com sucesso", button:"Voltar"})
    };

  return {
    ticket, 
    setTicket, 
    visibleCodigo, 
    setVisibleCodigo, 
    register,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit
  };
}
