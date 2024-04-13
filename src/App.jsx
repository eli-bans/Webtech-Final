import { useState } from 'react'

import NavBar from './components/NavBar';
import Home from './components/home';


function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
          <main className="dark:bg-gray-900">
            <NavBar />
            <Home />
          </main>
      </div>
    </>
  )
};

export default App