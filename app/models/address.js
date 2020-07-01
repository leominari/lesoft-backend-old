module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address', {
    cep: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    pais: DataTypes.STRING,
  });

  return Address;
}