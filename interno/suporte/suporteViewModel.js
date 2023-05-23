import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SuporteViewModel() {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      
    }, []);


  return {
    visible,
    setVisible
  };
}
