module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    idColaborator: DataTypes.BIGINT,
  });

  return User;
}