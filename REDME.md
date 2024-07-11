# Cypress Automation Project - SauceDemo

Este projeto contém testes automatizados para os cenários de login do sistema Sauce demo, utilizando o cypress e o modelo de Comandos customizados onde é criado as funções e utilizado nos testes.

## Estrutura de Pastas e Arquivos

- **e2e/checkout/sauceDemo.cy.js**: Arquivo contendo os testes para os fluxos de login válido e inválido.

- **fixtures/**: Pasta para armazenar fixtures de teste. No momento, está vazia.

- **screenshots/**: Pasta contendo screenshots capturados durante a execução dos testes através do comando `cy.screenshot("Nome do print");`

- **support/commands.js**: Arquivo contendo comandos personalizados para cada função, que podem ser reutizadas em diversos testes, neste caso temos as funções de `loginValido` e `loginInválido`. Este arquivo é carregado automaticamente antesde cada arquivo de teste e2e.

- **support/e2e.js**: Arquivo de configuração global do Cypress que é carregado automaticamente antesde cada arquivo de teste e2e.

- **node_modules**: Esta pasta contém todas as dependências do projeto.

- **cypress.config.js**: Arquivo de configuração global do Cypress, onde esta definido a URL base, resolução da tela e timout da página.

- **cypress.env.json**: Arquivo onde é utilizado para armazenar variáveis de ambiente específicas do Cypress, permintindo que essas variáveis possam ser utilizadas nos testes sem ser expostas no código.

- **package-lock.json**: Este arquivo é automaticamente gerado pelo npm e contém a árvore de dependências exata que foi instalada. Ele garante que as instalações futuras sejam consistentes com as versões específicas das dependências.

- **package.json**: Este arquivo contém as informações do projeto, incluindo as dependências e outras configurações de matadados.



## Pré-requisitos para execução deste teste

- Node.js (você pode baixá-lo em https://nodejs.org);
- Cypress;
  Para instalar o cypress abra o terminal e use os comando: "npm install cypress --save-dev" (Isso instalará a ultima versão do cypress);
- VsCode (https://code.visualstudio.com/download);
- Git para versionamento e clonagem do projeto;

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:

`npm install`

## Executando os Testes

Para executar os testes, siga os seguintes passos:
- Clone o projeto ou baixa a pasta zipada;
- Abra o terminal e criei um pasta utilizando o comando `mkdir NOME DESEJADO`;
- Baixe o projeto "TESTETA" jogue dentro da pasta criada;
- Com VsCode aberto, clique no menu "Arquivo", selecione a opção "Abrir pasta" e navegue até o diretório onde se encontra a pasta "TESTETA" e abra ela;
- Com projeto aberto no VSCode vá até o menu "Terminal"e selecione a opção "Novo terminal";

- Digite o comando `npx cypress open`
-- Isso abrirá a interface do Cypress, onde você irá selecionar "E2E Testing" e poderá selecionar o navegador que deseja executar os testes --
- Clique em "Start E2E Testing in <Navegador_escolhido>"
- Clique em "sauceDemo.cy.js";

## Comandos Personalizados dentro da pasta `commands.js`

    `loginValido` - Realiza o login com um usuário válido definido em cypress.env.json;

    `loginInvalido` - Realiza a tentativa de login com um usuário e senha inválidos, definido em cypress.env.json;

## RESUMO

O teste realiza um fluxo básico fazendo um login válido e outro inválido, cada linha e cada ação estão comentado para que fique de facil entendimento e para que seja facil identificar. No teste utilizei funções que armazenam os elementos que fazem um login válido e inválido. Esses comandos são utilizados no teste propriamente dito, utilizando apenas o nome da função, fazendo com que o teste fique mais limpo e de facil manuntenção.
Coloquei alguns screenhsots para mostrar que também é possivel pegarmos evidencias do nosso teste automatizado, com isso toda vez que rodarmos o teste será tirado um scrrenshot e inserido na pasta.
