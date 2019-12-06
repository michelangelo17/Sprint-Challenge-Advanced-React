import React from 'react'
import { DarkModeButton } from './EmoDarkModeSwitch'
import useDarkMode from '../hooks/useDarkMode'


const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return(
    <>
    <DarkModeButton type='button' onClick={toggleMode}>Dark Mode</DarkModeButton>
    </>
  )
}

export default DarkModeSwitch