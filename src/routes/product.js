const routes = require('express').Router();
const { product,
  userToken } = require('../../app/models');


routes.get("/product", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const products = await product.findAll();
    return res.json(products);
  }
  return res.json([]);
})

routes.post("/product", async (req, res) => {
  const { name, value, unity, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newProduct = await product.create({
      name: name,
      value: value,
      unity: unity
    });
    if (newProduct) {
      return res.json({ 'all_products': await product.findAll() });
    }
  }
  return res.json({ 'all_products': [] });
})

module.exports = routes