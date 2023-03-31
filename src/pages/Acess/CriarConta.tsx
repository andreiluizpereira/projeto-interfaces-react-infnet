import Button from "../../components/Shared/Button";
import { Link } from "react-router-dom";
import { Label } from "../../components/Acesso/Label";
import { Input } from "../../components/Acesso/Input";
import { Links } from "../../components/Acesso/Links";

const CriarConta = () => {
  return (
    <>
      <Label>E-mail</Label>
      <Input type='email'></Input>
      <Label>Senha</Label>
      <Input type='password'></Input>
      <Label>Confirmar senha</Label>
      <Input type='password'></Input>
      <Button>CRIAR CONTA</Button>
      <Links>
        <Link to="/usuario/entrar">Login</Link>
        <Link to="/usuario/recuperar-senha">Esqueceu sua senha?</Link>
      </Links>
    </>
  );
}

export default CriarConta;