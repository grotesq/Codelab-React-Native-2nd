import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppProvider} from "./contexts/AppContext";
import Display from "./Display";
import Editor from "./Editor";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Display/>

        <Editor/>
      </div>
    </AppProvider>
  );
}

export default App;
