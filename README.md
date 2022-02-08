# ☁️🤖 S3 Bucket Watcher

## Aplicação serverless que fica observando um bucket s3 e quando recebe um novo arquivo, envia um alerta no Telegram

![Arquitetura](https://raw.githubusercontent.com/g-barbosa/serverless/assets/sample.jpg)

## Ambiente
#### Dependências
Rode o comando abaixo para instalar todas as dependências necessárias deste projeto.
~~~
yarn
~~~

#### Variáveis de ambiente
Crie um arquivo .env e use o .env_sample como base para criar as variaveis de ambiente:
**BOT_TOKEN**
Você precisará de um token de acesso do bot do telegram. Para fazer isso, é muito simples:
* Pesquise pela conta BotFather no Telegram.
* Quando iniciamos uma conversa com ele, o mesmo apresenta uma série de comandos para interagir. Digite /newbot para criar o novo bot.
* De um nome e um username terminado com bot. Pronto, seu bot já estará criado.
* Você receberá um token de acesso e poderá preencher a variavel de ambiente `BOT_TOKEN` para trabalhar com seu bot.

**CHAT_ID**
* Para descobrir o seu CHAT_ID, você deve enviar uma mensagem para o bot e depois usar algum cliente REST da sua escolha e fazer a seguinte requisição: 
  `GET https://api.telegram.org/bot<BOT_TOKEN>/getUpdates` e na resposta desta req, você encontra o id do chat.

**BUCKET_NAME**
* Você deve escolher um nome para o seu bucket S3

## Deploy
Para fazer o deploy para a AWS, basta rodar o seguinte comando:
~~~
yarn deploy
~~~
