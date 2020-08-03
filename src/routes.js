const routes = require('express').Router();
const crypto = require('crypto');

const { user,
  typeColaborator,
  userToken } = require('../app/models');

const colaborator = require('./routes/colaborator');
const account = require('./routes/account');
const bill = require('./routes/bill');
const order = require('./routes/order');
const orderProduct = require('./routes/orderproduct');
const product = require('./routes/product');
const transaction = require('./routes/transaction');


routes.use(product);
routes.use(account);
routes.use(bill);
routes.use(colaborator);
routes.use(order);
routes.use(orderProduct);
routes.use(transaction);

routes.get("/", async (req, res) => {
  return res.json('salve');
});

routes.get("/st", async (req, res) => {
  if (req.query.ps === "minari01") {

    await user.create({
      idColaborator: 1,
      user: 'leominari',
      password: 'minari01'
    })

    return res.json('salve')
  }
  console.log(`Invalida Password`)
  return res.json('not salve')
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
    return res.json('senha errada');
  }

  return res.json('username errado');
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