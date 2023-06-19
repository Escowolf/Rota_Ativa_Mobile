import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CadastroService from "../../service/cadastroService/cadastroService";

export default function EditarPerfilViewModel(route) {
  const cadastroService = new CadastroService();

  const { register, setValue, handleSubmit } = useForm();
  const [loading, setLoading] = useState();
  const user = route.params.user;

  useEffect(() => {
    register("nome");
    register("email");
    register("senha");
    register("senhaConfirma");
  }, [register, loading]);

  const onSubmit = (data) => {
    if (undefined != data.nome){
      user.nome = data.nome
    }
    if(undefined != data.email){
      user.email = data.email
    }
    if(undefined != data.cpf){
      user.cpf = data.cpf
    }
    if(undefined != data.senha){
      user.senha = data.senha
    }

    cadastroService.editar(user).then((resp)=>{
      console.log(resp.status);
      setLoading(true);
    })

  };

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit
  };
}
