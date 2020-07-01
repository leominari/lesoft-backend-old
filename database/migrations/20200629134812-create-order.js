module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      idColaborator: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      idSalesman: {
        allowNull: false,
        type: DataTypes.BIGINT
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
    return queryInterface.dropTable('orders');
  }
};