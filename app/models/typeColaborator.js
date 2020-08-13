module.exports = (sequelize, DataTypes) => {
  const typeColaborator = sequelize.define('typeColaborator', {
    name: DataTypes.STRING
  });

  return typeColaborator;
}