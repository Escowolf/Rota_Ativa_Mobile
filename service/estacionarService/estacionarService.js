import API from "../API";

export default class EstacionarService {
  estacionar(quantTicket, vaga, veiculo) {
    return API.post("transacao/auth/user/nova", {ticketUsado: quantTicket, vaga: vaga, veiculo: veiculo, tipoTransacao:"entrada"});
  }

  sairVaga(vaga, veiculo) {
    return API.post("transacao/auth/user/nova", {vaga: vaga, veiculo: veiculo, tipoTransacao:"saida"});
  }

}