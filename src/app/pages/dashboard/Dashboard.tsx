import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUserLogged } from "../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef(0);

  const { nameUser } = useUserLogged();

  return (
    <div className="">
      <p>Dashboard</p>
      <p>Usuário logado: {nameUser}</p>
      <p>Contador: {counterRef.current}</p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>Log</button>
      <Link to="/login">Login</Link>
    </div>
  );
};
