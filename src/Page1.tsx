import React, {useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {useLocation, useNavigate} from "react-router-dom";

function Page1() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLocationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 페이지 로드 시 항상 가장 위로 이동
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // url에 해시가 있을 경우 해당 위치로 이동
    if (location.hash === '#restore') {
      backLocationRef.current?.scrollIntoView();
    }
  }, [location.hash]);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        첫페이지, <br/>
        스크롤을 아래로 내려주세요.
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
      <div ref={backLocationRef}  style={{height: "500px"}}>
        뒤로가기 시 돌아와야하는 위치 <br/>
        <button
          onClick={() => {
            // router를 replace로 #restore를 추가
            // 이후 이동
            navigate('#restore', { replace: true });
            navigate('/next');
          }}
        >페이지 이동하기 위해 클릭</button>
      </div>

      <div  style={{height: "500px"}}>
        냉무 4
      </div>
      <div  style={{height: "500px"}}>
        냉무 5
      </div>
      <div  style={{height: "500px"}}>
        냉무 6
      </div>
      <div  style={{height: "500px"}}>
        냉무 7
      </div>
    </header>
  );
}

export default Page1;
