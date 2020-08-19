module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('bills', {
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
      idColaborator: {
        allowNull: false,
        type: DataTypes.BIGINT
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
      observation: {
        allowNull: true,
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
    return queryInterface.dropTable('bills');
  }
};