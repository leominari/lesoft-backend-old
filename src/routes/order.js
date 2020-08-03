const routes = require('express').Router();

const { userToken,
  order,
  orderProduct,
  sequelize } = require('../../app/models');
const { QueryTypes } = require('sequelize');



routes.get("/order", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(
      await sequelize.query(
        `SELECT o.id, 
              c.name AS Client, 
              s.name AS Salesman, 
              o.createdAt AS createDate, 
              o.status AS status,
              (
                SELECT SUM((op.productPrice * op.quantity)) 
                       FROM orderProducts AS op 
                       WHERE o.id = op.idOrder
              ) AS price 
            FROM orders AS o, 
                 colaborators AS c, 
                 colaborators AS s 
            WHERE c.id = o.idColaborator AND 
                  s.id = o.idSalesman`, { type: QueryTypes.SELECT })
    );
  }
  return res.json([]);
});

routes.post("/order", async (req, res) => {
  const { idClient, idSalesman, products, status, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newOrder = await order.create({
      idColaborator: idClient,
      idSalesman: idSalesman,
      status: status
    })
    products.forEach(async (element) => {
      await orderProduct.create({
        idOrder: newOrder.id,
        idProduct: element.key,
        productPrice: element.price,
        quantity: element.quantity
      })
    });
    return res.json(true);
  }
  return res.json(false);
});


module.exports = routes