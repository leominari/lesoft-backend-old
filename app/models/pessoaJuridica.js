module.exports = (sequelize, DataTypes) => {
  const pessoaJuridica = sequelize.define('pessoaJuridica', {
    idAddress: DataTypes.BIGINT,
    idColaborator: DataTypes.BIGINT,
    NomeFantasia: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    InscricaoEstadual: DataTypes.STRING,
    ContribuinteICMS: DataTypes.BOOLEAN,
    ConsumidorFinal: DataTypes.BOOLEAN,
    InscricaoMunicipal: DataTypes.STRING,
    Telefone: DataTypes.STRING,
    Celular: DataTypes.STRING,
    Email: DataTypes.STRING,
    Observacao: DataTypes.STRING,
  });

  return pessoaJuridica;
}