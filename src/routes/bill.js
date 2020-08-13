const routes = require('express').Router();

const { userToken,
  bill } = require('../../app/models');



routes.get("/bill", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await bill.findAll())
  }
  return res.json([]);
});

routes.post("/bill", async (req, res) => {
  const { date, description, value, type, idAccount, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newBill = await bill.create({
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