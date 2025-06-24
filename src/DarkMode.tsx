import { useEffect, useState } from "react";


function DarkMode() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || "light");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode );
    document.documentElement.classList.toggle("dark", darkMode === 'dark');
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');

  }
  return (
    <button onClick={toggleDarkMode} className="text-black dark:text-white">
      {darkMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  )
}

export default DarkMode