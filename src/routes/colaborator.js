const routes = require('express').Router();
const { colaborator,
  userToken } = require('../../app/models');

routes.get("/colaborator", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const colaborators = await colaborator.findAll();
    return res.json(colaborators);
  }
  return res.json([]);
})

routes.post("/colaborator", async (req, res) => {
  const { name, type, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    await colaborator.create({
      name: name,
      type: type
    });
    if (newColaborator) {
      return res.json({ 'all_colaborators': await colaborator.findAll() });
    }
  }
  return res.json({ 'all_colaborators': [] });
})


module.exports = routes