import API from "../API";

export default class VeiculoService {
  cadastrar(placa, modelo, cor, usuario) {
    return API.post("veiculo/auth/user/cadastrar", {placa:placa, modelo:modelo, usuario: usuario, cor:cor});
  }

  getVeiculos(id){
    return API.get(`veiculo/auth/user/?id=${id}`)
  }

}