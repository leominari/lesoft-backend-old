module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('bill', {
    idAccount: DataTypes.BIGINT,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    type: DataTypes.STRING
  });

  return Bill;
}