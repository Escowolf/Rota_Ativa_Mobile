import axios from "axios";

const API = axios.create({
    baseURL: "https://rota-ativa-pads.escowolf.repl.co/"
})

export default API;