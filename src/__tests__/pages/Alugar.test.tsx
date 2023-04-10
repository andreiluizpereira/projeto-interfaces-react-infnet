import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import CardContainer from '../../components/Card/CardContainer';

describe('teste dos botões na página Alugar.tsx', () => { 

  test('deve haver um botão com o nome "Detalhes"', () => {
    render(
      <CardContainer aluguel={0} areaPrivativa={0} areaTotal={0} bairro='' cidadeEstado='' banheiro={0} condominio={0} iptu={0} dormitorio={0} urlImage='' sobreImovel='' vagas={0} />
    );
  
    expect(screen.getByText('Detalhes')).toBeInTheDocument();
  });

  test('após clicar no botão "Detalhes", o nome do botão deve mudar para "Tenho interesse"', () => {
    const { container } = render(
      <MemoryRouter>
        <CardContainer aluguel={0} areaPrivativa={0} areaTotal={0} bairro='' cidadeEstado='' banheiro={0} condominio={0} iptu={0} dormitorio={0} urlImage='' sobreImovel='' vagas={0} />
      </MemoryRouter>
    );

    act(() => {
      let botao = screen.getByText('Detalhes');
      botao.click();
    });

    expect(screen.getByText('Tenho interesse')).toBeInTheDocument();
  })
})

export {};

