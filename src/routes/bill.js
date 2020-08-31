const routes = require('express').Router();

const { userToken,
  bill, 
  sequelize} = require('../../app/models');
const { QueryTypes } = require('sequelize');



routes.get("/bill", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(
      await sequelize.query(
        `SELECT	b.id,
                ac.name as accountName,
                co.name as colaboratorName,
                b.type,
                b.date,
                b.value
        FROM	bills as b,
              accounts as ac,
              colaborators as co
        WHERE	b.idColaborator = co.id AND 
              b.idAccount = ac.id`, { type: QueryTypes.SELECT })
    )
  }
  return res.json([]);
});

routes.post("/bill", async (req, res) => {
  const { date, observation, idColaborator, value, type, idAccount, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newBill = await bill.create({
      idAccount: idAccount,
      idColaborator: idColaborator,
      date: date,
      value: value,
      type: type,
      observation: observation
    })
    return res.json(true);
  }
  return res.json(false);

});

routes.put("/bill", async (req, res) =>{
  res.json('put')
});

routes.delete("/bill", async (req, res) =>{
  res.json('delete')
});

module.exports = routes