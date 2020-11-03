module.exports = (sequelize, DataTypes) => {
  const planoConta = sequelize.define('planoContas', {
    codigoPai: DataTypes.STRING,
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
  });

  return planoConta;
}