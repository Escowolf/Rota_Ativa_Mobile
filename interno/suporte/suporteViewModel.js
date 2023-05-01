import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SuporteViewModel() {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState();
    const { register, setValue, handleSubmit } = useForm();
  
    useEffect(() => {
      
    }, []);
  
    const onSubmit = () => {
      console.log();
      setVisible(false)
    };

  return {
    register,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit,
    isLoading,
    setIsLoading
  };
}
