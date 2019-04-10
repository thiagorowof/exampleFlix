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
 Server side rendering funcional, CSR funcional também.



AJUSTAR:
● Criatividade
● Organização e legibilidade do código;
● Uso e domínio de libs do ecossistema React (Redux, Saga,
Styled-Components, etc)
● Performance
Mais tempo:
i18n para internacionalização
Organizado detalhes de estruturas e nomeclatura
TDD: Enzyme, MockAxios, Jest, 
Utilização de lighthouse
Uso de componentes stateless quando possível
Utilização de map reduces
Imagens da api de vocês de cursos está com acesso não permitido
eslint e 
testes com jest e enzyme

- [x] Utilização de bootstrap e leves classes css para definição visual - ux/ui;
- [x] Dados do usuárop sendo salvos no localStorage (pensei em utilizar o firebase que tenho conhecimentos nele);

## Instalação

*É necessário ter o NodeJS(NPM) e React mais atual instalado.

Na pasta raiz do projeto e na pasta ```/server``` executar para instalar as dependências:
```sh
npm install
```

## Utilização

### Executar server

Executar `npm start` para levantar um servidor de desenvolvimento. Navegar para `http://localhost:3000/` para ver a aplicação em funcionamento.

### Executar testes

Executar `npm run test` na pasta raiz do projeto executar os testes. Será mostrado na linha de comando so resultados, além de ser gerado uma pasta snapshot com os mesmos..


## Melhorias possíveis

* i18n para multilinguagens?
* Mudanças de layout? 


## Releases

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
