import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/next" element={<Page2/>}/>
      </Routes>
    </div>
  );
}

export default App;
