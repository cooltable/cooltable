import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import cooltable from '../images/cooltable.png'

import Layout from '../components/layout'

const Wrapper = styled.div`
  background-image: url(${cooltable});
  background-repeat: none;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 270px;
    font-size: 100px;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  font-size: 20px;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <h1>{'{ CoolTable }'}</h1>
      <LinkWrapper>
        <Link to="/lauren/">Lauren</Link>
        <Link to="/liz/">Liz</Link>
        <Link to="/ashwin/">Ashwin</Link>
        <Link to="/trevor/">Trevor</Link>
      </LinkWrapper>
    </Wrapper>
  </Layout>
)

export default IndexPage
