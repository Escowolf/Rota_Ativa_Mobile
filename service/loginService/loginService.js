import API from "../API";

export default class LoginService {
  logar(email, senha) {
    console.log({email:email, password:senha});
    return API.post("/login", {email:email, password:senha} );
  }

}