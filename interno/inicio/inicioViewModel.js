import { useEffect, useState } from "react";
import LoginService from "../../service/loginService/loginService";
import HistoricoService from "../../service/historicoService/historicoService";

export default function InicioViewModel() {
    const loginService = new LoginService();
    const historicoService = new HistoricoService();

    const [ user, setUser ] = useState();
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      loginService.logar("sstabler0@answers.com","KJoU8KWI7w").then((resp) => {
        console.log(resp.data);
        if(resp.data != null){
          setUser(resp.data);
        }
        historicoService.historico((Number(resp.data.id))).then((resp) => {
          setHistorico(resp.data);
          setLoading(true);
        })
      });

    }, []);

  return {
    loading,
    historico,
    user
  };
}
