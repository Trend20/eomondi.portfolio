import React from 'react'
import AboutMe from './AboutMe'

describe('<AboutMe />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutMe />)
  })
})