import { useEffect, useState } from "react";
import HistoricoService from "../../service/historicoService/historicoService";

export default function HistoricoViewModel(route) {

    const [loading, setLoading] = useState(false);
    const [historico, setHistorico] = useState([]);

    const historicoService = new HistoricoService();
    useEffect(() => {
      historicoService.historico(Number(route.params.user.id)).then((resp) => {
        setHistorico(resp.data);
        setLoading(true);
      })
    }, [])


  return {
    loading,
    historico
  };
}
