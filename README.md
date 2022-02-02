# S3 Bucket Watcher

## Aplicação serverless que fica observando um bucket s3 e quando recebe um novo arquivo, envia um alerta no Telegram

![Arquitetura](https://raw.githubusercontent.com/g-barbosa/serverless/assets/sample.jpg)

## Ambiente
#### Dependências
Rode o comando abaixo para instalar todas as dependências necessárias deste projeto.
~~~
yarn
~~~

#### Variáveis de ambiente
Crie um arquivo .env e use o .env_sample como base para criar as variaveis de ambiente.
Você precisará de um token de acesso do bot do telegram. Para fazer isso, é muito simples:
* Pesquise pela conta BotFather no Telegram.
* Quando iniciamos uma conversa com ele, o mesmo apresenta uma série de comandos para interagir. Digite /newbot para criar o novo bot.
* De um nome e um username terminado com bot. Pronto, seu bot já estará criado.
* Você receberá um token de acesso e poderá preencher a variavel de ambiente para trabalhar com seu bot.

### Documentação em progresso...
