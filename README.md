# Teste Técnico - Desenvolvimento Front-End - Pokemon Angular

Este é o meu projeto de teste técnico para a vaga de desenvolvedor front-end. Neste projeto, desenvolvi uma aplicação web que permite aos usuários explorar Pokémon por tipo. A aplicação foi construída usando Angular e consome a API oficial do Pokémon para obter dados sobre os Pokémon.

## Instruções de Uso

Siga estas instruções para executar a aplicação localmente:

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Clone este repositório em sua máquina local usando o seguinte comando:
`https://github.com/thamiresandradee/pokemon-angular.git`

3. Navegue até o diretório do projeto: `cd pokemon-angular`

4. Instale as dependências do projeto usando o npm: `npm install`

5. Inicie a aplicação: `ng serve`

6. Abra seu navegador e acesse a seguinte URL: `http://localhost:4200/`


Agora você deverá ver a aplicação em execução em seu navegador.

## Funcionalidades

- A página inicial exibe cartões de todos os tipos de Pokémon.
- Ao clicar em um cartão de tipo de Pokémon, você é redirecionado para uma página que exibe todos os Pokémon desse tipo com paginação.
- A aplicação utiliza a API oficial do Pokémon para buscar dados sobre os Pokémon.
- Os controles de paginação permitem que você navegue pelas páginas da lista de Pokémon.
- A exibição de detalhes de cada Pokémon ao clicar em um Pokémon específico.

## Estrutura do Projeto

- `src/app/components`: Contém os componentes Angular da aplicação.
- `src/app/services`: Contém os serviços que consomem a API do Pokémon.
- `src/app/pages`: Contém as páginas da aplicação.

## Tecnologias Utilizadas

- Angular
- RxJS
- HttpClient

## Próximos Passos

Aqui estão algumas melhorias que podem ser feitas no projeto no futuro:

- Adição de testes automatizados para garantir a qualidade do código.
- Aprimoramento do design e da experiência do usuário.
