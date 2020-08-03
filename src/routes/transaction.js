const routes = require('express').Router();

const { userToken,
  transaction } = require('../../app/models');



routes.get("/transaction/:id", async (req, res) => {
  const { token } = req.query;
  const idAccount = req.params.id;
  console.log(idAccount)
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await transaction.findAll({
      where: {
        idAccount: idAccount
      }
    }))
  }
  return res.json([]);
});

routes.post("/transaction", async (req, res) => {
  const { idAccount, description, value, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newTransaction = await transaction.create({
      idAccount: idAccount,
      description: description,
      value: value,
    })
    return res.json(true);
  }
  return res.json(false);

});


module.exports = routes
