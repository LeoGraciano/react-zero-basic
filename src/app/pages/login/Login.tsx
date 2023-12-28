import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    console.log("Executou");
    return email.length * 98151594819 * 56165481;
  }, [email.length]);

  const handleLogin = useCallback(() => {
    console.log(email);
    console.log(password);
    if (inputPasswordRef.current !== null) navigate("/pagina-inicial");
  }, [email, navigate, password, inputPasswordRef]);
  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <InputLogin
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          label="Senha"
          type="password"
          ref={inputPasswordRef}
          value={password}
          onChange={(e) => setPassword(e)}
        />
        <ButtonLogin type="button" onClick={handleLogin}>
          Entrar
        </ButtonLogin>
        {/* <ButtonLogin type="button" onClick={handleLogin}>
          Cadastra-se
        </ButtonLogin> */}
      </form>
    </div>
  );
};
