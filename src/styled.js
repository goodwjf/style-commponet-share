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
    color: coral;
  }
`

export const InputText = styled.input.attrs({ type: 'text' })`
  margin: 5px;
  padding: 5px;
  border: 1px solid yellowgreen;
`

export const InputPassword = styled.input.attrs({ type: 'password' })`
  margin: 5px;
  border: 1px solid ridge;
  padding: 5px;
`

// 第三方组件
export const Link = ({ className, children }) => (
  <a className={className} href='#'>
    {children}
  </a>
)

export const ALink = styled(Link).attrs({ className: 'link' })`
  color: tan;
  display:block;
`

export const BLink = ALink.extend`
  color: skyblue;
`