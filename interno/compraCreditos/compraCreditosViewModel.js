import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CompraCreditosViewModel(navigation) {
    const [visible, setVisible] = useState(false);
    const { register, setValue, handleSubmit } = useForm();
  
    useEffect(() => {
      register("codigo");
  }, [register]);
  
    const onSubmit = (data) => {
      setVisible(false)
      navigation.navigate('Sucesso', {page: 'Map', mensagem: "Pagamento Realizado com sucesso", button:"Voltar"})
    };

  return {
    register,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit
  };
}
