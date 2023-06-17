import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SuporteViewModel() {
    const [visible, setVisible] = useState(false);
    const [pergunta, setPergunta] = useState({ pergunta: "", resposta: "" });
    useEffect(() => {
      
    }, []);


  return {
    pergunta,
    setPergunta,
    visible,
    setVisible
  };
}
