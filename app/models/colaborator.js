module.exports = (sequelize, DataTypes) => {
  const Colaborator = sequelize.define('colaborator', {
    name: DataTypes.STRING,
    idTypeColaborator: DataTypes.BIGINT
  });

  return Colaborator;
}