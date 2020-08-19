module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('bill', {
    idAccount: DataTypes.BIGINT,
    idColaborator: DataTypes.BIGINT,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    observation: DataTypes.STRING
  });

  return Bill;
}