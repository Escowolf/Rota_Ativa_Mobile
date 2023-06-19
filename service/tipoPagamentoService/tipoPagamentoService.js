import API from "../API";

export default class TipoPagamentoService {
  cadastrarTipoPagamento(cartão, descricao) {
    return API.post("tipopagamento/auth/user/cadastrar", {nome: cartão, descricao: "debito"});
  }

  getVeiculos(id){
    return API.get(`veiculo/auth/user/?id=${id}`)
  }

}