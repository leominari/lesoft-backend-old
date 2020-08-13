module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('pessoaFisicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      idColaborator: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      CPF: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      RG: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      idAddress: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      celular: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      observacao: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('pessoaFisicas');
  }
};