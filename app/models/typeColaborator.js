module.exports = (sequelize, DataTypes) => {
  const TypeColaborator = sequelize.define('typeColaborator', {
    name: DataTypes.STRING
  });

  return TypeColaborator;
}