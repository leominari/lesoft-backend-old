const routes = require('express').Router();
const { colaborator,
  userToken,
  address,
  pessoaFisica,
  sequelize } = require('../../app/models');

const { QueryTypes } = require('sequelize');

routes.get("/colaborator", async (req, res) => {
  const { token } = req.query;
  const verifTk = await userToken.findAll({
    where: {
      token: token
    }
  });
  if (verifTk && verifTk[0].valid) {
    const colaborators = await sequelize.query(
      `SELECT  c.id AS id,
      c.name AS name,
      ct.name AS typeName
          FROM colaborators AS c,
            typeColaborators AS ct
          WHERE c.idTypeColaborator = ct.id`, { type: QueryTypes.SELECT })
    return res.json(colaborators);
  }
  return res.json([]);
})

routes.post("/colaborator", async (req, res) => {
  const { token } = req.body;
  let verifTk
  if (token) {
    verifTk = await userToken.findAll({
      where: {
        token: token
      }
    });
  }
  
  if (verifTk && verifTk[0].valid) {
    const {
      razaoSocial,
      name,
      nomeFantasia,
      cnpj,
      ie,
      im,
      icms,
      consumidorFinal,
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      country,
      phone,
      celular,
      email,
      observation
    } = req.body;
    if(razaoSocial){

    }
    let newAddress = await address.create({
      cep: cep,
      rua: street,
      numero: number,
      complemento: complement,
      bairro: neighborhood,
      cidade: city,
      estado: state,
      pais: country
    });

    let newColaborator = await colaborator.create({
      idAddress: newAddress.id,
      idColaborator: newColaborator.id,
      NomeFantasia: nomeFantasia,
      CNPJ: cnpj,
      InscricaoEstadual: ie,
      ContribuinteICMS: icms,
      ConsumidorFinal: consumidorFinal,
      InscricaoMunicipal: im,
      Telefone: phone,
      Celular: celular,
      Email: email,
      Observacao: observation
    });

    return res.json({ 'newPJ': newPessoaJuridica })
  }
  return res.json({ 'all_colaborators': [] });
})


module.exports = routes