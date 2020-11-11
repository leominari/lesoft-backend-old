module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('colaborators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      Identificador: {
        allowNull: false,
        type: DataTypes.STRING
      },
      Name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      NomeFantasia: {
        allowNull: false,
        type: DataTypes.STRING
      },
      RG: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      Gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      InscricaoEstadual: {
        allowNull: true,
        type: DataTypes.STRING
      },
      ContribuinteICMS: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      BirthDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      ConsumidorFinal: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      InscricaoMunicipal: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      idAddress: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      Telefone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Celular: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      Email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      Observacao: {
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
    return queryInterface.dropTable('colaborators');
  }
};