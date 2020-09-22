const routes = require('express').Router();

const { userToken,
  PlanoConta } = require('../../app/models');



routes.get("/pc/:id", async (req, res) => {
  const { token } = req.query;
  const idAccount = req.params.id;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await PlanoConta.findAll({
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
    return res.json(await PlanoConta.findAll());
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
    const newPlanoConta = await PlanoConta.create({
      idPai: idPai,
      descricao: descricao,
    })
    console.log(newPlanoConta);
    return res.json(true);
  }
  return res.json(false);

});


module.exports = routes
