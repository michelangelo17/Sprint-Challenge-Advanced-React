import React from 'react'
import App from './App'
import { render, wait } from '@testing-library/react'

test('renders app without crashing', () => {
  render(<App />)
})

test('contains the site title', () => {
  const { getByText } = render(<App />)
  getByText(/Most Popular Women's World Cup Players/i)
})

test('it displays multiple names from api', async () => {
  const { getByText } = render(<App />)
  await wait(() => getByText(/alex morgan/i))
  await wait(() => getByText(/kosovare asllani/i))
})