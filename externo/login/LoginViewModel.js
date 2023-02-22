import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export default function LoginViewModel(navigation) {
  const { register, setValue, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    register("email");
    register("senha");
  }, [register]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
    navigation.navigate('Home', { senha: data.senha, email: data.email });
  }

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit,
    isLoading,
    setIsLoading,
  };
}
