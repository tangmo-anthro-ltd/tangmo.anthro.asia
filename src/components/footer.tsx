import * as React from 'react'
import { Container } from "react-bootstrap"
import { FormattedMessage } from "gatsby-plugin-intl"

export function Footer() {
  return (
    <Container>
      <hr style={{marginTop: '4rem'}}/>
      <p>©2021<FormattedMessage id="footer.note" values={{'uwuifier': <a href="https://www.npmjs.com/package/@zuzak/owo" rel="noreferrer noopener">@zuzak/owo</a>}}/></p>
    </Container>
  )
}
