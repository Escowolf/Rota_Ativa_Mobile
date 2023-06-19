import API from "../API";

export default class VagasService {
  getVagasDisponiveis() {
    return API.get("zona/auth/user/disponiveis");
  }

  getVagasAll() {
    return API.get("zona/auth/user/vagas");
  }

}