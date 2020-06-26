const routes = require('express').Router();
const crypto = require('crypto');


const User = require('./models/User');
const Colaborator = require('./models/Colaborator');
const UserToken = require('./models/UserToken');

routes.get("/", async (req, res) => {
  return res.json('salve');
});

routes.get("/st", async (req, res) => {
  if(req.query.ps === "minari01"){
    const colaborator = await Colaborator.create({
      name: 'Leonardo Minari',
      type: 'cliente-pj'
    });
    const user = await User.create({
      idColaborator: colaborator._id,
      user: "leominari",
      password: "minari01"
    });
    console.log(`Created: ${user}`)
    return res.json('salve')
  }
  console.log(`Invalida Password`)
  return res.json('not salve')
})

routes.get("/users", async (req, res) => {
  const user = await User.find({
    user: "leominari"
  });
  const colaborator = await Colaborator.find({
    _id: user.idColaborator
  })
  return res.json(colaborator)
})

routes.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const busca = await User.find({user: username})
  
  if(busca.length > 0){
    if(busca[0].password === password){
      const token = crypto.randomBytes(32).toString('hex');
      await UserToken.create({ idUser: busca[0]._id, token: token, valid: true})
      return res.json({ token: token });
    }
    return res.json('senha errada');
  }

  return res.json('username errado');
})

routes.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const busca = await User.find({user: username})
  
  if(busca.length > 0){
    if(busca[0].password === password){
      const token = crypto.randomBytes(32).toString('hex');
      await UserToken.create({ idUser: busca[0]._id, token: token, valid: true})
      return res.json({ token: token });
    }
    return res.json('senha errada');
  }

  return res.json('username errado'); 
})

routes.post("/logout", async (req, res) => {
  const { token } = req.body;
  const update = await UserToken.findOneAndUpdate({token: token}, {valid: false})
  return res.json(true);
})

module.exports = routes;