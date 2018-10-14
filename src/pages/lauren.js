import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
`

const Lauren = () => (
  <Wrapper>
    Coming soon!
    <Link to="/">Home</Link>
  </Wrapper>
)

export default Lauren
