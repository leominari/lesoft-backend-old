module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('orderProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      idOrder: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      idProduct: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      productPrice: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
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
    return queryInterface.dropTable('orderProducts');
  }
};