import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Shared/Button';
import Input from '../components/Form/Input';
import TextArea from '../components/Form/TextArea';
import Label from '../components/Form/Label';
import { useForm } from "react-hook-form";

const FaleConosco = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: Object) => {
    setIsSubmitted(true);
  };

  return (
    <> 
      <FaleConosco.Titulo>Fale conosco<span>.</span></FaleConosco.Titulo>
      {isSubmitted && (
        <FaleConosco.Validacao color=" #008B00" textAlign="center" fontSize='2rem'>Mensagem enviada com sucesso!</FaleConosco.Validacao>
      )}
      <FaleConosco.Formulario onSubmit={handleSubmit(onSubmit)}>

        <FaleConosco.Field>
          <Label htmlFor='nome'>Nome</Label>
          <Input id='nome' type='text' {...register('nome', { required: true })} />
          {errors.nome && <FaleConosco.Validacao>Preencha o campo nome!</FaleConosco.Validacao>}
        </FaleConosco.Field>

        <FaleConosco.Field>
          <Label htmlFor='sobrenome'>Sobrenome</Label>
          <Input id='sobrenome' type='text' {...register('sobrenome', { required: true })} />
          {errors.sobrenome && <FaleConosco.Validacao>Preencha o campo sobrenome!</FaleConosco.Validacao>}
        </FaleConosco.Field>

        <FaleConosco.Field>
          <Label htmlFor='nascimento'>Nascimento</Label>
          <Input id='nascimento' type='date' {...register('nascimento', { required: true })} />
          {errors.nascimento && <FaleConosco.Validacao>Preencha o campo data de nascimento!</FaleConosco.Validacao>}
        </FaleConosco.Field>

        <FaleConosco.Field>
          <Label htmlFor='email'>E-mail</Label>
          <Input id='email' type='email' placeholder='email@gmail.com' {...register('email', { required: true })} />
          {errors.email && <FaleConosco.Validacao>Preencha o campo e-mail!</FaleConosco.Validacao>}
        </FaleConosco.Field>

        <FaleConosco.Field>
          <Label htmlFor='telefone'>Telefone</Label>
          <Input id='telefone' type='tel' pattern="[0-9]*" {...register('telefone', { required: true, pattern: /[0-9]*/ })} />
          {errors.telefone?.type === 'required' && <FaleConosco.Validacao>Preencha o campo telefone e apenas com números!</FaleConosco.Validacao>}
        </FaleConosco.Field>

        <FaleConosco.Field>
          <Label htmlFor='mensagem'>Mensagem</Label>
          <TextArea id='mensagem' {...register('mensagem', { required: true })}></TextArea>
          {errors.mensagem && <FaleConosco.Validacao>Preencha o campo mensagem!</FaleConosco.Validacao>}
        </FaleConosco.Field>
        
        <Button type='submit'>Enviar</Button>
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
  max-width: 800px;
  margin: auto;
  display: grid;
  gap: 25px;
  border-radius: 7px;
  padding: 20px;
  margin-bottom: 100px;
`;

FaleConosco.Field = styled.div`
  display: grid;
  gap: 5px;
`;

type ValidacaoProps = {
  color?: string;
  textAlign?: string;
  fontSize?: string;
}

FaleConosco.Validacao = styled.p<ValidacaoProps>`
  color: ${props => props.color || '#b20201'};
  text-align: ${props => props.textAlign || 'left'};
  font-size: ${props => props.fontSize || '1rem'};
`;

export default FaleConosco;