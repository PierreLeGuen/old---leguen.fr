import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

const ContactSocialWrapper = styled.div`
  text-align: center;
`

const Button = styled(AwesomeButton)`
  margin: 14px 3px !important;
  .aws-btn__content {
    padding: 0 15px !important;
  }
  img {
    width: 25px;
    height: 25px;
    margin: 0;
    position: relative;
    top: 2px;
  }
`

export default props => (
  <ContactSocialWrapper>
    <Button
      type="github"
      size="small"
      href="/g"
      title="Github - Pierre Le Guen"
      target="_blank"
    >
      <img src="https://icongr.am/fontawesome/github.svg?color=ffffff" title="Github - Pierre Le Guen" alt="img" />
    </Button>
    <Button
      type="twitter"
      size="small"
      href="/t"
      title="Twitter - Pierre Le Guen"
      target="_blank"
    >
      <img src="https://icongr.am/fontawesome/twitter.svg?color=ffffff" title="Twitter - Pierre Le Guen" alt="img" />
    </Button>
    <Button
      type="linkedin"
      size="small"
      href="/l"
      title="Linkedin - Pierre Le Guen"
      target="_blank"
    >
      <img src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff" title="Linkedin - Pierre Le Guen" alt="img" />
    </Button>
  </ContactSocialWrapper>
)
