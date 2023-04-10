# Configuração
## Instalação de dependências
Execute no terminal o seguinte comando para instalar as dependências do projeto:
**`npm install`**

## Executando o projeto
Após instalar as dependências do projeto, você pode executá-lo usando o seguinte comando:
**`npm start`**

# Layout
## `<SharedLayout />`
O primeiro componente a ser renderizado através das rotas é o SharedLayout. Ele renderiza os componentes filhos Header e Footer pois ambos são compartilhados em todas as páginas da aplicação.

## `<Header />`
O Header exibe a logo e um menu de navegação para a área de contato, um botão que redireciona para a página FaleConosco.tsx (um formulário de contato) e outro botão que redireciona para a página **Alugar.tsx** (uma página onde exibe os imóveis par alocação).

## `<Footer />`
O Footer exibe as informações de contato.

## FaleConosco.tsx
A página FaleConosco.tsx possui um formulário com 6 campos. Cada campo é formado por componentes personalizados (`<Label/>`, `<Input/>` e `<TextArea/>`).

A validação do formulário é realizada com o useForm do react-hook-form.
Se ao clicar no botão o formulário não for válido (campos em branco) é exibido um aviso em vermelho em baixo de cada campo em branco.

Se for válido, a função onSubmit altera o estado de isSubmitted para que uma mensagem de sucesso seja exibida e com cor e alinhamento personalizado.

## Alugar.tsx
Cada imóvel é renderizado individualmente pelo componente CardContainer pois não estão contidos em uma lista (array).

## `<CardContainer/>`
O componente CardContainer é composto por outros dois componentes chamados FrontCard e BackCard.
O Card possui um botão que faz a troca de renderização do FrontCard para o BackCard

## `<FrontCard/>`
Exibe informações do imóvel, como área, banheiros, dormitórios, localização, valor aluguel etc, e uma imagem.

## `<BackCard/>`
Apresenta outras informações adicionais, como condomínio, iptu, e uma frase com mais detalhes. Também exibe o mesmo botão, se clicado, redireciona para a página FaleConosco.tsx, para o usuário pedir informações sobre o imóvel.

# Testes
O primeiro teste verifica se os 6 campos do formulário são renderizados para que o usuário tenha como entrar em contato.
No teste foi verificado se os LabelText de cada campo eram encontrados na tela.

O segundo teste faz duas verificações para os botões do FrontCard e do BackCard na página Alugar.tsx.

A primeira verificação procura se há um texto com o nome "Detalhes", quando o CardContainer é renderizado. Esse é o texto quando o `<FrontCard/>` é exibido inicialmente.

A segunda verificação procura se há um texto com o nome "Tenho interesse". Esse texto só aparece quando o botão "Detalhes" é clicado. Ele é exibido no `<BackCard/>`.

# Aplicação Redux