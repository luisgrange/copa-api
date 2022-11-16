# API da Copa 2022

## Como rodar o projeto:
Para que possa rodar o projeto, é necessário primeiro que clone o repositório com:
```bash
git clone https://github.com/luisgrange/copa-api
```

Com o repositório em mãos, podemos dar sequência ao desenvolvimento da API. Ela é dividida em duas pastas, a pasta de <strong>Server</strong>(onde estão todos os códigos) e a pasta <strong>Diagrama</strong>, onde ficam os diagramas que permitiram a finalização deste projeto.

- Passo 1: Mude para a pasta <strong>Server</strong>
```bash
cd server
```

- Passo 2: Já dentro da pasta, podemos startar o download das dependências, como gerenciador de pacotes node, utilizamos o <span style="color: light-blue">YARN</span>:
```bash
yarn init -y

#este comando inicializa o arquivo package.json
#com o parametro -y ele não faz perguntas, apenas inicializa o projeto
```

- Passo 3: Com o arquivo PACKAGE.JSON inicializado, podemos seguir instalando as dependências com:
```bash
yarn 
```

Com todas as bibliotecas necessárias instaladas, basta rodarmos ```yarn dev``` no terminal, que nossa API estará funcionando em: http://localhost:3001.

## O que o sistema faz:
A proposta inicial do projeto era que fossem criados rotas com base no que é fornecido pela documentação oficial da copa, então no projeto deve ser possível:

- Criar e atualizar seleções
- Criar e atualizar grupos
- Criar jogos e atualiza-los
- Ver quem foi o vencedor de cada jogo

Cada rota possui seu "controller" que gerencia toda a comunicação com o banco de dados. utilizamos o "Prisma" como ORM para facilitar a criação do banco, visualização das informações e atualizações das mesmas.

Para facilitar a leitura das rotas, optamos por utilizar factories, retornando o objeto referente a cada controller. Isso nos permite alterar o código para aplicar um dos conceitos do S.O.L.I.D, a inversão de dependência, sendo uma evolução natural do código apresentado.

## Objetivo:

O objetivo do projeto foi ensinar, de maneira prática, os conceitos apresentados nas aulas de Projeto de Software, o que nos permitiu adquirir mais conhecimento sobre conceitos de:

- Virtualização e containers (docker);
- Funcionamento de testes unitários;
- Utilização de métodos ágeis (scrum - JIRA)