import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import DBC from "./Components/DBC/DBC";
import Stylesheets from "./Components/Stylesheets"

function App() {
  return (
    <div className="App">
      <DBC />
      <Stylesheets />
    </div>
  );
}

export default App;
