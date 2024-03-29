const routes = require('express').Router();
const crypto = require('crypto');

const { user,
  userToken } = require('../app/models');

const colaboradorRoute = require('./routes/colaborador');
const accountRoute = require('./routes/account');
const billRoute = require('./routes/bill');
const orderRoute = require('./routes/order');
const orderProductRoute = require('./routes/orderproduct');
const productRoute = require('./routes/product');
const transactionRoute = require('./routes/transaction');
const planoContasRoute = require('./routes/planoContas');


routes.use(productRoute);
routes.use(accountRoute);
routes.use(billRoute);
routes.use(colaboradorRoute);
routes.use(orderRoute);
routes.use(orderProductRoute);
routes.use(transactionRoute);
routes.use(planoContasRoute);

routes.get("/", async (req, res) => {
  return res.json('API ONLINE');
});

//Start System localhost:port/ss?ps=senha
routes.get("/ss", async (req, res) => {
  if (req.query.ps === "minari01") {

    await user.create({
      idColaborator: 0,
      user: 'leominari',
      password: 'minari01'
    });

    return res.json('Success.');
  }
  return res.json('Not Created.');
})

routes.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await user.findAll({
    where: {
      user: username
    }
  });
  if (result.length > 0) {
    if (result[0].password === password) {
      const token = crypto.randomBytes(32).toString('hex');
      const newToken = await userToken.create({
        idUser: result[0].id,
        token: token,
        valid: true
      });
      return res.json({ token: newToken.token });
    }
    return res.status(204).send('Wrong Password.');
  }

  return res.status(204).send('Wrong Username.');
});

routes.post("/logout", async (req, res) => {
  const { token } = req.body;
  await userToken.update({ valid: false }, {
    where: {
      token: token
    }
  });
  return res.json(true);
});

module.exports = routes;