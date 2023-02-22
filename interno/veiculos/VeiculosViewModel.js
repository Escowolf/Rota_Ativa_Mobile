import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function VeiculosViewModel() {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState();
    const { register, setValue, handleSubmit } = useForm();
  
    useEffect(() => {
      register("placa");
      register("renavan");
      register("ano");
      register("cor");
    }, [register]);
  
    const onSubmit = (data) => {
      console.log(data.placa, data.renavan, data.ano, data.cor);
      setVisible(false)
    };

  return {
    register,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit,
    isLoading,
    setIsLoading
  };
}
