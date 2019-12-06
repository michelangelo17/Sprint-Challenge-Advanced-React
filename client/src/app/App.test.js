import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

test('renders app without crashing', () => {
  render(<App />)
})

test('contains the site title', () => {
  const { getByText } = render(<App />)
  getByText(/Most Popular Women's World Cup Players/i)
})