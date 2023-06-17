import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CadastroService from "../../service/cadastroService/cadastroService";

export default function CadastroViewModel(navigation) {
  const { register, setValue, handleSubmit } = useForm();
  const cadastroService = new CadastroService();

  useEffect(() => {
    register("nome");
    register("email");
    register("cpf");
    register("senha");
    register("senhaConfirma");
  }, [register]);

  const onSubmit = (data) => {
    cadastroService.cadastrar(data.nome, data.email, data.senha, data.cpf).then((resp) => {
      if(resp.data != null){
        navigation.navigate('Sucesso', {page: 'Login', mensagem: "Voltar", button:"Login"});
      }
    });
  };

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit
  };
}
