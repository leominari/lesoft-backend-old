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

    let colab = await colaborator.create({
      name: 'Leonardo Minari',
      idTypeColaborator: newtype.id
    })

    let admin = await user.create({
      idColaborator: colab.id,
      user: 'leominari',
      password: 'minari01'
    })

    return res.json({
      'admin': admin.user
    })
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