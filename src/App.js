import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import DBC from "./Components/DBC/DBC";
import DBCStylesheet from "./Components/DBC/DBCStylesheet"

function App() {
  return (
    <div className="App">
      <DBC />
      <DBCStylesheet />
    </div>
  );
}

export default App;
