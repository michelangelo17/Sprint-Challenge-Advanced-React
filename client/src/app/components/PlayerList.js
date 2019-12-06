import React from 'react'
import { H2, P, FlexContainer } from '../emotionalThings/EmoTools'

const PlayerList = props => {
  return (
    <>
      <H2>Ranking:</H2>
      {props.players.map(player => (
        <FlexContainer key={player.id}>
          <P>{player.name}</P>
          <P>{player.country}</P>
        </FlexContainer>
      ))}
    </>
  )
}

export default PlayerList
