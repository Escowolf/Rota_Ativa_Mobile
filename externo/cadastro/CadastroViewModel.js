import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CadastroViewModel() {
  const { register, setValue, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    register("nome");
    register("email");
    register("cpf");
    register("senha");
    register("senhaConfirma");
  }, [register]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
    navigation.navigate("Login");
  };

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading,
  };
}
