import Login from "./login/Login"
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./homepage/Homepage"
import Register from "./register/Register";

export const ThemeContext = createContext('light')

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App