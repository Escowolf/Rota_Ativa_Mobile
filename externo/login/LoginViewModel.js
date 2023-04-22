import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import LoginService from "../../service/loginService/loginService";

export default function LoginViewModel(navigation) {
  const { register, setValue, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState();

  const loginService = new LoginService();

  useEffect(() => {
    register("email");
    register("senha");
  }, [register]);

  const onSubmit = (data) => {
    loginService.logar(data.email, data.senha).then((resp) => {
      //Alert.alert(resp.data);
      console.log(resp.data);
    });
    if(data.email != null && data.senha != null){
      navigation.navigate('Home', { senha: data.senha, email: data.email });
    }
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
