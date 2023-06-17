import API from "../API";

export default class LoginService {
  logar(email, senha) {
    return API.post("perfil/login", {email:email, password:senha});
  }

}