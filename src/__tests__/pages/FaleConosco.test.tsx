import { render, screen } from "@testing-library/react";
import FaleConosco from "../../pages/FaleConosco";

test('Teste de renderização do formulário FaleConosco', () => {
  
  render(<FaleConosco />);

  expect(screen.getByLabelText('Nome')).toBeInTheDocument();
  expect(screen.getByLabelText('Sobrenome')).toBeInTheDocument();
  expect(screen.getByLabelText('Nascimento')).toBeInTheDocument();
  expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  expect(screen.getByLabelText('Telefone')).toBeInTheDocument();
  expect(screen.getByLabelText('Mensagem')).toBeInTheDocument();
});

export {};