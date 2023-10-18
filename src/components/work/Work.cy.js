import React from 'react'
import Work from './Work'

describe('<Work />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Work />)
  })
})