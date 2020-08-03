module.exports = (sequelize, DataTypes) => {
  const Colaborator = sequelize.define('colaborator', {
    idAdress: DataTypes.BIGINT,
    idTypeColaborator: DataTypes.BIGINT
  });

  return Colaborator;
}