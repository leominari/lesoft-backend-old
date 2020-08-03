const routes = require('express').Router();

const { userToken,
  account } = require('../../app/models');


routes.post("/account", async (req, res) => {
  const { name, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    await account.create({
      name: name
    })
    return res.json({
      'all_accounts': await account.findAll()
    });
  }
  return res.json({ 'all_accounts': [] });

});

routes.get("/account", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await account.findAll());
  }
  return res.json([]);
});



module.exports = routes