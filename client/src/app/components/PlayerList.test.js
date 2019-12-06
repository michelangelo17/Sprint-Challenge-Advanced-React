import React from 'react'
import { render } from '@testing-library/react'
import PlayerList from './PlayerList'

const mockStateProps = { players: [] }

test('renders without crashing', () => {
  render(<PlayerList players={mockStateProps.players} />)
})
