module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    name: DataTypes.STRING
  });

  return Account;
}