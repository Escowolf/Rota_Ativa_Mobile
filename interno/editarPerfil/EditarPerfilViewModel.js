import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditarPerfilViewModel({route}) {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register("nome");
    register("email");
    register("senha");
    register("senhaConfirma");
  }, [register]);

  const onSubmit = (data) => {
    Alert.alert(data.email, data.senha);
  };

  return {
    register,
    setValue,
    handleSubmit,
    onSubmit
  };
}
