import React from 'react'
import Experience from './Experience'

describe('<Experience />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Experience />)
  })
})