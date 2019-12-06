import React from 'react'
import { render } from '@testing-library/react'
import PlayerList from './PlayerList'

const mockStateProps = {
  players: [
    {
      id: 0,
      name: 'Alex Morgan',
      country: 'United States',
      searches: 100,
    },
  ],
}

test('renders without crashing', () => {
  render(<PlayerList players={mockStateProps.players} />)
})

test('should render a card for each player', () => {
  const { getByTestId } = render(
    <PlayerList players={mockStateProps.players} />
  )
  const firstCard = getByTestId('card-0')
  expect(firstCard).toBeTruthy()
})