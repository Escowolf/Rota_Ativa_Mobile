import { useEffect, useState } from "react";

export default function PerfilViewModel(route) {

  const [user, setUser] = useState();
  const [loading, setLoading ] = useState(false)

  useEffect(() => {
    setUser(route.params.user)
    setLoading(true)
  }, []);

  return {
    user,
    loading
  };
}
