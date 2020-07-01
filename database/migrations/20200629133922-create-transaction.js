module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      idAccount: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      value: {
        allowNull: false,
        type: DataTypes.DOUBLE
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
    return queryInterface.dropTable('transactions');
  }
};