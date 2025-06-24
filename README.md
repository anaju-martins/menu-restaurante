# Menu de Drinks

Este projeto é uma aplicação web interativa que exibe um menu de drinks, permitindo aos usuários filtrar os drinks por categoria.


## ✨ Funcionalidades

* Exibe em forma de cardápio uma lista de drinks com imagem, título, descrição e preço.
* Permite filtrar os drinks por categoria (Clássicos, Contemporâneos, Sours, Gins).
* Design responsivo.

## ⚙️ Como Funciona

O código JavaScript realiza as seguintes ações:

1.  **Dados dos Drinks:** Define um array `menu` com informações sobre cada drink (id, título, categoria, preço, imagem, descrição).
2.  **Carrega os Drinks:** A função `displayMenuItems` itera sobre o array `menu` e cria elementos HTML para cada drink, que são inseridos na página.
3.  **Cria os Botões de Filtro:** A função `displayMenuButtons` extrai as categorias únicas do array `menu` e cria botões para cada categoria.
4.  **Filtra os Drinks:** Ao clicar em um botão de categoria, a aplicação filtra os drinks e exibe apenas os da categoria selecionada. O botão "all" exibe todos os drinks.

## 💡 Aprendizados

Este projeto foi útil para praticar conceitos de JavaScript como:

* Manipulação do DOM (Document Object Model).
* Arrays e objetos.
* Funções.
* Eventos (click).
* Filtragem de dados.
* Geração dinâmica de HTML.
