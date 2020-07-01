module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('orderProduct', {
    idOrder: DataTypes.BIGINT,
    idProduct: DataTypes.BIGINT,
    productPrice: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
  });

  return OrderProduct;
}