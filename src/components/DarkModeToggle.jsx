import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggle = () => setDarkMode((prev) => !prev)

  return (
    <button className="dark-mode-btn" onClick={toggle}>
      <span className="toggle-icon">{darkMode ? '☀️' : '🌙'}</span>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
