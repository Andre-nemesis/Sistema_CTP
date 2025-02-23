'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IntervencaoDemanda', {
      intervencao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Intervencaos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      demanda_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Demandas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('IntervencaoDemanda', {
      type: 'primary key',
      fields: ['intervencao_id', 'demanda_id', 'usuario_id']
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IntervencaoDemanda');
  }
};