
# API em Node

Este readme vai servir para te guiar na aula sobre API, nesse módulo aprenderemos o que é uma API, o que é o padrão REST, o que é o famoso CRUD? E faremos nossa primeira API


## Referências usadas 

[Postgres](https://linktodocumentation)


# O que é uma API?

Imagine você tem uma aplicação que consulta um banco de dados e faz alguns cálculos e devolve a resposta para o cliente

Nós podemos instalar o driver do banco de dados no próprio frotend e fazer a consulta por lá mesmo, o código dos cálculos coloca no front mesmo e a vida é isso aí

Porém... Tudo isso ficaria exposto ao cliente, se você apertar F12 no seu navegador, você terá acesso ao devtools, então lá você pode manipular TODO seu frontend, porque é um código público. Já imaginou os dados do seu cliente e toda regra de negócio do seu APP aberto assim? Não rola, né?

Então a API nada mais é do que uma aplicação rodando em alguma máquina, que fornece esses dados através de endpoints, que são realmente URL's, essa comunicação utiliza o protocolo HTTP

Então se você quiser um recurso, você solicita ao servidor da seguinte forma


```http
  GET seedabit.com/buscarmembros
```

O domínio não é o importante, o principal é o endpoint, que é a /buscarmembros, que retornará todos os membros, antes de continuar a leitura, por favor ler a documentação sobre métodos HTTP abaixo

[Métodos HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)

Então isso é uma API, é uma aplicação que encapsula algum serviço e você consome esse serviço através de endpoints


# API Rest e Restful

Muito se ouve sobre padrão rest, mas o que é? Rest nada mais é que boas práticas a serem seguidas em uma API. O padrão restful é justamente a implementação desse padrão

Leia mais em 
[Sua API não é restful](https://blog.geekhunter.com.br/sua-api-nao-e-restful-entenda-por-que/)

## Vamos iniciar nosso projeto

Para começar o projeto, abra uma pasta no vscode e no terminal digite

```bash
  npm init -y
```

Após isso vamos instalar algumas dependências

```bash
  npm install express
  npm install postgres
  npm install cors
  npm install nodemon -D 
```

Esse -D na instalação do nodemon é para deixar claro que é uma depência de desenvolvimento, o postgres é opcional, use o banco de dados que preferir

## Criar tabela no banco de dados

Crie a entidade(Member) com um id, firstname, lastname e role

## Modificar tipo de arquivo

Entre no seu package.json e adicione a seguinte linha antes de scripts

```javascript
"type": "module"
```

Isso vai permitir que usemos a sintaxe do ES6 no Node, com import e etc...

# Iniciando projeto

```javascript
const app = express();

app.listen(80, ()=> console.log("Server is running"))
```

Aqui não tem segredo, passei a instância do express para uma constante e ao final do arquivo adicionei o inicializador do servidor, não esqueça, o app.listen deve ficar sempre no final do arquivo

```javascript
app.use(express.json())
app.use(cors())
```

Habilitei o middleware para recebermos arquivos json e habilitei o cors, leia mais sobre cors em
[O que é CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)

## Finalizando

Sobre a implementação dos métodos e endpoints abordarei melhor na aula e deixarei como exercício para o próximo dia o tópico seguinte

Referência do [express](https://www.npmjs.com/package/express)

# Primeira API

O desafio é bem bacana, você deve:
- Criar o método UPDATE 
- Recriar a API com um serviço seu personalizado, pode ser um TODO list, fica a critério
- A API deve ser integrada com um banco de dados a sua escolha
