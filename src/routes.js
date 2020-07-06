const routes = require('express').Router();
const crypto = require('crypto');


// const Colaborator = require('./models/Colaborator');
// const UserToken = require('./models/UserToken');
// const Product = require('./models/Product');

const { user,
  colaborator,
  product,
  userToken,
  account,
  order,
  orderProduct,
  sequelize,
  bill2,
  transaction } = require('../app/models');
const { QueryTypes } = require('sequelize');

routes.get("/", async (req, res) => {
  return res.json('salve');
});

routes.get("/st", async (req, res) => {
  if (req.query.ps === "minari01") {
    // let newColaborator = await colaborator.create({
    //   name: 'Leonardo Minari',
    //   type: 'client-pj'
    // })

    // await user.create({
    //   idColaborator: newColaborator.id,
    //   user: 'leominari',
    //   password: 'minari01'
    // })


    // newColaborator = await colaborator.create({
    //   name: 'Renato Minari',
    //   type: 'client-pj'
    // })

    // await user.create({
    //   idColaborator: newColaborator.id,
    //   user: 'reminari',
    //   password: 'meguinha'
    // })

    await product.create({
      name: 'Café Balaio',
      value: 5.50,
      unity: 'kg'
    })

    await product.create({
      name: 'Café Lenhador',
      value: 5.50,
      unity: 'kg'
    })


    return res.json('salve')
  }
  console.log(`Invalida Password`)
  return res.json('not salve')
})

routes.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await user.findAll({
    where: {
      user: username
    }
  });
  if (result.length > 0) {
    if (result[0].password === password) {
      const token = crypto.randomBytes(32).toString('hex');
      const newToken = await userToken.create({
        idUser: result[0].id,
        token: token,
        valid: true
      });
      return res.json({ token: newToken.token });
    }
    return res.json('senha errada');
  }

  return res.json('username errado');
});

routes.post("/logout", async (req, res) => {
  const { token } = req.body;
  await userToken.update({ valid: false }, {
    where: {
      token: token
    }
  });
  return res.json(true);
});

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



routes.get("/transaction/:id", async (req, res) => {
  const { token } = req.query;
  const idAccount = req.params.id;
  console.log(idAccount)
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    return res.json(await transaction.findAll({
      where: {
        idAccount: idAccount
      }
    }))
  }
  return res.json([]);
});

routes.post("/transaction", async (req, res) => {
  const { idAccount, description, value, token } = req.body;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const newTransaction = await transaction.create({
      idAccount: idAccount,
      description: description,
      value: value,
    })
    return res.json(true);
  }
  return res.json(false);

});



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
      WHERE op.id = ${idOrder} AND p.id = op.idProduct`, { type: QueryTypes.SELECT })

    return res.json(consult)
  }
  return res.json([]);
});


module.exports = routes;