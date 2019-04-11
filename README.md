# ExampleFlix
> Um projeto baseado no sanarflix utilizando [ReactJS](https://github.com/facebook/create-react-app).

O projeto é um simples sistema de mostra de cursos e módulos desses cursos, mostra de professores, e sistema de login/logout, além de links para outros portais.

![NPM Version][npm-image]
![Build Status][travis-image]
![Downloads Stats][npm-downloads]

## Sobre o projeto

Quis fazer a parte visual da minha maneira, mesmo que muito parecido com as imagens de exemplo e com o próprio sistema atual da sanarflix, mas não estão iguais, repetindo, por opção mesmo.

Seguindo as necessidades solicitadas, todas foram feitas:

- [x] João é cliente do Sanarflix e deseja realizar o login para visualizar seus cursos
- [x] Maria acabou de conhecer o Sanarflix e gostaria de saber quem são os professores da plataforma
- [x] Pedro quer encontrar os módulos que fazem parte curso de Raciocínio Clínico
- [x] Pedro quer ser notificado quando um novo módulo for adicionado no curso de Raciocínio Clínico

Requisitos:
- [x] Obter as informações usando a API fornecida
OBS: A api de vocês, nos dados das imagens dos cursos, o aws está dando permission denied, ou seja, não consigo utilizar as imagens, mesmo obtendo seus links (Ajuste server-side de vocês), pra contornar utilizei uma imagem de exemplo.
- [x] Simular processo de Login
Todo funcional, com back-end fake, usuário e senha se encontra na página de login
- [x] Testes (TDD, BDD ou outros)
 Testes efetuados, falarei mais abaixo sobre
- [x] Aplicação rodando com SSR
 Server side rendering funcional, client side rendering funcional também.

● Criatividade
● Organização e legibilidade do código;
● Uso e domínio de libs do ecossistema React (Redux, Saga,
Styled-Components, etc)
● Performance


Falando mais um pouco de tudo que eu fiz:
1. Utilizei bastante do ecosisstema do React (React, redux, thunk, router...)
2. Utilizei o axios para as consultas da api (lembrando que uma delas está com acesso negado nas imagens - cursos)
3. Utilizei do react-test com jest e enzyme para executar alguns testes simples (de rota e de login)
4. Para analisar o projeto de uma forma geral, performance, melhores práticas, acessibilidade e seo, utilizei o google lighthouse e o eslint para organizar melhor o projeto
![Image of Lighthouse](https://i.ibb.co/5rd35nf/Screen-Shot-2019-04-10-at-21-05-40.png)
5. Utilizei node e o express para o SSR
6. Utilizei o react bootstrap, react ionicicons, styled-components e o slick para customização visual do app!
7. Sobre a questão visual, tem alguns pontos a detalhar:
    * Utilizei boa parte dos componentes visuais, já vindo do framework do bootstrap, como por exempo o <Button>, não sendo necessário criar um styled por exemplo, ou adicionar um arquivo css a parte.
    * Criei alguns styles-components de exemplo, estão na pasta src/components/styled-components. Tenho noção que poderia fazer com outros itens utilizado no projeto e tenho total capacidade disso.
    * Os CSSs customizados por mim, ficaram todos na pasta src/assets/css/main.css . Sei que isso não é a melhor das abordagens, mas foi mais por questão de tempo mesmo, se analisar esse arquivo, deixei dentro de comentários, por exemplo: /* ------------ paginaTal ------------ */ todas as classes do devido componente, bem organizadinho.
    * Se eu tivesse mais tempo, iria migrar essas classes para o seus devidos arquivos css e/ou criar styled-components quando necessário
8. Utilizei o local storage para armazenar os dados do usuário tanto offline/online do usuário logado.
9. Utilizei componentes stateless quando necessário e map reduces para uma melhor performance


## Melhorias possíveis

Caso eu tivesse mais tempo, pensei em alguns ajustes que poderiam serem feitos:

* i18n para internacionalização - Inglês, espanhol, etc...?
* Mudanças de layout - Pensar em algum layout mais bonito do que o que está atualmente
* Ajustes de responsividade - Tem o que melhorar ainda.
* Organização dos CSS - Seja em vários arquivos, seja com pré processadores, seja utilizando styled-comp....
* Organização melhor de detalhes de estruturas, pastas, componentes e nomeclatura
* Uma analise melhor do SSR e se realmente é necessário - Caso sim, alguns ajustes no node/express

Eu vejo todos esses pontos que podem ser melhorados, tenho conhecimento, e sei como fazer.

## Instalação

*É necessário ter o NodeJS(NPM) e React mais atual instalado em sua máquina.

Na pasta raiz do projeto executar para instalar as dependências:
```sh
npm install
```

## Utilização

### Executar Client side rendering

Executar `npm start` para levantar um servidor de desenvolvimento. Após o terminal terminar de carregar o projeto, navegar para `http://localhost:3000/` para ver a aplicação em funcionamento.

### Executar Server side rendering

Executar `npm run build` para buildar o projeto, depois executar `npm run server`. Navegar para `http://localhost:3000/` para ver a aplicação em funcionamento.

### Executar testes

Executar `npm run test` na pasta raiz do projeto executar os testes. Será mostrado na linha de comando so resultados, além de ser gerado uma pasta snapshot com os mesmos..


## Releases


* 0.0.2
    * SSR Fixes
    * Readme Changes
* 0.0.1
    * Primeira Release
    * Work in progress
    * Core do projeto todo funcional

## Meta

Thiago de Albuquerque – [@Thiagorowof](https://twitter.com/Thiagorowof) – thiago@parasolcs.com
[https://github.com/thiagorowof/](https://github.com/thiagorowof/)


[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
