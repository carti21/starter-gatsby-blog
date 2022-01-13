import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by <a href="https://contentful.com/">SLACKA</a> {' '}
      <a href="https://gatsbyjs.com"></a> &middot;{' '}
      <a href="https://github.com/contentful/starter-gatsby-blog">Source Code</a>
    </div>
  </Container>
)

export default Footer
