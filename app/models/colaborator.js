module.exports = (sequelize, DataTypes) => {
  const Colaborator = sequelize.define('colaborator', {
    Identificador: DataTypes.STRING,
    Name: DataTypes.STRING,
    NomeFantasia: DataTypes.STRING,
    RG: DataTypes.STRING,
    Gender: DataTypes.STRING,
    InscricaoEstadual: DataTypes.STRING,
    ContribuinteICMS: DataTypes.BOOLEAN,
    BirthDate: DataTypes.DATE,
    ConsumidorFinal: DataTypes.BOOLEAN,
    InscricaoMunicipal: DataTypes.STRING,
    idAddress: DataTypes.BIGINT,
    Telefone: DataTypes.STRING,
    Celular: DataTypes.STRING,
    Email: DataTypes.STRING,
    Observacao: DataTypes.STRING,
  });

  return Colaborator;
}