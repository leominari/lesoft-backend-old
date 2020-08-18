const routes = require('express').Router();

const { userToken,
  sequelize } = require('../../app/models');
const { QueryTypes } = require('sequelize');




routes.get("/orderproduct/:id", async (req, res) => {
  const { token } = req.query;
  const idOrder = req.params.id;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {

    const consult = await sequelize.query(
      `SELECT p.id as 'key',
              p.name as 'name',
              op.productPrice as 'price',
              op.quantity as 'quantity'        
      FROM  orderProducts as op,
            products as p
      WHERE op.idOrder = ${idOrder} AND p.id = op.idProduct`, { type: QueryTypes.SELECT })
    return res.json(consult)
  }
  return res.json([]);
});


module.exports = routes