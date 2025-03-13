## Parte geral do projeto

Este código foi desenvolvido em aprendizado a uma aula do canal WDev. Nessa aula pude aprender mais sobre o framework Vue.js em sua versão 2, e também aprender mais sobre Vue-Router e suas configurações.
Foi uma experiência bacana, aprendi mais sobre Vue e suas incríveis possibilidades de criação de código front-end então, espero que gostem. Lembrando também que o projeto teve de ser desenvolvido para duas partes, tanto desktop quanto mobile. Então,
algumas partes da estilização do código estarão dentro de *@media* (que foi utilizado para estilizar o desktop e separar o código)

## Frameworks/Libs utilizadas

- Vue.js (Versão 2)
- Vue Router (configuração de rotas, vue router versão 3)
- Axios (Library para consumos de API)

## Instalação do código

vue create (nome do projeto) @ (se precisar utilizar a versão)

*- Instalação do Vue Router*

npm install vue-router@3 (precisei instalar a versão 3 pois no Vue 2 não era compatível a versão do Vue Router que estava implementada no framework)

*- Instalação do Axios*

npm install axios

## Consumo de dados da API

- Endpoint: (https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api)
- Método HTTP: GET
- Descrição: Puxar informações como link do canal, informações de redes sociais, etc...
- Conteúdo: no website aparece as informações que foram requisitadas de acordo com as telas que o usuário observar


## Conteúdo adicional

Este aqui é apenas um comentário de código que eu precisei implementar dentro dos meu arquivo Header.vue, pois estava retornando um erro de que o termo "Header" não poderia
ser usado como nome do arquivo do projeto, para não haver conflito de tags semânticas de HTML. Mas, era para ter implementado no restante dos arquivos.

<!-- eslint-disable vue/multi-word-component-names -->


