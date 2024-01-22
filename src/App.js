import React, {useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import './css/style.css';

export const Themes = createContext();


function App() {
  const [choiceTheme, setChoiceTheme] = useState(false);
  const [theme, setTheme] = useState("1");

  return (
    <Themes.Provider value={{value:[choiceTheme, setChoiceTheme],value2:[theme, setTheme]}}>
    <BrowserRouter>
       <AppRouter/>
    </BrowserRouter>
    </Themes.Provider>
  );
}

export default App;
