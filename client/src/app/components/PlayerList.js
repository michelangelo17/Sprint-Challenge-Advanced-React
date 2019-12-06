import React from 'react'
import { H2, P, FlexContainer } from '../emotionalThings/EmoTools'

const PlayerList = props => {
  return (
    <>
      <H2 m='20px'>Ranking by Search Interest:</H2>
      <FlexContainer jcc fw>
      {props.players.map(player => (
        <FlexContainer w='450px' white p='30px' br='5px' bs fdc aic m='20px' key={player.id}>
        <P m='5px'>Rank: #{++player.id}</P>
          <P m='5px'>{player.name}</P>
          <P m='5px'>{player.country}</P>
          <P m='5px'>Google Trends Search Score: {player.searches}</P>
        </FlexContainer>
      ))}
      </FlexContainer>
    </>
  )
}

export default PlayerList
