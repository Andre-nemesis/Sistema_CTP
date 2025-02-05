'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CondicaoAlunos', {
      condicao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Condicoes', 
          key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Alunos', 
          key: 'matricula' 
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
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
    await queryInterface.addConstraint('CondicaoAlunos', {
      type: 'primary key',
      fields: ['condicao_id', 'matricula']
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CondicaoAlunos');
  }
};