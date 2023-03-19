import API from "../API";

export default class VagasService {
  getVagas() {
    return API.get("/60743720/json");
  }

}