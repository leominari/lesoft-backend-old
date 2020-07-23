require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

/*
  Metodos HTTP

  Get: busca infos
  post: cria infos backend
  put/patch: altera infos
  delete: deleta infos
*/

/*
  Tipos parametros

  Query params: filtros e pagincaoa
  Route params: identificar recursos
  Request body: conteudo na hora de criar ou editar
*/

/*
  Middleware

  Interceptador de requisições:
    - Interromper a requisição
    - Alterar dados da requisicao
    
*/


app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(require('./routes'))

app.listen(process.env.PORT || 4000, () => {
  console.log('Back-end started!');
});