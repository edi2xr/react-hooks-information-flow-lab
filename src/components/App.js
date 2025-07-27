import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "dark" : "light";

  function handleDarkModeClick() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
