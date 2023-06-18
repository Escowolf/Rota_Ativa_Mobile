import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import VeiculoService from "../../service/veiculoService/veiculoService";

export default function VeiculosViewModel(route) {
  const veiculoService = new VeiculoService();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState();
  const { register, setValue, handleSubmit, getValues } = useForm();
  const [veiculos, setVeiculos] = useState([]);
  const [veiculo, setVeiculo] = useState({
    placa: "",
    renava: "",
    cor: "",
    ano: "",
  });


  useEffect(() => {
    register("placa");
    register("modelo");
    register("ano");
    register("cor");
  }, [register]);

  useEffect(() => {
    veiculoService.getVeiculos(route.params.user.id).then((resp) => {
      setVeiculos(resp.data);
      setLoading(true);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(
      data.placa,
      data.modelo,
      data.cor,
      route.params.user
    );
    // veiculoService.cadastrar(data.placa, data.renavan, data.cor, route.params.user).then((resp) => {
    //   console.log(resp.status);
    // });
    setVisible(false);
  };

  return {
    loading,
    veiculos,
    veiculo,
    setVeiculo,
    register,
    setValue,
    handleSubmit,
    visible,
    setVisible,
    visible1, 
    setVisible1,
    onSubmit,
    getValues,
  };
}
