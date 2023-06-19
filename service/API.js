import axios from "axios";

const API = axios.create({
   baseURL: "https://rota-ativa-pads.escowolf.repl.co/"
   //baseURL: "https://rota-ativa-padsokfinal.lucaslopes39.repl.co"
})

export default API;