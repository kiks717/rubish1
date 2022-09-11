import React from 'react'
import {FaTwitter,FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { StyledSocialIcons } from '../styled/SocialIcons.styled'

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com"><FaTwitter/></a>
      </li>
      <li>
        <a href="https://facebook.com"><FaFacebook/></a>
      </li>
      <li>
        <a href="https://linkedin.com"><FaLinkedin/></a>
      </li>
      <li>
        <a href="https://instagram.com"><FaInstagram/></a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons
