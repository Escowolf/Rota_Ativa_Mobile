import { useEffect, useState } from "react";
import LoginService from "../../service/loginService/loginService";

export default function PerfilViewModel() {
  const loginService = new LoginService();

  const [user, setUser] = useState();
  const [loading, setLoading ] = useState(false)

  useEffect(() => {
    loginService.logar("sstabler0@answers.com", "KJoU8KWI7w").then((resp) => {
      console.log(resp.data);
      if (resp.data != null) {
        setUser(resp.data);
        setLoading(true);
      }
    });
  }, []);

  return {
    user,
    loading
  };
}
