# UNIFESP_ScheduleApp_API


# New Document


### Instalando dependências
``` js
npm install
```

### Criando arquivo .env
* _No ditetório atual execute_
``` shell
touch .env
```
* _Copie as chaves presentes no arquivo **env.sample.txt**_
* _Adicione os valores necessários_



### Configuração do Banco
##### _(o banco utilizado para este projeto foi o PostgreSQL)_
* _Criando banco_

``` js
npx sequelize db:create
```

* _Executando Migrations_

``` js
npx sequelize db:migrate
```


### Executando localmente

``` js
npm run local
```
