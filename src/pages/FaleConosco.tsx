import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Input } from '../components/Form/Input';
import { Label } from '../components/Form/Label';
import { TextArea } from '../components/Form/TextArea';


const FaleConosco = () => {

  const [color, setColor] = useState("#f00");
  const [valid, setValid] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setSubmited(!submited);

    if (nome === "" || sobrenome === "" || nascimento === "" || email === "" || telefone === "" || mensagem === "") {
      setValid(false);
      setColor("#b20201");
      setSubmited(true);
    } 
    else {
      setValid(true);
      setColor("#488D04");
      setSubmited(true);
    }
  }

  return (
    <> 
      <FaleConosco.Titulo>
      Fale conosco<span>.</span>
      </FaleConosco.Titulo>
      <FaleConosco.Formulario onSubmit={handleSubmit}>
          <Label htmlFor='nome'>Nome</Label>
          <Input id='nome' name='nome' type='text' value={nome} onChangeFunction={e => setNome(e.target.value)} />
          <Label htmlFor='sobrenome'>Sobrenome</Label>
          <Input id='sobrenome' name='sobrenome' type='text' value={sobrenome} onChangeFunction={e => setSobrenome(e.target.value)} />
          <Label htmlFor='nascimento'>Nascimento</Label>
          <Input id='nascimento' name='nascimento' type='date' value={nascimento} onChangeFunction={e => setNascimento(e.target.value)} />
          <Label htmlFor='email'>E-mail</Label>
          <Input id='email' name='email' type='email' value={email} onChangeFunction={e => setEmail(e.target.value)} />
          <Label htmlFor='telefone' >Telefone</Label>
          <Input id='telefone' name='telefone' type='tel' value={telefone} onChangeFunction={e => setTelefone(e.target.value)} />
          <Label htmlFor='mensagem'>Mensagem</Label>
          <TextArea name='mensagem' value={mensagem} onChangeFunction={e => setMensagem(e.target.value)}></TextArea>
          {(!valid && submited) && <FaleConosco.Validacao style={{color: color}}>Preencha todos os campos!</FaleConosco.Validacao>}
          {(valid && submited) && <FaleConosco.Validacao style={{color: color}}>Mensagem enviada com sucesso!</FaleConosco.Validacao>}          
          <Button texto='Enviar' type='submit' />
      </FaleConosco.Formulario>
    </>
  );
}

FaleConosco.Titulo = styled.h2`
  max-width: 1000px;
  margin: auto;
  text-align: center;
  margin-bottom: 60px;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 4.68rem;
  letter-spacing: 0.095em;
  color: #47505F;
  span {
    color: #4F46E5;
  }
`;

FaleConosco.Formulario = styled.form`
  background-color: transparent;
  border: none;
  max-width: 800px;
  margin: auto;
  display: grid;
  gap: 5px;
  border-radius: 7px;
  padding: 20px;
  margin-bottom: 100px;
  input {
    margin-bottom: 25px;
  }
`;

FaleConosco.Validacao = styled.p`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
`;

export default FaleConosco;