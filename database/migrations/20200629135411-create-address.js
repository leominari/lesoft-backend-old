module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('addresss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      cep: {
        allowNull: false,
        type: DataTypes.STRING
      },
      rua: {
        allowNull: false,
        type: DataTypes.STRING
      },
      numero: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      complemento: {
        allowNull: false,
        type: DataTypes.STRING
      },
      bairro: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cidade: {
        allowNull: false,
        type: DataTypes.STRING
      },
      estado: {
        allowNull: false,
        type: DataTypes.STRING
      },
      pais: {
        allowNull: false,
        type: DataTypes.STRING
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
    return queryInterface.dropTable('address');
  }
};