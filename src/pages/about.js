import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Puppet Top Theater">
      <p>Hi there!</p>
    </Layout>
  )
}

export const Head = () => (
    <>
      <title>About Puppet Top Theater</title>
      <meta name="description" content="Your description" />
    </>
  )

export default AboutPage