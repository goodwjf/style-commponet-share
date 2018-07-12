import React from 'react'
import { render } from 'react-dom'
import { Title, SubTitle, Content, InputPassword, InputText, ALink, BLink, Box } from './styled.js'
class App extends React.Component {
  render() {
    return (
      <Box color='red'>
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>
        <Content>
          <InputText placeholder='InputText'/>
          <InputPassword placeholder='InputPassword'/>
          <ALink className='link'>Alink</ALink>
          <BLink>Blink</BLink>
          <div>Content</div>
        </Content>
      </Box>
    )
  }
}

render(<App />, document.getElementById('root'))
