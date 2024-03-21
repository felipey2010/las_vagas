'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageValue, setStorageValue } from 'utils'

const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [darkModeActivated, setDarkModeActivated] = useState(false)

  const themeToken = process.env.NEXT_PUBLIC_THEME_STORAGE_NAME

  const toggleTheme = () => {
    const newMode = !darkModeActivated
    setDarkModeActivated(newMode)
    setStorageValue(themeToken, newMode ? 'dark' : 'light')
  }

  useEffect(() => {
    const storedTheme = getStorageValue(themeToken)
    storedTheme === null
      ? setDarkModeActivated(false)
      : setDarkModeActivated(storedTheme === 'dark')
  }, [])

  useEffect(() => {
    if (
      darkModeActivated ||
      getStorageValue(themeToken) === 'dark' ||
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkModeActivated])

  const themeContextValue = {
    darkModeActivated,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
