module.exports = (sequelize, DataTypes) => {
  const Colaborador = sequelize.define('colaborador', {
    Identificador: DataTypes.STRING,
    Name: DataTypes.STRING,
    NomeFantasia: DataTypes.STRING,
    RG: DataTypes.STRING,
    Sexo: DataTypes.STRING,
    InscricaoEstadual: DataTypes.STRING,
    ContribuinteICMS: DataTypes.BOOLEAN,
    DataNascimento: DataTypes.DATE,
    ConsumidorFinal: DataTypes.BOOLEAN,
    InscricaoMunicipal: DataTypes.STRING,
    idEndereco: DataTypes.BIGINT,
    Telefone: DataTypes.STRING,
    Celular: DataTypes.STRING,
    Email: DataTypes.STRING,
    Observacao: DataTypes.STRING,
  });

  return Colaborador;
}