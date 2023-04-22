import API from "../API";

export default class HistoricoService {
  historico() {
    return API.get(`/transacao/auth/user/?id=1`);
  }

}