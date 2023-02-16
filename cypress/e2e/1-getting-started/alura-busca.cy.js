describe('alura-busca-cursos', () => {

  beforeEach(() => {
    cy.visit('https://www.alura.com.br')

  })

  it('Buscar curso de Java', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('PHYTON');

  })

})