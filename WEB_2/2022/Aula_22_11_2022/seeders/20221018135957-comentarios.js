'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('comentarios', [
    {
      usuarioId: 1,
      comentario: 'Comentário do Fulano'
    },
    {
      usuarioId: 2,
      comentario: 'Fulano, seu comentário é muito ruim!'
    },
    {
      usuarioId: 3,
      comentario: 'Só li verdades.'
    }
    
  ], {});
    
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comentarios', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
