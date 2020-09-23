module.exports = (sequelize, DataTypes) => {
  const planoConta = sequelize.define('planoContas', {
    idPai: DataTypes.BIGINT,
    descricao: DataTypes.STRING,
  });

  return planoConta;
}