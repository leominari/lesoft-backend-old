module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    idColaborator: DataTypes.BIGINT,
    idSalesman: DataTypes.BIGINT
  });

  return Order;
}