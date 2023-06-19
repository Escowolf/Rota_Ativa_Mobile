import { useEffect, useState } from "react";

export default function PerfilViewModel({ navigation, route }) {

  const [user, setUser] = useState();
  const [loading, setLoading ] = useState(false)

  useEffect(() => {
    setUser(route.params.user)
    setLoading(true)
  }, []);

  function sair(){
    navigation.popToTop();
  }

  return {
    sair,
    user,
    loading
  };
}
