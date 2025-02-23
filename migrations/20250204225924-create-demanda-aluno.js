'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DemandaAlunos', {
      demanda_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Demandas',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Alunos',
          key: 'matricula',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      disciplina: {
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
    await queryInterface.addConstraint('DemandaAlunos', {
      type: 'primary key',
      fields: ['demanda_id', 'aluno_id']
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DemandaAlunos');
  }
};