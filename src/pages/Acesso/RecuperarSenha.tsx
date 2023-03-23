import Button from "../../components/Shared/Button";
import { Link } from "react-router-dom";
import { Label } from "../../components/Acesso/Label";
import { Input } from "../../components/Acesso/Input";
import { Links } from "../../components/Acesso/Links";

const RecuperarSenha = () => {
  return (
    <>
      <Label>E-mail</Label>
      <Input type='email'></Input>
      <Button>RECUPERAR SENHA</Button>
      <Links>
        <Link to="/usuario/entrar">Login</Link>
        <Link to="/usuario/criar-conta">Criar conta</Link>
      </Links>
    </>
  );
}

export default RecuperarSenha;