import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CompraCreditosViewModel() {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState();
    const { register, setValue, handleSubmit } = useForm();
  
    useEffect(() => {
     
    }, []);
  
    const onSubmit = (data) => {
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
