import API from "../API";

export default class HistoricoService {
  historico(id) {
    return API.get(`/transacao/auth/user/?id=${id}`);
  }

}