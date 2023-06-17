import { useState } from "react";

export default function Variaveis() {

    const [user, setUser] = useState({nome: "teste"})

    return {
        user,
        setUser
    };

}