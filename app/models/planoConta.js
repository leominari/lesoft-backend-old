module.exports = (sequelize, DataTypes) => {
  const PlanoConta = sequelize.define('planoConta', {
    descricao: DataTypes.STRING,
    idPai: DataTypes.BIGINT,
    descricao: DataTypes.STRING,
  });

  return PlanoConta;
}