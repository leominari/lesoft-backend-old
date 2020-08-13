module.exports = (sequelize, DataTypes) => {
  const pessoaFisica = sequelize.define('pessoaFisica', {
    idAddress: DataTypes.BIGINT,
    idColaborator: DataTypes.BIGINT,
    CPF: DataTypes.STRING,
    RG: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    telefone: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
    observacao: DataTypes.STRING,
  });

  return pessoaFisica;
}

