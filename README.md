Olá! 

Esta é a prova conceito para o teste de frontend da eStracta. O desenvolvimento ocorreu conforme definido na documentação.

## Iniciando o projeto

O projeto foi desenvolvido em React (framework Next.js). Utilizou-se como base para o backend o projeto realizado em Flask, contido no repositório https://github.com/dandenardi/eStracta-api. Portanto, é importante que este projeto esteja devidamente configurado e o servidor esteja ativo na porta padrão (http:://127.0.0.1:3000/api). 

Após isso, basta navegar até a pasta raiz do projeto, abrir um terminal e executar o comando npm run start. Uma versão otimizada foi criada (utilizando o comando npm run build), portanto este comando deve ser suficiente. Em caso negativo, pode-se executar o projeto em modo desenvolvedor através do comando npm run dev.

A aplicação web pode ser acessada através do endereço http://localhost:3000.

### Funcionalidades

As seguintes funcionalidades foram implementadas:

- Apresentação de registros de empresas até o limite de 25 por página
- Paginação de registros, considerando o total da base de dados (atualmente com 50 registros)
- Ordenação por qualquer das colunas
- Ordenação crescente e decrescente

### Modo de uso

Ao abrir a página, serão apresentados os registros iniciando do primeiro até o número 25, com ordenação por CNPJ. Este é o padrão (*default*) da aplicação.
O usuário pode reordenar os registros clicando no link correspondente ao lado do nome da coluna. Um clique ordenará de forma crescente. Para redefinir para ordem decrescente, basta clicar novamente no mesmo ícone. 
É possível acessar uma página específica da paginação pelo menu inferior, clicando no número da página desejada. A página selecionada fica evidenciada em cinza.
É possível ainda avançar ou retroceder uma página ao clicar nos botões  "próxima" e "anterior" respectivamente.

## O que está por vir

Atualmente apenas a apresentação (*Read*) de dados foi implementada. A previsão é de implementar as seguintes funcionalidades:
- A conclusão da funcionalidade CRUD (atualização de uma empresa, inclusão de uma empresa e remoção de uma empresa)
- Tootlips informativos que indiquem sobre as funcionalidades da aplicação
- Formulários para busca de empresa e filtragem
- Validação de dados inseridos
- Mensagens amigáveis em caso de ausência de resultados e problemas em conectar com o servidor

## Finalizando
Este foi apenas um exemplo mínimo de aplicação, com o intuito de demonstrar o uso da API eStracta e as possibilidades de implementação com base em React. Agradeço a oportunidade de participar do processo seletivo e fico à disposição para dúvidas, questionamentos ou um bate-papo informal!

Abraço!
