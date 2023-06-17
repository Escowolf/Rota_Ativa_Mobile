import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Variaveis from "../../service/global/variaveis";
import LoginService from "../../service/loginService/loginService";

export default function LoginViewModel(navigation) {
  const { register, setValue, handleSubmit } = useForm();
  const { user, setUser } = Variaveis();

  const loginService = new LoginService();

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email invalido");
      return false;
    }
    else {
      setValue("email", text)
      console.log("Email correto");
    }
  }

  useEffect(() => {
    register("email");
    register("senha");
  }, [register]);

  const onSubmit = (data) => {
    loginService.logar(data.email, data.senha).then((resp) => {
      console.log(resp.data);
      if(resp.data != null){
        setUser(resp.data);
        navigation.navigate('Home', {user: resp.data});
      }
    });
  }

  return {
    validate,
    register,
    setValue,
    handleSubmit,
    onSubmit,
  };
}
