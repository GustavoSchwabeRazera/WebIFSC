# Link Pages (https://gustavoschwaberazera.github.io/WebIFSC/ppi_lista1/index.html)

# PPI - Lista 1

Projeto desenvolvido para a disciplina de **Programação para Internet (PPI)**, com o objetivo de praticar os conceitos básicos de **HTML5 e CSS3**, incluindo textos, imagens, listas, tabelas, links, formulários e estilização com CSS externo.

## 📁 Estrutura do Projeto

```text
ppi_lista1/
│
├── images/
│   ├── ARPANET_1969.png
│   ├── fotoGustavo.jpeg
│   ├── images.png
│   ├── request.jpg
│   ├── response.png
│   └── WEBw.jpg
│
├── 1.html
├── 2_http.html
├── 3_tabela_uf.html
├── 4_contato.html
├── 4_curriculo.html
├── style.css
└── README.md
```

## 🌐 1.html — Internet e Web

Página que apresenta a diferença entre **Internet e Web**, além de um resumo sobre a história e evolução dessas tecnologias.

São apresentados assuntos como:

- ARPANET;
- TCP/IP;
- World Wide Web;
- Tim Berners-Lee;
- CERN;
- Principais acontecimentos históricos da Internet e da Web.

A página utiliza parágrafos, imagens, listas ordenadas e não ordenadas, listas de definição e tabelas.

## 🔄 2_http.html — Protocolo HTTP

Página destinada à explicação do protocolo **HTTP (Hypertext Transfer Protocol)** e sua utilização na Web.

Apresenta:

- Funcionamento do HTTP;
- Comunicação entre cliente e servidor;
- Requisições HTTP;
- Respostas HTTP;
- Método `GET`;
- `Host`;
- `User-Agent`;
- `Accept`;
- `Content-Type`;
- `Content-Length`;
- Código de resposta `200 OK`.

Também são utilizadas imagens para representar exemplos de requisições e respostas.

## 🇧🇷 3_tabela_uf.html — Estados Brasileiros

Página contendo uma tabela com os **estados brasileiros**, suas siglas, capitais e respectivas regiões.

Os estados são agrupados por região utilizando o atributo `rowspan`.

Também são utilizados links externos para permitir o acesso às páginas dos estados na Wikipédia.

## 👤 4_curriculo.html — Currículo

Página de currículo criada utilizando diferentes elementos HTML.

Contém:

- Nome completo;
- Foto;
- Informações de contato;
- E-mail e telefone com links;
- Descrição pessoal;
- Habilidades técnicas;
- Formação acadêmica;
- Experiência profissional;
- Grade de horários;
- Menu de navegação interno;
- Links externos.

A foto utilizada no currículo está localizada em:

```text
images/fotoGustavo.jpeg
```

## ✉️ 4_contato.html — Contato

Página contendo um formulário de contato desenvolvido utilizando HTML.

O formulário possui:

- Nome;
- E-mail;
- Assunto;
- Estado;
- Mensagem;
- Botão de envio.

Foram utilizados elementos como:

`form`, `label`, `input`, `select`, `option` e `textarea`.

Também foram adicionadas validações básicas utilizando `required`, `type="email"` e textos de exemplo utilizando `placeholder`.

## 🎨 style.css — Estilização

Arquivo CSS externo utilizado para estilizar as páginas do projeto.

Entre as propriedades utilizadas estão:

- `background-color`;
- `color`;
- `font-family`;
- `border`;
- `border-radius`;
- `padding`;
- `margin`;
- `width`;
- `text-align`.

Também foi utilizado o seletor `:hover` para melhorar a interação com links, menus e botões.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- Visual Studio Code
- Navegador Web

## ▶️ Como Executar

Não é necessário instalar nenhuma dependência ou servidor.

1. Baixe ou clone o projeto.
2. Abra a pasta `ppi_lista1` no Visual Studio Code.
3. Abra qualquer arquivo `.html` em um navegador.
4. O arquivo `style.css` será carregado automaticamente pelas páginas que estiverem vinculadas a ele.

## 🎯 Objetivo

O objetivo do projeto é colocar em prática os fundamentos do desenvolvimento Web, utilizando **HTML para estruturar o conteúdo** e **CSS para definir a aparência das páginas**.

Durante as atividades foram praticados conceitos como tabelas, listas, imagens, links, formulários, navegação, validação de campos e estilização externa.
