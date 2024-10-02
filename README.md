## API de Cadastro de Livros - Exemplo de Teste de Performance com k6
Este projeto é um exemplo de como realizar testes de performance utilizando a ferramenta k6 para uma API RESTful, como a The Dog API. Aqui você encontrará um exemplo prático de como testar diferentes endpoints de uma API, verificar seu desempenho e validar as respostas. O projeto está configurado para usar o k6 para realizar esses testes.

### Funcionalidades Testadas
A API possui diversos endpoints que são testados para garantir sua performance e resposta. Entre os testes implementados, destacam-se:

#### Endpoints

<u>Endpoint: /v1/breeds</u><br>
Verifica se o status da resposta é 200 e se o conteúdo está correto.
Consultar Raça Específica

<u>Endpoint: /v1/breeds/:id </u><br>
Busca uma raça de cachorro específica pelo seu ID e valida a resposta.
Buscar Imagens Aleatórias de Cachorros

<u>Endpoint: /v1/images/search </u><br>
Verifica a busca de imagens de cachorros, retornando uma lista limitada de imagens.
Cadastro de Votos em Imagens de Cachorros

<u>Endpoint: /v1/votes</u><br>
Simula o cadastro de um voto em uma imagem de cachorro, verificando se o status da resposta é 201 (CREATED).

<u>Endpoint: /v1/votes/:id </u><br>
Testa a exclusão de um voto utilizando o ID, validando se o status da resposta é 200.
Testar Cenários de Erro

Verifica como a API lida com dados inválidos e responde a erros esperados.

### Requisitos
Para rodar o projeto, você precisa instalar as seguintes ferramentas:

<li>k6: Ferramenta de teste de carga e performance.
Node.js: Para instalar e configurar pacotes.
Instalação
Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-dog-teste-performance.git
```
<li>Instale o k6:
Guia de Instalação do k6

<li>Configure a chave da API:
No arquivo de teste, substitua a variável API_KEY com a sua chave válida da The Dog API.

### Executar os testes:

```bash
k6 run test_dog_api.js
```

### Estrutura do Projeto
test_dog_api.js: Arquivo contendo todos os testes de performance utilizando a ferramenta k6.<br>

README.md: Documento de instruções. <br>

### Testes de Performance
Os testes de performance medem como a API se comporta sob carga e verificam a integridade das respostas. Eles são configurados para simular um número determinado de usuários simultâneos realizando operações nas rotas da API.

#### Configurações dos Testes
<li>Usuários Virtuais: 50
<li>Duração: 30 segundos <br>
Você pode alterar essas configurações no arquivo test_dog_api.js, ajustando os parâmetros:

```bash
export let options = {
    vus: 50, // Número de usuários virtuais simultâneos
    duration: '30s', // Duração do teste
};
```


