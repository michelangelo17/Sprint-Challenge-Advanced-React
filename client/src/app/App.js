import React, { Component } from 'react'
import { H1, FlexContainer } from './emotionalThings/EmoTools'
import EmoGlobal from './emotionalThings/EmoGlobal'
import axios from 'axios'
import PlayerList from './components/PlayerList'
import DarkModeSwitch from './components/DarkModeSwitch'

class App extends Component {
  _isMounted = false
  state = {
    players: [],
  }
  componentDidMount() {
    this._isMounted = true
    axios
      .get('http://localhost:5000/api/players')
      .then(res => this._isMounted && this.setState({players: res.data}))
      .catch(err => console.log(err))
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    return (
      <>
        <EmoGlobal />
        <FlexContainer fdc aic>
        <DarkModeSwitch />
        <H1 m='20px'>Most Popular Women's World Cup Players</H1>
        <PlayerList players={this.state.players} />
        </FlexContainer>
      </>
    )
  }
}

export default App
