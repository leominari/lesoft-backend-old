module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('userTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      idUser: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      token: {
        allowNull: false,
        type: DataTypes.STRING
      },
      valid: {
        allowNull: false,
        type: DataTypes.BOOLEAN
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
    return queryInterface.dropTable('userTokens');
  }
};