import { useEffect, useState } from "react";
import HistoricoService from "../../service/historicoService/historicoService";

export default function InicioViewModel(route) {
    const historicoService = new HistoricoService();

    const [ user, setUser ] = useState();
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setUser(route.params.user)
        historicoService.historico(route.params.user.id).then((resp) => {
          setHistorico(resp.data);
          setLoading(true);
        })
      }, []);

  return {
    loading,
    historico,
    user
  };
}
