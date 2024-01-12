import React, {useEffect} from 'react';
import logo from './logo.svg';

function Page2() {
  useEffect(() => {
    // 페이지 로드 시 항상 가장 위로 이동
    window.scrollTo(0, 0);
  }, []);

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
        <div  style={{height: "500px"}}>
          냉무 4
        </div>
        <div  style={{height: "500px"}}>
          냉무 5
        </div>
      </header>
    </div>
  );
}

export default Page2;
