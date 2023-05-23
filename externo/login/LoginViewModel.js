import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoginService from "../../service/loginService/loginService";

export default function LoginViewModel(navigation) {
  const { register, setValue, handleSubmit } = useForm();

  const loginService = new LoginService();

  useEffect(() => {
    register("email");
    register("senha");
  }, [register]);

  const onSubmit = (data) => {
    loginService.logar(data.email, data.senha).then((resp) => {
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
  };
}
