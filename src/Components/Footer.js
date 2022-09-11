import React from 'react'
import { Container } from '../styled/Container.styled'
import { Flex } from '../styled/Flex.styled'
import logoWhite from '../images/logo_white.svg'
import { StyledFooter } from '../styled/Footer.styled'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <StyledFooter>
        <Container>
        <img src={logoWhite} alt="" />
        <Flex>
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

        <SocialIcons/>

        </Flex>
        <p>&copy; 2022 Huddle. All right reserved</p>
    </Container>
    </StyledFooter>
    
  )
}

export default Footer
