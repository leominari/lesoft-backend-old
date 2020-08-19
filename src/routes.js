const routes = require('express').Router();
const crypto = require('crypto');

const { user,
  colaborator,
  typeColaborator,
  userToken } = require('../app/models');

const colaboratorRoute = require('./routes/colaborator');
const accountRoute = require('./routes/account');
const billRoute = require('./routes/bill');
const orderRoute = require('./routes/order');
const orderProductRoute = require('./routes/orderproduct');
const productRoute = require('./routes/product');
const transactionRoute = require('./routes/transaction');


routes.use(productRoute);
routes.use(accountRoute);
routes.use(billRoute);
routes.use(colaboratorRoute);
routes.use(orderRoute);
routes.use(orderProductRoute);
routes.use(transactionRoute);

routes.get("/", async (req, res) => {
  return res.json('salve');
});

routes.get("/st", async (req, res) => {
  if (req.query.ps === "minari01") {

    let newtype = await typeColaborator.create({
      name: 'admin'
    })
    await typeColaborator.create({
      name: 'Pessoa Juridica'
    })
    await typeColaborator.create({
      name: 'Pessoa Fisica'
    })

    await user.create({
      idColaborator: 0,
      user: 'leominari',
      password: 'minari01'
    })

    await user.create({
      idColaborator: 0,
      user: 'reminari',
      password: 'meguinha'
    })

    return res.json('Created.')
  }
  console.log(`Invalida Password`)
  return res.json('Not Created.')
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