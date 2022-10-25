// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Puppet Top Theater">
      <p>A theater with puppets in a big ol' tent</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Puppet Top Theater</title>

// Step 3: Export your component
export default IndexPage