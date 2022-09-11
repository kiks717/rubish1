import React from 'react'
import { Container } from '../styled/Container.styled'
import { Nav, StyledHeader,Logo, Image } from '../styled/Header.styled'
import { Button } from '../styled/Button.styled'
import logo from '../images/logo.svg'
import mockups from '../images/illustration-mockups.svg'
import { Flex } from '../styled/Flex.styled'
function Header() {
  return (
    <StyledHeader>
      <Container>
      <Nav>
        <Logo src={logo} alt=""/>
        <Button>Try free</Button>
      </Nav>
      <Flex>
        <div>
          <h1>Build The Comunity Your Fans Will Love</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque asperiores repellendus minus obcaecati consequatur est, debitis tempora aperiam sapiente.</p>
          <Button bg='#ff0099' color="#fff">Get Started for FREE</Button>
        </div>
        
        <Image src={mockups} alt=""/>
      </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
