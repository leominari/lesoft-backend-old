module.exports = (sequelize, DataTypes) => {
  const Bill2 = sequelize.define('bill2', {
    idAccount: DataTypes.BIGINT,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    type: DataTypes.STRING
  });

  return Bill2;
}