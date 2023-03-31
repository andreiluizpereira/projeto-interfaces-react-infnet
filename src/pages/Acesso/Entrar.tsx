import Button from "../../components/Shared/Button";
import { Link } from "react-router-dom";
import { Label } from "../../components/Acesso/Label";
import { Input } from "../../components/Acesso/Input";
import { Links } from "../../components/Acesso/Links";
import { useState } from "react";

const Entrar = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <Label>E-mail</Label>
      <Input placeholder='@gmail.com' type='email'></Input>
      <Label>Senha</Label>
      <Input placeholder='password' type='password'></Input>
      <Button>ENTRAR</Button>
      <Links>
        <Link to="/usuario/criar-conta">Criar conta</Link>
        <Link to="/usuario/recuperar-senha">Esqueceu sua senha?</Link>
      </Links>
    </>
  );
}

export default Entrar;