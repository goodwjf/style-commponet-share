import React from 'react'
import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const Box = styled.div`
  border: 1px solid ${props => props.color};
  margin: auto;
  padding: 10px;
  width: 300px;
  text-align: center;
  animation: 1s ${FadeIn} ease-out;
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`
// 更改标签类型
export const SubTitle = Title.withComponent('div')

export const Content = styled.div`
  div {
    color: blue;
  }
`

export const InputText = styled.input.attrs({ type: 'text' })`
  color: green;
`

export const InputPassword = styled.input.attrs({ type: 'password' })`
  color: red;
`

// 第三方组件
export const Link = ({ className, children }) => (
  <div>
    <a className={className} href='#'>
      {children}
    </a>
  </div>
)

export const ALink = styled(Link).attrs({ className: 'link' })`
  color:red;
`

export const BLink = ALink.extend`
  color: blue;
`