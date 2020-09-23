const routes = require('express').Router();

const { userToken,
  planoContas,
  sequelize } = require('../../app/models');

const { QueryTypes } = require('sequelize');



routes.get("/pc/:id", async (req, res) => {
  const { token } = req.query;
  const idAccount = req.params.id;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await planoContas.findAll({
      where: {
        idAccount: idAccount
      }
    }))
  }
  return res.json([]);
});

routes.get("/pc", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {

    return res.json(
      await sequelize.query(
        `SELECT	* 
          FROM planocontas`, { type: QueryTypes.SELECT })
    );
  }
  return res.json([]);
});

routes.post("/pc", async (req, res) => {
  const { idPai, descricao, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newPlanoConta = await planoContas.create({
      idPai: idPai,
      descricao: descricao,
    });
    return res.json(true);
  }
  return res.json(false);

});


module.exports = routes
