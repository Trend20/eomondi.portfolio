import React from 'react'
import Start from './Start'

describe('<Start />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Start />)
  })
})