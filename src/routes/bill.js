const routes = require('express').Router();

const { userToken,
  bill2 } = require('../../app/models');



routes.get("/bill2", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await bill2.findAll())
  }
  return res.json([]);
});

routes.post("/bill2", async (req, res) => {
  const { date, description, value, type, idAccount, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newBill2 = await bill2.create({
      idAccount: idAccount,
      description: description,
      date: date,
      value: value,
      type: type
    })
    return res.json(true);
  }
  return res.json(false);

});



module.exports = routes