import React, { Component } from 'react'
import { H1 } from './emotionalThings/EmoTools'
import EmoGlobal from './emotionalThings/EmoGlobal'
import axios from 'axios'
import PlayerList from './components/PlayerList'

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
        <H1>Most Popular Women's World Cup Players</H1>
        <PlayerList players={this.state.players} />
      </>
    )
  }
}

export default App
