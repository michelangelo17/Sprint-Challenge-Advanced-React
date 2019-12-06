import React from 'react'
import { render } from "@testing-library/react";
import PlayerList from './PlayerList';

const mockStateProps = {players: []}

test('renders without crashing', () => {
  render(<PlayerList players={mockStateProps.players}/>)
});

test('should map over an array and render a card for each player', () => {
  const { getByText } = render(<PlayerList players={mockStateProps.players}/>)
});