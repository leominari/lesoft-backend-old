module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transaction', {
    idAccount: DataTypes.BIGINT,
    description: DataTypes.STRING,
    value: DataTypes.DOUBLE
  });

  return Transaction;
}