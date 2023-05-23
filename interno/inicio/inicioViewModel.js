import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function InicioViewModel() {
    const { setValue, handleSubmit } = useForm();
  
    useEffect(() => {
     
    }, []);
  
    const onSubmit = (data) => {

    };

  return {
    setValue,
    handleSubmit,
    onSubmit
  };
}
