import API from "../API";

export default class CadastroService {
  cadastrar(nome, email, senha, cpf) {
    return API.post("perfil/auth/user/cadastrar", {nome: nome, email:email, password:senha, cpf: cpf});
  }

}