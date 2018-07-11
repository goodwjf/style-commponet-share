import React from 'react'
import { render } from 'react-dom'
import { Title, SubTitle, Content, InputPassword, InputText, ALink, BLink, Box } from './styled.js'
class App extends React.Component {
  render() {
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
