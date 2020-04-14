import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import DBC from "./Components/DBC/DBC";
import dbcStylesheet from "./Stylesheets/DBC/dbcStylesheet";


function App() {
  return (
    <div className="App">
      <DBC />
      <dbcStylesheet />
    </div>
  );
}

export default App;
