import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Variaveis from "../../service/global/variaveis";
import LoginService from "../../service/loginService/loginService";

export default function LoginViewModel(navigation) {
  const { register, setValue, handleSubmit } = useForm();
  const { user, setUser } = Variaveis();

  const loginService = new LoginService();

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      setValue("email", text)
    }
  }

  useEffect(() => {
    register("email");
    register("senha");
  }, [register]);

  const onSubmit = (data) => {
    loginService.logar(data.email, data.senha).then((resp) => {
      if(resp.data != null){
        setUser(resp.data);
        navigation.navigate('Home', {user: resp.data});
      }
    });
  }

  return {
    user,
    validate,
    register,
    setValue,
    handleSubmit,
    onSubmit,
  };
}
