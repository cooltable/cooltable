import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to CoolTable</h1>
    <p>Where we build things</p>
    <p>n shit</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
