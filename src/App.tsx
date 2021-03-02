import React from "react";
import "./App.scss";
import  AppProvider  from "./redux/store";
import Home from "./Components/home";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="App-header">
          <Home />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
