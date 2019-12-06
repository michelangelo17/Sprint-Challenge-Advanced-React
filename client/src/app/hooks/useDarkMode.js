import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react'
import { styleVariables } from '../emotionalThings/EmoTools'

//need to set up context api or redux in order to have shared theme variables. Did not realise this, should have used SASS instead.
const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue)
  useEffect(() => {
    darkMode
      ? console.log('See this works! Dark Mode === True!')
      : console.log('See this works! Dark Mode === False!')
  }, [darkMode])
  return [darkMode, setDarkMode]
}

export default useDarkMode
