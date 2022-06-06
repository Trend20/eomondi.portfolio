import React from 'react'
import styled from 'styled-components'

const Footer = () =>{
  return (
    <FooterContainer className='footer'>
      <p>Built Enock Omondi ©2022 </p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 20px 0px;
color: #8892b0;

p{
  font-size: 0.7rem;
  z-index: 10;
  text-align: justify;
  text-indent: 20px;
  color: #cc2121;
}
`

export default Footer