module.exports = (sequelize, DataTypes) => {
  const UserToken = sequelize.define('userToken', {
    idUser: DataTypes.BIGINT,
    token: DataTypes.STRING,
    valid: DataTypes.BOOLEAN
  });

  return UserToken;
}