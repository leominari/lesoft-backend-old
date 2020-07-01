module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('bill2s', {
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
        allowNull: false,
        type: DataTypes.STRING
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      value: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },
      type: {
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
    return queryInterface.dropTable('bill2s');
  }
};