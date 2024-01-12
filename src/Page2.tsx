import React from 'react';
import logo from './logo.svg';
import './App.css';

function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          다음 페이지
        </p>
        <div style={{height: "500px"}}>
          냉무 1
        </div>
        <div style={{height: "500px"}}>
          냉무 2
        </div>
        <div  style={{height: "500px"}}>
          냉무 3
        </div>
      </header>
    </div>
  );
}

export default Page;
