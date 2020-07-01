module.exports = (sequelize, DataTypes) => {
  const Colaborator = sequelize.define('colaborator', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  });

  return Colaborator;
}