module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('pessoaJuridicas', {
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
      NomeFantasia: {
        allowNull: false,
        type: DataTypes.STRING
      },
      CNPJ: {
        allowNull: false,
        type: DataTypes.STRING
      },
      InscricaoEstadual: {
        allowNull: true,
        type: DataTypes.STRING
      },
      ContribuinteICMS: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
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
    return queryInterface.dropTable('pessoaJuridicas');
  }
};