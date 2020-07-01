module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    unity: DataTypes.STRING,
  });

  return Product;
}