import React from 'react'
import styled, { keyframes } from 'styled-components'
import { render } from 'react-dom'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Box = styled.div`
  border: 1px solid ${props => props.color};
  margin: auto;
  padding: 10px;
  width: 300px;
  text-align: center;
  animation: 1s ${FadeIn} ease-out;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`
// 更改标签类型
const SubTitle = Title.withComponent('div')

const Content = styled.div`
  div {
    color: blue;
  }
`

const InputText = styled.input.attrs({type: 'text'})`
  color: green;
`

const InputPassword = styled.input.attrs({type: 'password'})`
  color: red;
`

// 第三方组件
const Link = ({ className, children }) => (
  <div>
    <a className={className} href='#'>
      {children}
    </a>
  </div>
)

const ALink = styled(Link).attrs({className: 'link'})`
  color:red;
`

const BLink = ALink.extend`
  color: blue;
`

class App extends React.Component {
  render () {
    return (
      <Box color='red'>
        <Title>hello word</Title>
        <SubTitle>happy</SubTitle>
        <Content>
          <InputText />
          <InputPassword />
          <ALink className='link'>Alink</ALink>
          <BLink>Blink</BLink>
          <div>content</div>
        </Content>
      </Box>
    )
  }
}

render(<App />, document.getElementById('root'))
